import { error } from '@sveltejs/kit';
 

import { json } from '@sveltejs/kit';
import { get_meilisearch_client } from '../../../server/utils';
 

async function getBusinesses(search, selectedGeo, businessCategories) {
  let client = get_meilisearch_client();
  let index = client.index('business');
  let fitlers_array = undefined;
  if (businessCategories) {
    //filters_array = [charitiesCategories.map((category) => `institution_categories="${category}"`)];
    fitlers_array = [businessCategories.map((category) => `business_categories="${category}"`)];
  }
  //selectedGeo
  let sort = undefined;
  if(selectedGeo){
  sort = ['_geoPoint(' + selectedGeo.lat + ',' + selectedGeo.lng + '):asc'];
  }
  let searchResult = await index.search(search, {
    filter: fitlers_array,
    sort: sort,
  });
  return searchResult.hits;
  // if (businessCategories) {
  //   searchResult.hits = searchResult.hits.filter(
  //     (item) => item.business_categories && item.business_categories.find((category) => businessCategories.includes(category.name)) !== undefined
  //   );
  // }
  // return searchResult.hits;
}

async function getCharities(search, selectedGeo, charitiesCategories) {
  let client = get_meilisearch_client();
  let index = client.index('institution');
  // if charitiesCategories is not empty, filter by categories, if location is not empty, order by location
  // filters [institution_categories=charitiesCategories[0], institution_categories=charitiesCategories[1], ...]
  let filters_array = undefined;
  if (charitiesCategories) {
    filters_array = [charitiesCategories.map((category) => `institution_categories="${category}"`)];
  }
  let sort = undefined;
  if(selectedGeo){
  sort = ['_geoPoint(' + selectedGeo.lat + ',' + selectedGeo.lng + '):asc'];
  }
  let searchResult = await index.search(search, {
    filter: filters_array,
    sort: sort,
  });
  // if (charitiesCategories) {
  //   searchResult.hits = searchResult.hits.filter(
  //     (item) => item.institution_categories && item.institution_categories.find((category) => charitiesCategories.includes(category)) !== undefined
  //   );
  // }
  return searchResult.hits;
}
/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  const searchInfo = await request.json();
  const { search, location, businessCategories, charitiesCategories, filterGroup,selectedGeo } = searchInfo;
  let businesses = [];
  let charities = [];
  let businesses_promise;
  let charities_promise;
  if(filterGroup === 'businesses' || filterGroup === 'all') {
    businesses_promise = getBusinesses(search, selectedGeo, businessCategories);
  }
  if (filterGroup === 'charities' || filterGroup === 'all') {
    charities_promise = getCharities(search, selectedGeo, charitiesCategories);
  }
  [businesses, charities] = await Promise.all([businesses_promise, charities_promise]);
  businesses = businesses || [];
  charities = charities || [];
  const merged = [...businesses, ...charities].sort((a, b) => b.createdAt - a.createdAt);
  return json(merged);
}