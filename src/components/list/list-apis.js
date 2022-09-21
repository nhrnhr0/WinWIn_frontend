import { URL_BUSINESS_CATEGORIES_OPTIONS, URL_CHARITIES_CATEGORIES_OPTIONS } from "../../utils/consts";
import { searchObjectToSearchParams, searchParamsToSeachObject } from "../../utils/functions";

export function getBusinessCategoriesOptions(filterText) {
  //filterText = filterText ? filterText.replace(' ','_') : '';

  return new Promise((resolve, reject) => {
    let url = URL_BUSINESS_CATEGORIES_OPTIONS;
    if (filterText) {
        url += '&filters[name][$contains]=' + filterText;
    }
    fetch(url).then(res => res.json().then(data => {
        /**
         * example of data:
         * {
"data": [
{
"id": 1,
"attributes": {
"name": "חנות כלבו",
"createdAt": "2022-09-20T12:45:42.386Z",
"updatedAt": "2022-09-20T12:52:55.167Z",
"publishedAt": "2022-09-20T12:46:44.563Z",
"children": {
"data": []
},
"parent": {
"data": {
"id": 11,
"attributes": {
"name": "קניות",
"createdAt": "2022-09-20T12:51:55.881Z",
"updatedAt": "2022-09-21T14:56:21.071Z",
"publishedAt": "2022-09-20T12:51:57.766Z"
}
}
}
}
},
{
"id": 2,
"attributes": {
"name": "חנות רהיטים",
"createdAt": "2022-09-20T12:45:48.844Z",
"updatedAt": "2022-09-20T12:53:17.316Z",
"publishedAt": "2022-09-20T12:46:50.244Z",
"children": {
"data": []
},
"parent": {
"data": {
"id": 11,
"attributes": {
"name": "קניות",
"createdAt": "2022-09-20T12:51:55.881Z",
"updatedAt": "2022-09-21T14:56:21.071Z",
"publishedAt": "2022-09-20T12:51:57.766Z"
}
}
}
}
},
{
"id": 4,
"attributes": {
"name": "חנות חשמל ואלקטרוניקה",
"createdAt": "2022-09-20T12:46:04.598Z",
"updatedAt": "2022-09-20T12:52:43.029Z",
"publishedAt": "2022-09-20T12:46:41.979Z",
"children": {
"data": []
},
"parent": {
"data": {
"id": 11,
"attributes": {
"name": "קניות",
"createdAt": "2022-09-20T12:51:55.881Z",
"updatedAt": "2022-09-21T14:56:21.071Z",
"publishedAt": "2022-09-20T12:51:57.766Z"
}
}
}
}
},
{
"id": 5,
"attributes": {
"name": "חנות חומרי בניין",
"createdAt": "2022-09-20T12:46:11.489Z",
"updatedAt": "2022-09-20T12:52:30.385Z",
"publishedAt": "2022-09-20T12:46:39.369Z",
"children": {
"data": []
},
"parent": {
"data": {
"id": 11,
"attributes": {
"name": "קניות",
"createdAt": "2022-09-20T12:51:55.881Z",
"updatedAt": "2022-09-21T14:56:21.071Z",
"publishedAt": "2022-09-20T12:51:57.766Z"
}
}
}
}
},
{
"id": 7,
"attributes": {
"name": "חנות מוצרי חשמל",
"createdAt": "2022-09-20T12:46:23.668Z",
"updatedAt": "2022-09-20T12:53:03.286Z",
"publishedAt": "2022-09-20T12:46:47.426Z",
"children": {
"data": []
},
"parent": {
"data": {
"id": 11,
"attributes": {
"name": "קניות",
"createdAt": "2022-09-20T12:51:55.881Z",
"updatedAt": "2022-09-21T14:56:21.071Z",
"publishedAt": "2022-09-20T12:51:57.766Z"
}
}
}
}
}
],
"meta": {
"pagination": {
"page": 1,
"pageSize": 25,
"pageCount": 1,
"total": 5
}
}
}
         */
        // convert to array of objects:
        // {id, name, group(parent.name)}
        let options = data.data.map(item => {
            return {
                value: item.attributes.name,
                label: item.attributes.name,
                group: item.attributes.parent.data?.attributes?.name
            }
        });
        resolve(options);
    }).catch(err => {
        reject(err);
    }
    ));
    });
}


export function getCharitiesCategoriesOptions(filterText) {
    return new Promise((resolve, reject) => {
        fetch(URL_CHARITIES_CATEGORIES_OPTIONS).then(res => res.json().then(data => {
            let options = data.data.map(item => {
                return {
                    value: item.attributes.name,
                    label: item.attributes.name,
                    group: item.attributes.parent.data?.attributes?.name
                }
            });
            resolve(options);
        }).catch(err => {
            reject(err);
        }
        ));
    });

}



export function request_search(serachObject) {
    /*
    serachObject = {
        {"search":"חומוס","location":"תל אביב","businessCategories":["חנות רהיטים","חנות כלבו","טמבוריה"],"charitiesCategories":["משפתות נזקקות","בעלי חיים"],"filterGroup":"charities"}
    */
    return new Promise((resolve, reject) => {
        let URL_SEARCH = 'api/search';
        fetch(URL_SEARCH, {
      method: 'POST',
      body: JSON.stringify(serachObject),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json().then(data => {
            resolve(data);
        }
        ).catch(err => {
            reject(err);
        }
        ));
    });
}

