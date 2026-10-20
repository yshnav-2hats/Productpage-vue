import { ref, onMounted } from 'vue'
import { getProducts } from '@/services/productService'

export function useProducts() {
    const products = ref ([])
    const categories = ref([])
    const isLoading = ref(false)
    const error = ref(null)

    async function loadProducts() {
        isLoading.value = true
        error.value = null

        try {
            const [productData, categoryData] = await Promise.all([
              getProducts(),
              fetch('https://dummyjson.com/products/category-list').then(
                (response) => {
                  if (!response.ok) {
                    throw new Error('Failed to fetch categories')
                  }
      
                  return response.json()
                },
              ),
            ])
      
            products.value = productData
            categories.value = categoryData
          } catch (err) {
            console.error('Error loading products or categories:', err)
            error.value = 'Unable to load products. Please try again.'
          } finally {
            isLoading.value = false
          }
        }
      
    onMounted(() => {
        loadProducts()
    })

    return {
        products,
        categories,
        isLoading,
        error,
        loadProducts,
    }
}