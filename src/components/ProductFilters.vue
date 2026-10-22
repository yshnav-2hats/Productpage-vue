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
    <div class="select-field">
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
    </div>

    <div class="select-field">
      <select v-model="selectedFilter" aria-label="Additional product filter">
        <option value="">Select Categories</option>
        <option value="low-price">Price: Low to High</option>
        <option value="high-price">Price: High to Low</option>
      </select>
    </div>

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
  grid-template-columns: 1fr 1fr 1.72fr;
  gap: 38px;
  padding-left: 8%;
  margin-bottom: 44px;
  font-family: 'Jost', Arial, Helvetica, sans-serif;

  select,
  .search-field {
    width: 100%;
    height: 44px;
    border: 1px solid #d6d6d6;
    border-radius: 999px;
    background: #fff;
  }

  select {
    appearance: none;
    padding: 0 56px 0 20px;
    color: #555;
    font-family: inherit;
    font-size: 15px;
    cursor: pointer;
  }
}

.select-field {
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 6px;
    width: 32px;
    height: 32px;
    transform: translateY(-50%);
    border-radius: 50%;
    background: #e9e9e9
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23000' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")
      center / 12px 12px no-repeat;
    pointer-events: none;
  }
}

.search-field {
  display: flex;
  align-items: center;
  padding: 0 6px 0 20px;

  input {
    flex: 1;
    min-width: 0;
    height: 100%;
    border: none;
    outline: none;
    background: transparent;
    font-family: inherit;
    font-size: 15px;
  }

  button {
    display: grid;
    place-items: center;
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    border: none;
    border-radius: 50%;
    background: #e9e9e9;
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

@media (max-width: 1024px) {
  .product-filters {
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .product-filters {
    grid-template-columns: 1fr;
    gap: 12px;
    padding-left: 0;
    margin-bottom: 28px;
  }
}
</style>
