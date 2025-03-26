import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faWarning } from '@fortawesome/free-solid-svg-icons'
import { useForm } from 'react-hook-form'
import { useProducts } from '../../context/productContext'
import { useEffect } from 'react'
import './ProductModal.css'

export default function ProductModal() {
    const { isOpen, toggleProductModal, addProduct, editProduct } = useProducts()
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm()
    
    useEffect(() => {
        if (!isOpen) reset()
    }, [isOpen])

    useEffect(() => {
        if (editProduct) {
            setValue('product_name', editProduct.product_name)
            setValue('description', editProduct.description)
            setValue('category', editProduct.category)
            setValue('product_image', editProduct.product_image)
            setValue('price', editProduct.price)
        }
    }, [editProduct])

    if (!isOpen) return;

    return (
        <div className="modal-overlay" onClick={() => toggleProductModal()}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2 className='modal-title'>Nuevo Producto</h2>
                    <div className="close-modal-btn" onClick={() => toggleProductModal()}>
                        <FontAwesomeIcon className='close-modal-icon' icon={faClose}/>
                    </div>
                </div>
                <div className="modal-body">
                    <form className="product-form" onSubmit={handleSubmit(addProduct)}>
                        <div className="input-group">
                            <input {...register('product_name', {
                                required: 'Campo vacio', 
                                minLength: {value: 3, message: 'Debe tener un minimo de 3 caracteres'},
                                maxLength: {value: 100, message: 'Debe tener un maximo de 100 caracteres'}

                            })} className='input-field' type="text" placeholder='Nombre del producto'/>
                            { errors.product_name && <FontAwesomeIcon className='warning-icon' icon={faWarning} />}
                        </div>
                        { errors.product_name  && <span className="error-msg">{errors.product_name.message}</span> }
                        <div className="input-group description-container">
                            <textarea {...register('description', {
                                required: 'Campo vacio',
                                minLength: {value: 30, message: 'Debe tener un minimo de 30 caracteres'},
                                maxLength: {value: 1000, message: 'Debe tener un maximo de 1000 caracteres'}
                            })} className='textarea-input' placeholder='Descripcion'></textarea>
                            { errors.description && <FontAwesomeIcon className='warning-icon' icon={faWarning} />}
                        </div>
                        { errors.description && <span className="error-msg">{errors.description.message}</span> }
                        <div className="input-group">
                            <select {...register('category', {
                                required: 'Campo vacio'
                            })} className='input-field'>
                                <option value="">...</option>
                                <option value="tecnologia">Tecnologia</option>
                                <option value="ropa">Ropa</option>
                                <option value="deportes">Deportes</option>
                                <option value="electrodomesticos">Electrodomesticos</option>
                                <option value="muebles">Muebles</option>
                                <option value="arte">Arte</option>
                            </select>
                            { errors.category && <FontAwesomeIcon className='warning-icon' icon={faWarning} />}
                        </div>
                        { errors.category && <span className="error-msg">{errors.category.message}</span> }
                        <div className="input-group">
                            <input {...register('product_image', {
                                required: 'Campo vacio'
                            })} className='input-field' type="url" placeholder='URL de la imagen'/>
                            { errors.product_image && <FontAwesomeIcon className='warning-icon' icon={faWarning} />}
                        </div>
                        { errors.product_image && <span className="error-msg">{errors.product_image.message}</span> }
                        <div className="input-group">
                            <input {...register('price', {
                                required: 'Campo vacio',
                                min: {value: 0.01, message: 'El precio debe ser mayor a 0'}
                            })} className='input-field' type="number" step={0.01} placeholder='Precio'/>
                            { errors.price && <FontAwesomeIcon className='warning-icon' icon={faWarning} />}
                        </div>
                        { errors.price && <span className="error-msg">{errors.price.message}</span> }
                        <div className="new-product-btn-container">
                            <button className="new-product-btn">Subir</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}