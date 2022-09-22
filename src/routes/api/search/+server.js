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
  let searchResult = await index.search(search, {});
  if (charitiesCategories) {
    searchResult.hits = searchResult.hits.filter(
      (item) => item.charities_categories && item.charities_categories.find((category) => charitiesCategories.includes(category.name)) !== undefined
    );
  }
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