import apiClient from './axiosConfig'

export const getAll = async () => {
  try {
    const response = await apiClient.get('/products')
    return response.data
  } catch (error) {
    throw new Error(`Failed to fetch products: ${error.message}`)
  }
}

export const create = async (productData) => {
  try {
    const response = await apiClient.post('/products', productData)
    return response.data
  } catch (error) {
    throw new Error(`Failed to create product: ${error.message}`)
  }
}

export const update = async (id, productData) => {
  try {
    const response = await apiClient.put(`/products/${id}`, productData)
    return response.data
  } catch (error) {
    throw new Error(`Failed to update product ${id}: ${error.message}`)
  }
}

export const remove = async (id) => {
  try {
    const response = await apiClient.delete(`/products/${id}`)
    return response.data
  } catch (error) {
    throw new Error(`Failed to delete product ${id}: ${error.message}`)
  }
}
