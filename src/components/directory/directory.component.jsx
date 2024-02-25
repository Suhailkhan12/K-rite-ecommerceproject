// import CategoryItem from "../category-item/category-item.component";   change name to directory item
import DirectoryItem from '../directory-item/directory-item.component';
import './directory.styles.scss'


const Directory = ({categories}) => {
    return(
      <div className="directory-container">
        {categories.map((category) => (
          <DirectoryItem key={category.id} category={category} />
        ))}
      </div>
    )
}

export default Directory;