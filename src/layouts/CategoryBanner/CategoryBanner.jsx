import { useLocation } from 'react-router'
import categoriesBanner from '../../images/category-banner.jpg'

export default function CategoryBanner() {
  const { pathname } = useLocation()

  if (pathname !== '/categories') return

  return (
    <div className="categories-banner-container">
        <div className="category-content">
            <img src={ categoriesBanner } alt="banner" className="categories-banner" />
            <h1 className="categories-banner-title">Categorias</h1>
        </div>
    </div>
  )
}
