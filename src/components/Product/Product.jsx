import laptopImg from '../../images/product-images/laptop.webp'

export default function Product() {
    return (
        <article className="product-card">
            <section className="product-image">
                <img src={laptopImg} alt="product-image" className="image"/>
            </section>
            <section className="product-title-section">
                <h2 className="product-title" title="Laptop Gamer Hp Victus 16-d0504la Memoria Ram 8 Gb Full Hd Azul">Laptop Gamer Hp Victus 16-d0504la Memoria Ram 8 Gb Full Hd Azul</h2>
            </section>
            <section className="product-buy-btn">
                <a href="#" className="buy-btn">
                    <p className="price">$3.099.000</p>
                </a>
            </section>
        </article>
    )
}