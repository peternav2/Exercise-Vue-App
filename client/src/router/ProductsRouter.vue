<template>
    <div class="products">
        <div class="product" v-for="product in products"> hey</div>
    </div>
</template>

<script lang="ts">

import { reactive, ref } from 'vue';
import { RouterLink } from 'vue-router';
import {getProducts, type Product} from '../stores/products'
export default {
    name: 'Products',
    
    setup() {
        const products = reactive(getProducts());
        return {
            products
        }
    }

}
</script>
<style scoped>
    .products {
        display: flex;
        flex-wrap: wrap;
    }
    .product {
        width: 30%;
        margin: 10px;
        padding: 10px;
        border: 1px solid grey;
    }
</style>