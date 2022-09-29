import { error } from '@sveltejs/kit';
 

import { json } from '@sveltejs/kit';
import { get_meilisearch_client } from '../../../server/utils';
 

async function getBusinesses(search, location, businessCategories) {
  let client = get_meilisearch_client();
  let index = client.index('business');
  let searchResult = await index.search(search, {});
  if (businessCategories) {
    searchResult.hits = searchResult.hits.filter(
      (item) => item.business_categories && item.business_categories.find((category) => businessCategories.includes(category.name)) !== undefined
    );
  }
  return searchResult.hits;
}

async function getCharities(search, location, charitiesCategories) {
  let client = get_meilisearch_client();
  let index = client.index('institution');
  // if charitiesCategories is not empty, filter by categories, if location is not empty, order by location
  // filters [institution_categories=charitiesCategories[0], institution_categories=charitiesCategories[1], ...]
  let filters_array = undefined;
  if (charitiesCategories) {
    filters_array = [charitiesCategories.map((category) => `institution_categories="${category}"`)];
  }
  let searchResult = await index.search(search, {
    filter: filters_array,
  });
  // debugger;
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
  const { search, location, businessCategories, charitiesCategories, filterGroup } = searchInfo;
  let businesses = [];
  let charities = [];
  
  if(filterGroup === 'businesses' || filterGroup === 'all') {
    businesses = await getBusinesses(search, location, businessCategories);
  }
  if (filterGroup === 'charities' || filterGroup === 'all') {
    charities = await getCharities(search, location, charitiesCategories);
  }
  // if(filterGroup === 'charities' || filterGroup === 'all') {
  //   const charities = await getCharities(search, location, charitiesCategories);
  // }

  console.log('businesses', businesses);
  console.log('charities', charities);
  // merge businesses and charities on createdAt
  const merged = [...businesses, ...charities].sort((a, b) => b.createdAt - a.createdAt);
  return json(merged);
}