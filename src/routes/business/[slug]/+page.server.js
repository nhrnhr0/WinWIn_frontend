import { BACKEND_URL } from "../../../utils/consts";
import { compile } from 'mdsvex';

export function load({ params }) {
  let slug = params.slug;
  let popstr = 'populate=favicon,contact_info,header_image,images,opening_hours,institutions,institutions.favicon,institutions.contact_info,institutions.header_image';
    let url = BACKEND_URL + '/api/businesses?filters[slug][$eq]=' + slug + '&' + popstr;
    console.log(url);
    // let url = `${BACKEND_URL}/api/business/${encodeURIComponent(slug)}?populate=*`;
    return fetch(url).then(res => res.json().then(info => {
    if(info?.data?.length > 0) {
      let data = info.data[0].attributes;
      // return data but edit data.description from markdown to html
      return compile(data?.description  || '').then(html => {
        data.description = html?.code;
        return data;
      });
    } else {
      return {};
    }
    }));
    
}