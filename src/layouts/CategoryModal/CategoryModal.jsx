import { faAdd, faCheck, faCircleNotch, faClose, faPencil, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useCategory } from "../../context/categoryContext.jsx";
import './CategoryModal.css'

export default function CategoryModal() {
  const {
    handleSave,
    handleOnChange,
    handleSubmit,
    getCategories,
    addCategory,
    createSubcategory,
    updateCategory,
    deleteSubcategory,
    deleteCategory,
    categories,
    selectedCategory,
    register,
    toggleForm,
    isLoading,
    isDeleteLoading,
    errors,
    isCategoryModalOpen,
    toggleCategoryModal,
  } = useCategory()

  useEffect(() => {
      getCategories()
  }, [])

  if (!isCategoryModalOpen) return

  return (
    <div className="modal-overlay" onClick={() => toggleCategoryModal()}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
            <h2 className='modal-title'>Categorias</h2>
            <div className="close-modal-btn" onClick={() => toggleCategoryModal()}>
                <FontAwesomeIcon className='close-modal-icon' icon={faClose}/>
            </div>
        </div>
        <div className="modal-body">
            {
                toggleForm 
                ?
                <form className="category-form" onSubmit={handleSubmit(handleSave)}>
                    <div className="input-label-container">
                        <label htmlFor="category" className="input-label">Categorias</label>
                    </div>
                    <div className="category-container">
                        <div className="category-content">
                            <div className="input-group">
                                <input autoFocus 
                                    {...register('category', {
                                        required: 'Campo requerido',
                                        minLength: {value: 3, message: 'Categoria debe tener minimo 3 caracteres'},
                                        maxLength: {value: 30, message: 'Categoria debe tener maximo 30 caracteres'}
                                    })}
                                    type="text" 
                                    className="input-field" 
                                    placeholder="Categoria" 
                                    defaultValue={ selectedCategory.category }
                                />
                            </div>
                            <button disabled={ isDeleteLoading } type="button" className="delete-category-btn btn" onClick={() => deleteCategory()}>
                                {
                                    isDeleteLoading 
                                    ?
                                    <div className="btn-icon">
                                        <FontAwesomeIcon icon={faCircleNotch} spin/>
                                    </div>
                                    :
                                    <div className="btn-icon">
                                        <FontAwesomeIcon icon={faClose}/>
                                    </div>
                                }
                            </button>
                            <button disabled={ isLoading } type="submit" className="add-category-btn btn">
                                {
                                    isLoading 
                                    ?
                                    <div className="btn-icon">
                                        <FontAwesomeIcon icon={faCircleNotch} spin/>
                                    </div>
                                    :
                                    <div className="btn-icon">
                                        <FontAwesomeIcon icon={faCheck}/>
                                    </div>
                                }
                            </button>
                        </div>
                        { errors.category && <span className="error-msg">{ errors.category.message }</span> }
                    </div>
                    <div className="subcategories-container">
                        {
                            selectedCategory?.subcategories?.map(subcategory => (
                                <div key={subcategory._id} className="subcategory-content">
                                    <div className="subcategory">
                                        <input 
                                            type="text" 
                                            {...register(`subcategory_${subcategory._id}`, {
                                                required: 'Campo requerido',
                                                minLength: {value: 3, message: 'Subcategoria debe tener minimo 3 caracteres'},
                                                maxLength: {value: 30, message: 'Subcategoria debe tener maximo 30 caracteres'}
                                            })}
                                            className="input-field-style-2" 
                                            placeholder="Subcategoria" 
                                            defaultValue={ subcategory.subcategory }
                                            autoFocus
                                            
                                        />
                                        <button type="button" className="btn-style-2" onClick={() => deleteSubcategory(subcategory._id)}>
                                            <FontAwesomeIcon className="btn-icon" icon={faClose}/>
                                        </button>
                                    </div>
                                    { errors[`subcategory_${subcategory._id}`] 
                                        &&
                                        <span className="error-msg">{ errors[`subcategory_${subcategory._id}`].message }</span> 
                                    }
                                </div>
                            ))
                        }
                    </div>
                    <div className="create-subcategory-btn-container">
                        <button type="button" className="create-subcategory-btn btn" onClick={() => createSubcategory()}>
                            <div className="btn-icon">
                                <FontAwesomeIcon icon={faPlus}/>
                            </div>
                        </button>
                    </div>
                </form>
                :
                <>
                    <div className="input-label-container">
                        <label htmlFor="category" className="input-label">Categorias</label>
                    </div>
                    <div className="category-container">
                        <div className="category-content">
                            <div className="input-group">
                                <select defaultValue={ selectedCategory?.category } className="input-field" id="category" onChange={handleOnChange}>
                                    <option>...</option>
                                    {
                                        categories &&
                                        categories.map(category => (
                                            <option key={ category._id } 
                                                    data-id={ category._id } 
                                                    defaultValue={category.category}
                                            >
                                                { category.category }
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>
                            {
                                selectedCategory?.subcategories?.length !== 0 
                                &&
                                <button type="button" className="edit-category-btn btn" onClick={() => updateCategory()}>
                                    <div className="btn-icon">
                                        <FontAwesomeIcon icon={ faPencil }/>
                                    </div>
                                </button>
                            }
                            <button type="button" className="create-category-btn btn" onClick={() => addCategory()}>
                                <div className="btn-icon">
                                    <FontAwesomeIcon icon={faAdd}/>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="input-label-container">
                        <label className="input-label">Subcategorias</label>
                    </div>
                    <div className="subcategories-container">
                        {
                            selectedCategory?.subcategories?.map(subcategory => (
                                <div key={subcategory._id} className="subcategory-content">
                                    <div className="subcategory">
                                        <p className="subcategory-name">{ subcategory.subcategory }</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </>
            }
        </div>
      </div>
    </div>
  )
}
