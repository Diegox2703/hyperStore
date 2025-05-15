import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faPlus, faWarning } from '@fortawesome/free-solid-svg-icons'
import { useForm } from 'react-hook-form'
import { useProducts } from '../../context/productContext'
import { useEffect, useState } from 'react'
import { useCategory } from '../../context/categoryContext'
import './ProductModal.css'

export default function ProductModal() {
    const [reloadSubcategory, setReloadSubcategory] = useState(false)
    const [shouldValidate, setShouldValidate] = useState(true)
    const { isOpen, toggleProductModal, addProduct, editProduct } = useProducts()
    const [selectedImage, setSelectedImage] = useState(false)
    const { 
        getCategories, 
        categories, 
        handleOnChange, 
        selectedCategory, 
        subcategoryOnChange,
        setSelectedCategory,
        setSelectedSubcategory,
        DEFAULT_CATEGORY
    } = useCategory()
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm()

    const handleImageOnChange = (e) => {
        const image = e.target.files[0]
        const imageURL = URL.createObjectURL(image)

        setShouldValidate(true)
        setSelectedImage(imageURL)
    }
    
    useEffect(() => {
        if (!isOpen) return reset()
        getCategories()

        return () => setSelectedImage(false)
    }, [isOpen])

    useEffect(() => {
        if (editProduct) {
            const categoryFound = categories.find(category => category._id === editProduct.category?._id)

            setShouldValidate(false)
            setSelectedCategory(categoryFound)
            setSelectedSubcategory(editProduct.subcategory?._id)
            setSelectedImage(`http://localhost:3000/${editProduct.image}`)
            setReloadSubcategory(true)
            
            setValue('product_name', editProduct.product_name)
            setValue('description', editProduct.description)
            setValue('category', editProduct.category?.category)
            setValue('image', editProduct.image)
            setValue('subcategory', editProduct.subcategory?.subcategory)
            setValue('price', editProduct.price)
            setValue('stock', editProduct.stock)
        }

        return () => {
            setShouldValidate(true)
            setSelectedImage(false)
            setSelectedCategory(DEFAULT_CATEGORY)
            setReloadSubcategory(false)
        } 
    }, [editProduct, reloadSubcategory])

    if (!isOpen) return;

    return (
        <div className="modal-overlay" onClick={() => toggleProductModal()}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2 className='modal-title'>{ editProduct ? 'Actualizar Producto' : 'Nuevo Producto' }</h2>
                    <div className="close-modal-btn" onClick={() => toggleProductModal()}>
                        <FontAwesomeIcon className='close-modal-icon' icon={faClose}/>
                    </div>
                </div>
                <div className="modal-body">
                    <form className="product-form" onSubmit={handleSubmit(addProduct)}>
                        <section className="product-img-section">
                            { errors.image && <span className="error-msg">{errors.image.message}</span> }
                            <input type="file" {...register('image', {
                                required:  shouldValidate ? 'Campo vacio' : false,
                                onChange: handleImageOnChange
                            })} id="input-file"/>
                            <label htmlFor="input-file" className="image-preview-container">
                                {
                                    selectedImage
                                    ?
                                    <img src={ selectedImage } alt="image-preview" className="image-preview" />
                                    :
                                    <FontAwesomeIcon className='add-icon' icon={faPlus}/>
                                }
                            </label>
                        </section>
                        <section className="product-details-section">
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
                            <div className="input-label-container">
                                <label htmlFor="category" className="input-label">Categorias</label>
                            </div>
                            <div className="input-group">
                                    <select {...register('category', {
                                        required: 'Campo vacio'
                                    })} className='input-field' onChange={handleOnChange}>
                                        <option value="">...</option>
                                        {
                                            categories.map(category => (
                                                <option data-id={ category._id } key={ category._id } defaultValue={ category.category }>{ category.category }</option>
                                            ))
                                        }
                                    </select>
                                    { errors.category && <FontAwesomeIcon className='warning-icon' icon={faWarning} />}
                            </div>
                            { errors.category && <span className="error-msg">{errors.category.message}</span> }
                            <div className="input-label-container">
                                <label htmlFor="category" className="input-label">Subcategorias</label>
                            </div>
                            <div className="input-group">
                                <select {...register('subcategory', {
                                    required: 'Campo vacio'
                                })} className='input-field' onChange={subcategoryOnChange}>
                                    <option value="">...</option>
                                    {
                                        selectedCategory?.subcategories?.map(subcategory => (
                                            <option data-id={ subcategory._id } key={ subcategory._id } defaultValue={ subcategory.subcategory }>{ subcategory.subcategory }</option>
                                        ))
                                    }
                                </select>
                                { errors.subcategory && <FontAwesomeIcon className='warning-icon' icon={faWarning} />}
                            </div>
                            { errors.subcategory && <span className="error-msg">{errors.subcategory.message}</span> }
                            <div className="input-group">
                                <input {...register('price', {
                                    required: 'Campo vacio',
                                    min: {value: 0.01, message: 'El precio debe ser mayor a 0'},
                                })} className='input-field' type="number" placeholder='Precio'/>
                                { errors.price && <FontAwesomeIcon className='warning-icon' icon={faWarning} />}
                            </div>
                            { errors.price && <span className="error-msg">{errors.price.message}</span> }
                            <div className="input-group">
                                <input {...register('stock', {
                                    required: 'Campo vacio',
                                    min: {value: 0.01, message: 'El stock debe ser mayor a 0'},
                                })} className='input-field' type="number" placeholder='Stock'/>
                                { errors.stock && <FontAwesomeIcon className='warning-icon' icon={faWarning} />}
                            </div>
                            { errors.stock && <span className="error-msg">{errors.stock.message}</span> }
                            <div className="new-product-btn-container">
                                <button className="new-product-btn">{ editProduct ? 'Actualizar' : 'Subir' }</button>
                            </div>
                        </section>
                    </form>
                </div>
            </div>
        </div>
    )
}