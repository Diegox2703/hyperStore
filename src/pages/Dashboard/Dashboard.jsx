import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Dashboard.css'
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'

export default function Dashboard() {
    return (
        <div className="dashboard-container">
            <h1 className="title dashboard-title">Administrador de productos</h1>
            <p className="products-number">Hay un total de 8 productos.</p>
            <section className="add-product-btn-section">
                <div className="add-product-btn-container">
                    <button className="add-product-btn">Añadir</button>
                </div>
            </section>
            <table className="main-dashboard">
                <thead className="dashboard-header">
                    <tr className="dashboard-row">
                        <th className="dashboard-cell">Imagen</th>
                        <th className="dashboard-cell">Producto</th>
                        <th className="dashboard-cell">Descripcion</th>
                        <th className="dashboard-cell">Precio</th>
                        <th className="dashboard-cell">Acciones</th>
                    </tr>
                </thead>
                <tbody className="dashboard-body">
                    <tr className="dashboard-row">
                        <td className="dashboard-cell">
                            <div className="product-image">
                                <img className="image" src="../images/product-images/laptop.webp" alt="image"/>
                            </div>
                        </td>
                        <td className="dashboard-cell">
                            <div className="product-name">
                                <p className="product">Laptop Gamer Hp Victus 16-d0504la Memoria Ram 8 Gb Full Hd Azul</p>
                            </div>
                        </td>
                        <td className="dashboard-cell">
                            <div className="product-description">
                                <p className="description">Energizado por el procesador Intel Core, La laptop Victus by HP de 16,1 pulgadas tiene todas las funciones para manejar tus juegos y tus necesidades diarias. Aumenta tu flexibilidad de juego con un teclado para juegos multi uso y disfruta de una pantalla de frecuencia de actualización rápida sin defectos de imagen, aprovecha el calor de cada juego con un sistema de enfriamiento que evita el sobrecalentamiento. Eleva tu experiencia de juego más allá de tu hardware con OMEN Gaming Hub.</p>
                            </div>
                        </td>
                        <td className="dashboard-cell">
                            <div className="product-price">
                                <p className="price">$
                                    3.099.000</p>
                            </div>
                        </td>
                        <td className="dashboard-cell">
                            <div className="action-buttons">
                                <div className="edit-button-container">
                                    <button className="edit-button">
                                        <FontAwesomeIcon icon={faPencil}/>
                                    </button>
                                </div>
                                <div className="delete-button-container">
                                    <button className="delete-button">
                                        <FontAwesomeIcon icon={faTrash}/>
                                    </button>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="dashboard-row">
                        <td className="dashboard-cell">
                            <div className="product-image">
                                <img className="image" src="../images/product-images/painting.webp" alt="image"/>
                            </div>
                        </td>
                        <td className="dashboard-cell">
                            <div className="product-name">
                                <p className="product">Cuadro de Arte Abstracto Moderno</p>
                            </div>
                        </td>
                        <td className="dashboard-cell">
                            <div className="product-description">
                                <p className="description">Impresión Digital Sobre Lienzo 100%
                                    Disponible en 4 presentaciones
                                    Rollo de lienzo
                                    Lienzo en bastidor, listo para colgar
                                    Rollo adhesivo
                                    Adhesivo sobre MDF
                                    Cantos forrados en la imagen
                                    Los colores pueden variar, debido a la configuración de su dispositivo.
                                    Conoce nuestros cuadros para sala</p>
                            </div>
                        </td>
                        <td className="dashboard-cell">
                            <div className="product-price">
                                <p className="price">$
                                    50.000</p>
                            </div>
                        </td>
                        <td className="dashboard-cell">
                            <div className="action-buttons">
                                <div className="edit-button-container">
                                    <button className="edit-button">
                                        <FontAwesomeIcon icon={faPencil}/>
                                    </button>
                                </div>
                                <div className="delete-button-container">
                                    <button className="delete-button">
                                        <FontAwesomeIcon icon={faTrash}/>
                                    </button>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="dashboard-row">
                        <td className="dashboard-cell">
                            <div className="product-image">
                                <img className="image" src="../images/product-images/furniture.webp" alt="image"/>
                            </div>
                        </td>
                        <td className="dashboard-cell">
                            <div className="product-name">
                                <p className="product">Comedor Marvien 2P</p>
                            </div>
                        </td>
                        <td className="dashboard-cell">
                            <div className="product-description">
                                <p className="description">Este comedor moderno es una expresión de elegancia y simplicidad estilizada.
                                    Sus superficies pulidas y suaves aportan una sensación de sofisticación y claridad al espacio.
                                    
                                    La simplicidad es la clave en este comedor. Cada pieza ha sido diseñada con líneas limpias y superficies pulidas, creando un ambiente de minimalismo elegante.</p>
                            </div>
                        </td>
                        <td className="dashboard-cell">
                            <div className="product-price">
                                <p className="price">$
                                    509.900</p>
                            </div>
                        </td>
                        <td className="dashboard-cell">
                            <div className="action-buttons">
                                <div className="edit-button-container">
                                    <button className="edit-button">
                                        <FontAwesomeIcon icon={faPencil}/>
                                    </button>
                                </div>
                                <div className="delete-button-container">
                                    <button className="delete-button">
                                        <FontAwesomeIcon icon={faTrash}/>
                                    </button>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="dashboard-row">
                        <td className="dashboard-cell">
                            <div className="product-image">
                                <img className="image" src="../images/product-images/clothes.avif" alt="image"/>
                            </div>
                        </td>
                        <td className="dashboard-cell">
                            <div className="product-name">
                                <p className="product">Pantalón Wide Leg Mujer Tiro alto University Club</p>
                            </div>
                        </td>
                        <td className="dashboard-cell">
                            <div className="product-description">
                                <p className="description">Pantalon mujer marca University Club, hecho en Colombia, diseño liso, color negro.</p>
                            </div>
                        </td>
                        <td className="dashboard-cell">
                            <div className="product-price">
                                <p className="price">$
                                    89.990</p>
                            </div>
                        </td>
                        <td className="dashboard-cell">
                            <div className="action-buttons">
                                <div className="edit-button-container">
                                    <button className="edit-button">
                                        <FontAwesomeIcon icon={faPencil}/>
                                    </button>
                                </div>
                                <div className="delete-button-container">
                                    <button className="delete-button">
                                        <FontAwesomeIcon icon={faTrash}/>
                                    </button>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="dashboard-row">
                        <td className="dashboard-cell">
                            <div className="product-image">
                                <img className="image" src="../images/product-images/shoes.webp" alt="image"/>
                            </div>
                        </td>
                        <td className="dashboard-cell">
                            <div className="product-name">
                                <p className="product">Adidas Runfalcon 3.0 Tenis azul de hombre para correr</p>
                            </div>
                        </td>
                        <td className="dashboard-cell">
                            <div className="product-description">
                                <p className="description">Ponte esta versátil zapatilla de running adidas para correr en el parque y después tomar un café con tus amigos. Su mediasuela Cloudfoam te ofrece una pisada cómoda nada más ponértela. Presenta una parte superior textil cómoda y transpirable y una suela de goma que proporciona un excelente agarre.</p>
                            </div>
                        </td>
                        <td className="dashboard-cell">
                            <div className="product-price">
                                <p className="price">$
                                    379.950</p>
                            </div>
                        </td>
                        <td className="dashboard-cell">
                            <div className="action-buttons">
                                <div className="edit-button-container">
                                    <button className="edit-button">
                                        <FontAwesomeIcon icon={faPencil}/>
                                    </button>
                                </div>
                                <div className="delete-button-container">
                                    <button className="delete-button">
                                        <FontAwesomeIcon icon={faTrash}/>
                                    </button>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="dashboard-row">
                        <td className="dashboard-cell">
                            <div className="product-image">
                                <img className="image" src="../images/product-images/microwave.webp" alt="image"/>
                            </div>
                        </td>
                        <td className="dashboard-cell">
                            <div className="product-name">
                                <p className="product">HORNO TOSTADOR KALLEY K-MHE18N 18 LITROS NEGRO</p>
                            </div>
                        </td>
                        <td className="dashboard-cell">
                            <div className="product-description">
                                <p className="description">Con 18 litros de capacidad, es el tamaño ideal para que prepares o calientes grandes o pequeñas porciones de comida. Cuenta con control de temperatura hasta 250°C, temporizador hasta 60 minutos, y selector de funciones para que elijas entre 5 funciones la que más se adapte a tu preparación, entre estas opciones cuentas con la función rostizador para tener cocciones uniformes. Además, cuenta con bandeja superior para asar o calentar mientras horneas.</p>
                            </div>
                        </td>
                        <td className="dashboard-cell">
                            <div className="product-price">
                                <p className="price">$
                                    240.000</p>
                            </div>
                        </td>
                        <td className="dashboard-cell">
                            <div className="action-buttons">
                                <div className="edit-button-container">
                                    <button className="edit-button">
                                        <FontAwesomeIcon icon={faPencil}/>
                                    </button>
                                </div>
                                <div className="delete-button-container">
                                    <button className="delete-button">
                                        <FontAwesomeIcon icon={faTrash}/>
                                    </button>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="dashboard-row">
                        <td className="dashboard-cell">
                            <div className="product-image">
                                <img className="image" src="../images/product-images/furniture-2.webp" alt="image"/>
                            </div>
                        </td>
                        <td className="dashboard-cell">
                            <div className="product-name">
                                <p className="product">Sala Grazia Veracruz Crema</p>
                            </div>
                        </td>
                        <td className="dashboard-cell">
                            <div className="product-description">
                                <p className="description">¿Buscando Sala Modular en L? La Sala Modular Grazia de Only Muebles se acomoda perfecto a tus espacios dando un toque de modernidad para que puedas compartir con familia y amigos increíbles momentos. La sala está fabricada con materiales de alta calidad a un precio competitivo en el mercado permitiendo así, que sea accesible. Envío y armado gratis en ciudades y municipios aledaños a nuestras tiendas físicas, además de 10 años de garantía por enfermedad de madera. Imágenes de referencia, color de madera y tela pueden variar, según disponibilidad.</p>
                            </div>
                        </td>
                        <td className="dashboard-cell">
                            <div className="product-price">
                                <p className="price">$
                                    3.516.750</p>
                            </div>
                        </td>
                        <td className="dashboard-cell">
                            <div className="action-buttons">
                                <div className="edit-button-container">
                                    <button className="edit-button">
                                        <FontAwesomeIcon icon={faPencil}/>
                                    </button>
                                </div>
                                <div className="delete-button-container">
                                    <button className="delete-button">
                                        <FontAwesomeIcon icon={faTrash}/>
                                    </button>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="dashboard-row">
                        <td className="dashboard-cell">
                            <div className="product-image">
                                <img className="image" src="../images/product-images/tv.webp" alt="image"/>
                            </div>
                        </td>
                        <td className="dashboard-cell">
                            <div className="product-name">
                                <p className="product">Televisor Olimpo 65 Pulgadas Qled UHD Smart Linux TV U4200</p>
                            </div>
                        </td>
                        <td className="dashboard-cell">
                            <div className="product-description">
                                <p className="description">El Televisor Olimpo de 65 pulgadas QLED UHD Smart TV con sistema operativo Linux U4200 es la opción ideal para aquellos que buscan una calidad de imagen excepcional y una experiencia de entretenimiento de primera clase en casa. Con tecnología QLED, resolución UHD y un sistema operativo inteligente, este televisor ofrece una visualización impresionante, funciones avanzadas y acceso a una amplia variedad de contenido en línea.</p>
                            </div>
                        </td>
                        <td className="dashboard-cell">
                            <div className="product-price">
                                <p className="price">$
                                    3.469.000</p>
                            </div>
                        </td>
                        <td className="dashboard-cell">
                            <div className="action-buttons">
                                <div className="edit-button-container">
                                    <button className="edit-button">
                                        <FontAwesomeIcon icon={faPencil}/>
                                    </button>
                                </div>
                                <div className="delete-button-container">
                                    <button className="delete-button">
                                        <FontAwesomeIcon icon={faTrash}/>
                                    </button>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}