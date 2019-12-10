import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000/recipe',
})

// will need another axios instance for users i think

export const insertRecipe = payload => api.post(`/create`, payload)
export const getAllRecipes = () => api.get(`/all-recipes`)
export const deleteRecipeById = id => api.delete(`/all-recipes/${id}`)
export const getRecipeById = id => api.get(`/all-recipes/${id}`)

const apis = {
    insertRecipe,
    getAllRecipes,
    deleteRecipeById,
    getRecipeById,
}

export default apis