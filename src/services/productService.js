const API_URL = 'https://dummyjson.com/products?limit=0'

/**
 * Fetches all products from the API.
 * @returns {Promise<Object[]>} List of products.
 * @throws {Error} When the request fails.
 */
export async function getProducts() {
  try {
    const response = await fetch(API_URL)

    if (!response.ok) {
      throw new Error('Failed to fetch products')
    }

    const data = await response.json()

    return data.products
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}
