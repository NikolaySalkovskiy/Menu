<script>
export default {
    data() {
        return {
            newDishName: "",
            newPrice: null,
            file: null,
        }
    },
    props: {
        item: {
            type: Object
        },
        dishes: {
            type: Array
        }
    },
    methods: {
        addHandler(name, categorieId, price) {
            let formData = new FormData();
            formData.append('name', name);
            formData.append('categorieId', categorieId);
            formData.append('price', price)
            formData.append('image', this.file);
            this.$http.post("http://localhost:3000/dishes/create", formData, {
                headers: {"Content-Type": "multipart/form-data"}
            })
              .then(response => this.dishes.push(response.data.payload))
              .catch(err => console.log(err))
            
            this.newDishName = ""
        },
        uploadImage(event) {
            this.file = event.target.files[0];
            console.log(this.file)
        }
    }
}
</script>


<template>

    <div class="dish-item">
        <input type="text" placeholder="Add a new dish" v-model="newDishName" name={{dish}}>
        <input type="number" placeholder="200" v-model="newPrice" name={{dish}}>
        <input type="file" accept="image/*" @change="uploadImage($event)" id="file-input">
        <button @click="addHandler(newDishName, item.id, newPrice)">Add</button>
    </div>

</template>


<style scoped>

</style>
