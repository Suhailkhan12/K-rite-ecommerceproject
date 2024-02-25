import { createAction } from "../../utils/reducer/reducer.utils"

import { CATEGORIES_ACTION_TYPES } from "./category.types";

// import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

//After Thunk LIbrary
export const fetchCategoriesStart = () => 
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) => 
  createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, 
    categoriesArray
   );

export const fetchCategoriesFailed = (error) => 
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

  
// this is thunk and always represent with async in end // we using saga
// export const fetchCategoriesAsync = () => async (dispatch) => {
//    dispatch(fetchCategoriesStart());
//    try{
//       const categoriesArray = await getCategoriesAndDocuments('categories');
//       dispatch(fetchCategoriesSuccess(categoriesArray));
//    }catch(error){ 
//       dispatch(fetchCategoriesFailed(error));
//    }
// }