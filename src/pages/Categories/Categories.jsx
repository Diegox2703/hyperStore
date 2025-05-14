import categoriesBanner from '../../images/banner-images/tech.webp'
import { useCategory } from '../../context/categoryContext'
import { useEffect } from 'react'
import { Link } from 'react-router'
import NoItemsFound from '../../components/NoItemsFound/NoItemsFound'
import { faBox, faClose } from '@fortawesome/free-solid-svg-icons'
import Loading from '../../components/Loading/Loading'
import Error from '../../components/Error/Error'
import './Categories.css'

export default function Categories() {
  const { getCategories, categories, isCategoriesLoading, isCategoriesError } = useCategory()

  useEffect(() => {
    getCategories()
  }, [])

  if (isCategoriesError) return <Error icon={faClose} message={'Error al obtener categorias'}/>

  if (isCategoriesLoading) return <Loading icon={faBox}/>

  return (
    <>
        <div className="categories-banner-container">
            <img src={ categoriesBanner } alt="banner" className="categories-banner" />
            <h1 className="categories-banner-title">Categorias</h1>
        </div>
        <div className="categories-container">
            {   
                categories.length !== 0
                ?
                categories.map(category => (
                    <div key={ category._id } className="category-content">
                        <h1 className='category-title title'>{ category.category }</h1>
                        <div className="categories">
                            {
                                category.subcategories.map(subcategory => (
                                    <Link key={ subcategory._id } to={`/categories/${subcategory.subcategory}`}>
                                        <article className="category">
                                            <h2 className="category-title">{ subcategory.subcategory }</h2>
                                        </article>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                ))
                :
                <NoItemsFound icon={faBox} message={'No se encontraron categorias'}/>
            }
        </div>
    </>
  )
}
