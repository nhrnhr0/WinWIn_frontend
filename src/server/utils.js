import {
    MeiliSearch
} from 'meilisearch'

// create a singoleton instance of MeiliSearch client
let client = undefined;
// http://52.14.213.58:7700/
function init_client() {
    if (client === undefined) {
        client = new MeiliSearch({
            host: import.meta.env['VITE_MEILISEARCH_HOST'],
            apiKey: import.meta.env['VITE_MEILISEARCH_API_KEY']
        })

        // client.index('business').updateSettings({
        //     //filterableAttributes: ['BUSINESS_CATEGORIES',],
        //     //sortableAttributes: ['_geo']
        // })
    }
    return client
}

export function get_meilisearch_client() {
    // console.log('get_meilisearch_client', client);
    if (client === undefined) {
        init_client()
    }
    return client
}