import { ref, onMounted } from 'vue'
import { getProducts } from '@/services/productService'

export function useProducts() {
    const products = ref ([])
    const isLoading = ref(false)
    const error = ref(null)

    async function loadProducts() {
        isLoading.value = true
        error.value = null

        try {
            products.value = await getProducts()
        } catch (err) {
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
        isLoading,
        error,
        loadProducts,
    }
}