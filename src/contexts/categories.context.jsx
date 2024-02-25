// import { createContext, useState, useEffect } from "react";

// // import PRODUCTS from '../shop-data.json';
// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";

// import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

// import SHOP_DATA from "../shop-data";


// // export const ProductsContext = createContext({
// //     products:[],

// // });


// export const CategoriesContext = createContext({
//     categoriesMap:[],

// });

// // export const ProductsProvider = ({children}) => {
// //     const[products, setProducts] = useState([]);

// //     useEffect(() => {
// //         const getCategoriesMap = async () => {
// //             const categoryMap = await getCategoriesAndDocuments();
// //             console.log(categoryMap)
// //         }
// //         getCategoriesMap();
// //     }, []);

// //     // useEffect(()=>{
// //     //     addCollectionAndDocuments('categories', SHOP_DATA)
// //     // },[])

// //     const value = {products};
// //     return(
// //         <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
// //     )
// // }


// export const CategoriesProvider = ({children}) => {
//     const[categoriesMap, setCategoriesMap] = useState({});

//     useEffect(() => {
//         const getCategoriesMap = async () => {
//             const categoryMap = await getCategoriesAndDocuments();
//             console.log(categoryMap);
//             setCategoriesMap(categoryMap);
//         }
//         getCategoriesMap();
//     }, []);

//     // useEffect(()=>{
//     //     addCollectionAndDocuments('categories', SHOP_DATA)
//     // },[])

//     const value = {categoriesMap};
//     return(
//         <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
//     )
// }