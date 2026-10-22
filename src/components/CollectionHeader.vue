<template>
  <header class="collection-header">
    <p class="collection-label">Collection</p>

    <div class="collection-main">
      <h1>Our products</h1>

      <nav class="collection-tabs" aria-label="Product collections">
        <button class="active" type="button">Featured</button>
        <button type="button">Best Seller</button>
        <button type="button">New Arrival</button>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.collection-header {
  width: 100%;
  font-family: 'Jost', Arial, Helvetica, sans-serif;
}

.collection-label {
  margin: 0 0 2px -1.2%;
  font-size: 14px;
  line-height: 1.2;
}

.collection-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  padding-left: 8%;
}

.collection-main h1 {
  margin: 0;
  font-size: clamp(36px, 4.5vw, 80px);
  font-weight: 400;
  line-height: 1.1;
}

.collection-tabs {
  display: flex;
  justify-content: flex-end;
  gap: 14px;
}

.collection-tabs button {
  min-width: 124px;
  padding: 10px 24px;
  border: none;
  border-radius: 999px;
  background: #f1f1f1;
  font-family: inherit;
  font-size: 14px;
  cursor: pointer;
}

.collection-tabs button.active {
  background: #000;
  color: #fff;
}

@media (max-width: 768px) {
  .collection-label {
    margin-left: 0;
  }

  .collection-main {
    width: 100%;
    align-items: flex-start;
    flex-direction: column;
    padding-left: 0;
  }

  .collection-main h1 {
    font-size: 36px;
  }

  .collection-tabs {
    flex-wrap: wrap;
  }
}
</style>