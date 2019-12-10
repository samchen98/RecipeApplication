import axios from 'axios'

const base = axios.create({
    baseURL: 'http://localhost:5000',
})

export const insertRecipe = userInput => base.post(`/recipe/create`, userInput)
export const getAllRecipes = () => base.get(`/recipe/retrieveAll`)
export const deleteRecipeById = id => base.delete(`/recipe/del/${id}`)
export const getRecipeById = id => base.get(`/recipe/byID/${id}`)


// TO-DO: Add axios calls for users

const apis = {
    insertRecipe,
    getAllRecipes,
    deleteRecipeById,
    getRecipeById,
}

export default apis