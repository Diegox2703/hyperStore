import techImg from '../../images/banner-images/tech.webp'
import clothesImg from '../../images/banner-images/clothes-illustration.jpg'
import sportImg from '../../images/banner-images/sport-illustration.webp'
import householdAppliancesImg from '../../images/banner-images/household-appliances.jpg'
import furnitureImg from '../../images/banner-images/furniture.webp'
import artImg from '../../images/banner-images/art-2.jpg'
import { useEffect, useRef, useState } from 'react'
import './Banner.css'

export default function Banner() {
    let [sliderIdx, setSlidexIdx] = useState(1)  
    let intervalRef = useRef(null)

    function autoPlayCarousel(index) {
        const sliders = document.querySelectorAll('.slider')

        intervalRef.current = setInterval(() => {
            sliders[index].checked = true
            index !== 5 ? index++ : index = 0
        }, 6000)
    }

    function stopAndRestartCarousel(event) {
        const currentSlider = parseInt(event.target.dataset.slideridx)
        clearInterval(intervalRef.current)
        setSlidexIdx(currentSlider)
    }

    useEffect(() => {
        autoPlayCarousel(sliderIdx) 

        return () => clearInterval(intervalRef.current)
    }, [sliderIdx])

    return (
        <>
            <section className="banner">
                <input type="radio" name="slider" className='slider' id="toggle-slider-1" data-slideridx='0' onClick={stopAndRestartCarousel} defaultChecked/>
                <input type="radio" name="slider" className='slider' id="toggle-slider-2" data-slideridx='1' onClick={stopAndRestartCarousel}/>
                <input type="radio" name="slider" className='slider' id="toggle-slider-3" data-slideridx='2' onClick={stopAndRestartCarousel}/>
                <input type="radio" name="slider" className='slider' id="toggle-slider-4" data-slideridx='3' onClick={stopAndRestartCarousel}/>
                <input type="radio" name="slider" className='slider' id="toggle-slider-5" data-slideridx='4' onClick={stopAndRestartCarousel}/>
                <input type="radio" name="slider" className='slider' id="toggle-slider-6" data-slideridx='5' onClick={stopAndRestartCarousel}/>
                <div className="slider-section slider-section-1">
                    <div className="slider-container">
                        <div className="slider-content">
                            <div className="image-description">
                                <h1 className="title">Tecnologia</h1>
                                <p className="description">Explora nuestra sección de tecnología, donde encontrarás lo último en smartphones, laptops, accesorios y más. Equipos de alta calidad a los mejores precios, ideales para mantenerte conectado y optimizar tu productividad. ¡Descubre tus próximos gadgets aquí!.</p>
                            </div>
                            <div className="image">
                                <img src={techImg} alt="slide-image"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider-section slider-section-2">
                    <div className="slider-container">
                        <div className="slider-content">
                            <div className="image-description">
                                <h1 className="title">Ropa</h1>
                                <p className="description">Explora nuestra colección de ropa en línea, diseñada para todos los estilos y ocasiones. Desde prendas casuales hasta elegantes opciones para eventos especiales, aquí encontrarás variedad, calidad y las últimas tendencias.</p>
                            </div>
                            <div className="image">
                                <img src={clothesImg}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider-section slider-section-3">
                    <div className="slider-container">
                        <div className="slider-content">
                            <div className="image-description">
                                <h1 className="title">Deportes</h1>
                                <p className="description">En nuestra sección de deportes, encontrarás todo lo que necesitas para mantenerte activo y en forma. Desde ropa deportiva y calzado especializado hasta equipos y accesorios para diversas disciplinas, ofrecemos productos de alta calidad para deportistas de todos los niveles.</p>
                            </div>
                            <div className="image">
                                <img src={sportImg} alt="slide-image"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider-section slider-section-4">
                    <div className="slider-container">
                        <div className="slider-content">
                            <div className="image-description">
                                <h1 className="title">Electrodomesticos</h1>
                                <p className="description">Descubre una amplia variedad de productos que harán tu vida más cómoda y eficiente. Desde refrigeradores y lavadoras hasta pequeños electrodomésticos de cocina y limpieza, ofrecemos las mejores marcas y tecnología de vanguardia para tu hogar.</p>
                            </div>
                            <div className="image">
                                <img src={householdAppliancesImg} alt="slide-image"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider-section slider-section-5">
                    <div className="slider-container">
                        <div className="slider-content">
                            <div className="image-description">
                                <h1 className="title">Muebles</h1>
                                <p className="description">Explora nuestra sección de muebles y transforma tus espacios con estilo y comodidad. Encuentra desde sofás y camas hasta estanterías y mesas, perfectos para cada rincón de tu hogar. Ofrecemos diseños modernos y clásicos, pensados para combinar funcionalidad y estética, y adaptarse a tu estilo de vida.</p>
                            </div>
                            <div className="image">
                                <img src={furnitureImg}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider-section slider-section-6">
                    <div className="slider-container">
                        <div className="slider-content">
                            <div className="image-description">
                                <h1 className="title">Arte</h1>
                                <p className="description">Explora nuestra sección de arte y descubre una variedad de productos para inspirarte. Desde pinturas y esculturas hasta suministros de arte de calidad, ofrecemos todo lo que necesitas para expresar tu creatividad y darle un toque artístico a tu vida.</p>
                            </div>
                            <div className="image">
                                <img src={artImg}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="slider-buttons-section">
            <div className="slider-buttons-container">
                <div className="slider-buttons">
                    <label htmlFor="toggle-slider-1" className="slider-button"></label>
                    <label htmlFor="toggle-slider-2" className="slider-button"></label>
                    <label htmlFor="toggle-slider-3" className="slider-button"></label>
                    <label htmlFor="toggle-slider-4" className="slider-button"></label>
                    <label htmlFor="toggle-slider-5" className="slider-button"></label>
                    <label htmlFor="toggle-slider-6" className="slider-button"></label>
                </div>
            </div>
            </section>
        </>
    )
}