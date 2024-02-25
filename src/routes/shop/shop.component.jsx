import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import './shop.styles.scss';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { useDispatch } from 'react-redux';

// import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
// import { setCategories } from '../../store/categories/category.action'; 

//Before redux saga
// import { fetchCategoriesAsync } from '../../store/categories/category.action';
import { fetchCategoriesStart } from '../../store/categories/category.action';


const Shop = () => {
    const dispatch = useDispatch();
    
    // Categories now fetching using Thunk library in category action .js

    // useEffect(() => {
    //     const getCategoriesMap = async () => {
    //         // const categoryMap = await getCategoriesAndDocuments();
    //         // const categoryMap = await getCategoriesAndDocuments('categories');
    //         const categoriesArray = await getCategoriesAndDocuments('categories');
    //         // console.log(categoryMap);
    //         dispatch(setCategories(categoriesArray));
    //     };
    //     getCategoriesMap();
    // }, []);

    useEffect(() => {
        dispatch(fetchCategoriesStart());
    }, []);

    return(
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    )
};


export default Shop;
