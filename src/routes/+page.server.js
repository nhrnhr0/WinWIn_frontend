import { URL_MAIN_PAGE_INFO } from "../utils/consts";
import { compile } from 'mdsvex';

export function load({ params }) {
  return fetch(URL_MAIN_PAGE_INFO).then(res => res.json().then(info => {
    // return info.data.attributes but edit info.data.attributes.about from markdown to html
    return compile(info.data.attributes.about).then(html => {
      info.data.attributes.about = html?.code;
      return info.data.attributes;
    });
    
  }));
}