<script>
import Dish from './Dish.vue'

export default {
    data() {
        return {

        }
    },
    props: {
        dishes: {
            type: Array
        },
        isEdit: String,
        item: {
            type: Object
        }
    },
    components: {
        comDish: Dish
    }
}
</script>


<template>

    {{ item.name }}
    <div class="categorie-item">
        <div class="dishes" v-for="dish in dishes.filter(d => d.categorieId === item.id)">
            <comDish :dish="dish" />
            <button v-if="isEdit=='editable'" @click="deleteHandler(dish.id)">Delete</button>
        </div>
    </div>

</template>


<style scoped>

</style>