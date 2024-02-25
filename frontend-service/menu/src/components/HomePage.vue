<script>
import store from '../store'
import axios from 'axios'
import Categorie from './Categorie.vue'
import AddDish from './AddDish.vue'

export default {
    data() {
        return {
            categories: [],
            dishes: [],
        }
    },
    props: {
        isEdit: String
    },
    methods: {
        clickHandler() {
            axios
                .get("http://localhost:3000/dishes")
                .then(response => (this.dishes = response.data.payload))
        },
        deleteHandler(id) {
            axios({
                method: 'delete',
                url: `http://localhost:3000/dishes/${id}`,
                headers: {}
                })
                .then(response => this.dishes = this.dishes.filter(el => el.id != response.data.payload.id))
                .catch(err => console.log(err))
        },
    },
    beforeCreate() {
        const token = localStorage.getItem('token')
        if (token) {
        this.$http.defaults.headers.common['Authorization'] = token
        }
        axios
            .get("http://localhost:3000/categories")
            .then(response => (this.categories = response.data.payload))
            .catch(err => console.log(err)),
        axios
            .get("http://localhost:3000/dishes")
            .then(response => (this.dishes = response.data.payload))
            .catch(err => console.log(err))
    },
    components: {
        comCategorie: Categorie,
        comAddDish: AddDish
    }
}
</script>


<template>
    <div id="app">
        <ol>
            <li v-for="item of categories" class="categorie">
                <ul>
                    <comCategorie :dishes="dishes" :item="item" :isEdit="isEdit" />
                    <comAddDish v-if="isEdit=='editable'" :item="item" :dishes="this.dishes" />
                </ul>
            </li>
        </ol>
    </div>  
</template>


<style scoped>
.categorie {
    font-size: 1.7rem;
    font-weight: bold;
    font-family: 'Indie Flower', cursive;
    padding-left: 200px;
    list-style-type: none;
}
</style>
