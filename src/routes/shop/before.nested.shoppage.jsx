import { useContext, Fragment } from "react";
import './shop.styles.scss';
import { CategoriesContext } from "../../contexts/categories.context";
// import ProductCard from "../../components/product-card/product-card.component";
import CategoryPreview from "../../components/category-preview/category-preview.component";



const Shop = () => {
    const {categoriesMap} = useContext(CategoriesContext)
    return(
        // <Fragment>
        //     {
        //         Object.keys(categoriesMap).map((title)=> (
        //             <Fragment key={title}>
        //                 <h2>{title}</h2>
        //                 <div className="products-container">
        //                     {categoriesMap[title].map((product) => (
        //                         <ProductCard key={product.id} product={product} />
        //                     ))}
        //                 </div>
        //             </Fragment>
        //         ))
        //     }
        //     {/* <div className="products-container">
        //         {products.map((product) => (
        //             <ProductCard key={product.id} product={product} />
        //         ))}
        //     </div> */}
        // </Fragment>
        <div className="shop-container">
        {
            Object.keys(categoriesMap).map((title)=> {
                const products = categoriesMap[title];
                return (
                  <CategoryPreview key={title} title={title} products={products} />
                )
            }
            )
        }
        {/* <div className="products-container">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div> */}
    </div>
    )
};


export default Shop;
