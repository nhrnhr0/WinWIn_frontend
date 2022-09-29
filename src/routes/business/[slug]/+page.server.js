import { BACKEND_URL } from "../../../utils/consts";

export function load({ params }) {
  let slug = params.slug;
    let url = BACKEND_URL + '/api/businesses?filters[slug][$eq]=' + slug + '&populate=*';
    return fetch(url).then(res => res.json().then(info => {
    if(info?.data?.length > 0) {
      return info.data[0].attributes;
    }
    return {};
    }));
    
}