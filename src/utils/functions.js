


export function searchParamsToSeachObject(searchParams) {
    
  const searchObject = {
    search: searchParams.get("search") || "",
    location: searchParams.get("location") || "",
    businessCategories:
      searchParams.get("businessCategories") &&
      searchParams.get("businessCategories") != ""
        ? searchParams.get("businessCategories").split(",")
        : undefined,
    charitiesCategories:
      searchParams.get("charitiesCategories") &&
      searchParams.get("charitiesCategories") != ""
        ? searchParams.get("charitiesCategories").split(",")
        : undefined,
    filterGroup: searchParams.get("filterGroup") || "all",
    }
    return searchObject;
}

export function searchObjectToSearchParams(searchObject) {
    let searchParams = new URLSearchParams();
    searchParams.set("search", searchObject.search);
    searchParams.set("location", searchObject.location);
    searchParams.set("businessCategories", searchObject.businessCategories);
    searchParams.set("charitiesCategories", searchObject.charitiesCategories);
    searchParams.set("filterGroup", searchObject.filterGroup);
    return searchParams;
}
