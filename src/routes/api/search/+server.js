import { error } from '@sveltejs/kit';
 

import { json } from '@sveltejs/kit';
 

async function getBusinesses(search, location, businessCategories) {

}
/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  debugger;
  const searchInfo = await request.json();
  const { search, location, businessCategories, charitiesCategories, filterGroup } = searchInfo;
  if(filterGroup === 'businesses' || filterGroup === 'all') {
    const businesses = await getBusinesses(search, location, businessCategories);
  }
  // if(filterGroup === 'charities' || filterGroup === 'all') {
  //   const charities = await getCharities(search, location, charitiesCategories);
  // }
  console.log('searchInfo', searchInfo);
  return json({ searchInfo });
}