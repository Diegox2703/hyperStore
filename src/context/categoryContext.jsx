import { modal } from '../utils/modalUtils'
import { useContext, createContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const CategoryContext = createContext()

export const useCategory = () => useContext(CategoryContext)

function CategoryProvider ({ children }) {
    const DEFAULT_CATEGORY = { _id: crypto.randomUUID(), category: '', subcategories: [] }
    const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false)
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(DEFAULT_CATEGORY)
    const [productsFound, setProductsFound] = useState([])
    const [isError, setIsError] = useState(false)
    const [selectedSubCategory, setSelectedSubcategory] = useState(null)
    const [toggleForm, setToggleForm] = useState(false)
    const [editCategory, setEditCategory] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isCategoriesLoading, setIsCategoriesLoading] = useState(false)
    const [isCategoriesError, setIsCategoriesError] = useState(false)
    const [isProductsLoading, setIsProductsLoading] = useState(false)
    const [toDelete, setToDelete] = useState([])
    const [isDeleteLoading, setIsDeleteLoading] = useState(false)
    const { register, handleSubmit, formState: { errors }, unregister, setError, reset } = useForm()
    const URL = 'http://localhost:3000/api'

    const handleOnChange = (e) => {
        const selectedIndex = e.target.options.selectedIndex
        const selectedOpt = e.target.options[selectedIndex]
        const id = selectedOpt.dataset.id

        const category = categories.find(category => category._id === id)
        setSelectedCategory(category || DEFAULT_CATEGORY)
    }

    const subcategoryOnChange = (e) => {
        const selectedIndex = e.target.options.selectedIndex
        const selectedOpt = e.target.options[selectedIndex]
        const id = selectedOpt.dataset.id

        setSelectedSubcategory(id)
    }

    const handleSave = async (data) => {
        const subcategories = []
        
        for (let field in data) {
            if (field !== 'category') {
                const id = field.split('_')[1]

                subcategories.push({ _id: id, subcategory: data[`subcategory_${id}`] })
            }
        }
        
        const newCategory = {
            category: data.category,
            subcategories
        }

        if (newCategory.subcategories.length === 0) {
            return setError('category', {
                type: 'manual',
                message: 'Debe haber al menos una subcategoria'
            })
        }

        if (editCategory) {
            setIsLoading(true)
            try {
                newCategory.toDelete = toDelete
                const { data } = await axios.put(`${URL}/category/${selectedCategory._id}`, newCategory)
                const newCategories = categories.map(category => category._id === selectedCategory._id ? {...data.updatedCategory} : category)

                setCategories(newCategories)
                setSelectedCategory(data.updatedCategory)
            } catch (error) {
                console.log(error)

                modal('error', 'Opps', 'Error al actualizar categoria')
                setSelectedCategory(DEFAULT_CATEGORY)
            }
        } else {
            setIsLoading(true)
            try {
                const { data } = await axios.post(`${URL}/category`, newCategory)
                const newCategories = [...categories, data.newCategory]

                setCategories(newCategories)
                setSelectedCategory(data.newCategory)
            } catch (error) {
                console.log(error)
                
                modal('error', 'Opps', 'Error al agregar categoria')
                setSelectedCategory(DEFAULT_CATEGORY)
            }
        }
        
        setToDelete([])
        setIsLoading(false)
        setToggleForm(false)
        setEditCategory(false)
        reset()
    }

    const getCategories = async () => {
        setIsCategoriesLoading(true)
        setIsCategoriesError(false)
        try {
            const { data } = await axios.get(`${URL}/category`)
            setCategories(data.categories)
        } catch (error) {
            if (error.status !== 404) {
                console.log(error)
                setIsCategoriesError(true)
            }
        }
        setIsCategoriesLoading(false)
    }

    const getProductsBySubcategories = async (subcategory) => {
        setIsProductsLoading(true)
        setIsError(false)
        try {
            const { data } = await axios.get(`${URL}/category/${subcategory}`)
            setProductsFound(data)
        } catch (error) {
            console.log(error)
            setIsError(error)
        }
        setIsProductsLoading(false)
    }

    const addCategory = () => {
        DEFAULT_CATEGORY._id = null

        setToggleForm(true)
        setSelectedCategory(DEFAULT_CATEGORY)
    }

    const createSubcategory = () => { 
        const subcategory = {
            _id: crypto.randomUUID(),
            subcategory: null
        }
        selectedCategory.subcategories = [...selectedCategory.subcategories, subcategory] || []

        setSelectedCategory({...selectedCategory})
    }

    const updateCategory = () => {
        setToggleForm(true)
        setEditCategory(true)
    }

    const deleteSubcategory = (id) => {
        const newSubcategories = selectedCategory.subcategories.filter(subcategory => subcategory._id !== id)
        selectedCategory.subcategories = newSubcategories

        setToDelete([...toDelete, id])
        setSelectedCategory({...selectedCategory})
        unregister(`subcategory_${id}`)
    }

    const deleteCategory = async () => {
        if(selectedCategory?._id) {
            setIsDeleteLoading(true)
            try {
                await axios.delete(`${URL}/category/${selectedCategory._id}`)
                const newCategories = categories.filter(category => category._id !== selectedCategory._id)
                
                setCategories(newCategories)
            } catch (error) {
                console.log(error)
                modal('error', 'Opps', 'Error al eliminar categoria')
            }
            setIsDeleteLoading(false)
        }
        
        setSelectedCategory(DEFAULT_CATEGORY)
        setToggleForm(false)
        setEditCategory(false)
        reset()
    }

    const toggleCategoryModal = () => {
        setIsCategoryModalOpen(!isCategoryModalOpen)
    }

    return (
        <CategoryContext.Provider value={{
            handleSave,
            handleOnChange,
            getCategories,
            addCategory,
            createSubcategory,
            updateCategory,
            deleteSubcategory,
            deleteCategory,
            register,
            handleSubmit,
            toggleCategoryModal,
            subcategoryOnChange,
            getProductsBySubcategories,
            setSelectedCategory,
            setSelectedSubcategory,
            setError,
            categories,
            toggleForm,
            isLoading,
            isDeleteLoading,
            selectedCategory,
            errors,
            isCategoryModalOpen,
            selectedSubCategory,
            productsFound,
            isError,
            isProductsLoading,
            isCategoriesLoading,
            isCategoriesError,
            DEFAULT_CATEGORY
        }}>
            { children }
        </CategoryContext.Provider>
    )
}

export default CategoryProvider
