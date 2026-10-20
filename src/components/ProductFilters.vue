<script setup>
import { ref, watch, onUnmounted } from 'vue'

const selectedCategory = defineModel('category', {
  type: String,
  default: '',
})

const selectedFilter = defineModel('sort', {
  type: String,
  default: '',
})

const props = defineProps({
  searchQuery: {
    type: String,
    default: '',
  },
  categories: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['update:searchQuery'])

const searchInput = ref(props.searchQuery)

let debounceTimer

watch(searchInput, (newValue) => {
  clearTimeout(debounceTimer)

  debounceTimer = setTimeout(() => {
    emit('update:searchQuery', newValue)
  }, 300)
})

watch(
  () => props.searchQuery,
  (newValue) => {
    if (newValue !== searchInput.value) {
      searchInput.value = newValue
    }
  },
)

onUnmounted(() => {
  clearTimeout(debounceTimer)
})
</script>

<template>
  <section class="product-filters" aria-label="Product filters">
    <select v-model="selectedCategory" aria-label="Filter by category">
      <option value="">All Categories</option>

      <option
        v-for="category in categories"
        :key="category"
        :value="category"
      >
        {{ category }}
      </option>
    </select>

    <select v-model="selectedFilter" aria-label="Additional product filter">
      <option value="">Select Categories</option>
      <option value="low-price">Price: Low to High</option>
      <option value="high-price">Price: High to Low</option>
    </select>

    <div class="search-field">
      <input
        v-model="searchInput"
        type="search"
        placeholder="Search products..."
        aria-label="Search products by name"
      />

      <button type="button" aria-label="Search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      </button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.product-filters {
  display: grid;
  grid-template-columns: 1fr 1fr 1.65fr;
  gap: 24px;
  margin-bottom: 44px;

  select,
  .search-field {
    width: 100%;
    height: 40px;
    border: 1px solid #d6d6d6;
    border-radius: 24px;
    background: #fff;
  }

  select {
    padding: 0 14px;
    color: #555;
    font-size: 14px;
    cursor: pointer;
  }
}

.search-field {
  display: flex;
  align-items: center;
  padding: 3px 5px 3px 14px;

  input {
    flex: 1;
    min-width: 0;
    height: 100%;
    border: none;
    outline: none;
    background: transparent;
    font-size: 14px;
  }

  button {
    display: grid;
    place-items: center;
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    border: none;
    border-radius: 50%;
    background: #eee;
    cursor: pointer;

    &:hover {
      background: #ddd;
    }

    &:focus-visible {
      outline: 2px solid #111;
      outline-offset: 2px;
    }
  }
}

@media (max-width: 768px) {
  .product-filters {
    grid-template-columns: 1fr;
    gap: 12px;
    margin-bottom: 28px;
  }
}
</style>