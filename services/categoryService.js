import { baseUrl } from "../constants/config";

// Fetch all categories
export const fetchCategories = async function () {
  const res = await fetch(baseUrl + "api/categories?parentId=0");
  const results = await res.json();
  if (results.status == true) {
    let newCategories = [];
    newCategories = [...results.categories];
    return Promise.all(
      newCategories.map(async (cat) => await fetchSubCategories(cat))
    ).then(() => newCategories);
  }
};

// Fetch sub categories for a given category
export const fetchSubCategories = async function (categoryObject) {
  const res = await fetch(
    baseUrl + "api/categories?parentId=" + categoryObject.id
  );
  const results = await res.json();
  if (results.status == true) {
    categoryObject.label = categoryObject.title;
    categoryObject.value = categoryObject.id;
    if (results.categories.length === 0) {
      return;
    }
    categoryObject.children = [...results.categories];
    categoryObject.children.forEach((cat) => {
      fetchSubCategories(cat);
    });
  }
};
