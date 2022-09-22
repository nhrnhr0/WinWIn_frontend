

import { MeiliSearch } from 'meilisearch'

// create a singoleton instance of MeiliSearch client
let client = undefined;
function init_client() {
    if (client === undefined) {
        client = new MeiliSearch({
            host: 'http://localhost:7700',
            apiKey: 'masterKey',
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