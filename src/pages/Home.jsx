import Banner from '../components/Banner/Banner'
import ProductSection from '../components/ProductSection/ProductSection'
import FeatureSection from '../components/FeatureSection/FeatureSection'

export default function Home() {
    return (
        <>
            <Banner/>
            <main className="main">
                <div className="main-content">
                    <ProductSection/>
                    <FeatureSection/>
                </div>
            </main>
        </>
    )
}