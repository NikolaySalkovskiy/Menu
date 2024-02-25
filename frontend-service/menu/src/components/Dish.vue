<script>
export default {
    data() {
        return {

        }
    },
    props: {
        dish: {
            type: Object
        }
    }
}
</script>


<template>

    <div class="dish-item">
        <img :src="dish.picUrl" alt=""> {{ dish.name }} <br> {{ dish.price }} Р
    </div>

</template>


<style scoped>

</style>
