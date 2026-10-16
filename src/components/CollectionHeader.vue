<script setup>
</script>

<template>
    <section class="collection-header">
        <div class="collection-title">
            <p class="collection-label">Collection</p>
            <h1>Our products</h1>
        </div>

        <div class="collection-tabs">
            <button class="collection-tab active">
                Featured
            </button>

            <button class="collection-tab">
                Best Seller
            </button>

            <button class="collection-tab">
                New Arrival
            </button>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.collection-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    margin-bottom: 32px;
}

.collection-title {
    .collection-label {
        margin-bottom: 4px;
        font-size: 14px;
        font-weight: 500;
    }

    h1 {
        margin: 0;
        font-size: 48px;
        font-weight: 600;
        line-height: 1.2;
    }
}

.collection-tabs {
    display: flex;
    gap: 12px;
}

.collection-tab {
    min-width: 130px;
    padding: 10px 20px;
    border: none;
    border-radius: 24px;
    background: #f5f5f5;
    color: #111;
    font-size: 13px;
    cursor: pointer;
    transition: background 0.2s ease;

    &.active {
        background: #000;
        color: #fff;
    }

    &:hover {
        background: #ddd;
    }

    &.active:hover {
        background: #222;
    }
}

@media (max-width: 768px) {
    .collection-header {
        flex-direction: column;
        align-items: flex-start;
    }

    .collection-title h1 {
        font-size: 36px;
    }

    .collection-tabs {
        width: 100%;
        gap: 8px;
    }

    .collection-tab {
        flex: 1;
        min-width: 0;
        padding: 10px 8px;
    }
}
</style>