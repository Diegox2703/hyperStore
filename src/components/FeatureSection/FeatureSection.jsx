import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingDollar, faHeadset, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import './FeatureSection.css'

export default function FeatureSection() {
    return (
        <>
            <h1 className="title-sections">Caracteristicas del servicio</h1>
            <section className="service-features-section">
                <article className="service-features">
                    <div className="feature feature-1">
                        <div className="feature-icon">
                            <div className="icon-container">
                                <FontAwesomeIcon className='icon' icon={faTruckFast}/>
                            </div>
                        </div>
                        <div className="feature-description">
                            <p className="description"><b>Envío Rápido y Seguro</b></p>
                            <p className="description">Recibe tus productos en tiempo récord.</p>
                        </div>
                    </div>
                    <div className="feature feature-2">
                        <div className="feature-icon">
                            <div className="icon-container">
                                <FontAwesomeIcon className='icon' icon={faHandHoldingDollar}/>
                            </div>
                        </div>
                        <div className="feature-description">
                            <p className="description"><b>Devoluciones Sin Complicaciones</b></p>
                            <p className="description">Cambia o devuelve sin problemas.</p>
                        </div>
                    </div>
                    <div className="feature feature-3">
                        <div className="feature-icon">
                            <div className="icon-container">
                                <FontAwesomeIcon className='icon' icon={faHeadset}/>
                            </div>
                        </div>
                        <div className="feature-description">
                            <p className="description"><b>Atención al Cliente 24/7</b></p>
                            <p className="description">Estamos aquí para ayudarte en cualquier momento.</p>
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}