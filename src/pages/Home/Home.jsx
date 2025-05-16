import ProductSection from '../../components/ProductSection/ProductSection'
import FeatureSection from '../../components/FeatureSection/FeatureSection'
import { Link } from 'react-router'

export default function Home() {
    return (
        <>  
            <ProductSection title={'Laptops'} subcategory={'Laptops'}/>
            <ProductSection title={'Sofas'} subcategory={'Sofas'}/>
            <ProductSection title={'Neveras'} subcategory={'Neveras'}/>
            <ProductSection title={'Camisas'} subcategory={'Camisas'}/>
            <ProductSection title={'Guitarras'} subcategory={'Guitarras'}/>
            <div className="see-more-categories-contaiener">
                <Link to={'/categories'} className='see-more-categories'>Ver mas categorias</Link>
            </div>
            <FeatureSection/>
        </>
    )
}