
export const BACKEND_URL = import.meta.env['VITE_BACKEND_URL']
export const BACKEND_MEDIA_URL = import.meta.env['VITE_BACKEND_MEDIA_URL']
export const URL_MAIN_PAGE_INFO = BACKEND_URL + '/api/main-page?populate=*';
export const URL_BUSINESS_CATEGORIES_OPTIONS = BACKEND_URL + '/api/business-categories/?populate=parent';
export const URL_CHARITIES_CATEGORIES_OPTIONS = BACKEND_URL + '/api/institution-categories/?populate=parent';
