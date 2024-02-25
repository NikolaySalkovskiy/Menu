<script>
import axios from 'axios'
import { RouterLink, RouterView } from 'vue-router'

export default {
    computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
    methods: {
      logout: function () {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
      }
    },
    created: function () {
      axios.interceptors.response.use(undefined, function (err) {
        return new Promise(function (resolve, reject) {
          if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
            this.$store.dispatch("logout")
          }
          throw err;
        });
      });
    }
  }

</script>

<template>
      <div class="navbar">
        <RouterLink class="link" to="/">Menu</RouterLink>
        <RouterLink class="link" v-if="isLoggedIn" to="/edit">Edit</RouterLink>
        <RouterLink class="link" to="/login">Login</RouterLink>
        <span v-if="isLoggedIn"> | <button @click="logout">Logout</button></span>
      </div>

  <RouterView />
</template>

<style scoped>

</style>
