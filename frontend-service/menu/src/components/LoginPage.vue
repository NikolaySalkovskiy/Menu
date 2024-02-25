<script>
import axios from "axios";

export default {
    data(){
      return {
        email : "",
        password : ""
      }
    },
    methods: {
      login: function () {
        let email = this.email 
        let password = this.password
        let fd = new FormData()
        fd.append('email', email)
        fd.append('password', password)
        this.$store.dispatch('login', fd)
       .then(() => this.$router.push('/edit'))
       .catch(err => console.log(err))
      }
    }
  }
</script>


<template>
    <div class="form-container">
    <div class="wrapper">
      <form class="login" @submit.prevent="login">
        <div class="title"><h1>Sign in</h1></div>
        <div class="row">
            <label>Email</label>
            <input required v-model="email" placeholder="Name"/>
        </div>
        <div class="row">
            <label>Password</label>
            <input required v-model="password" type="password" placeholder="Password"/>
        </div>
        <hr/>
        <div class="row button">
            <button type="submit">Login</button>
        </div>
      </form>
    </div>
    </div>
</template>


<style scoped>
.form-container {
    max-width: 440px;
    padding: 0 15px;
    margin: 170px auto;
}
.wrapper {
    width: 100%;
    border-radius: 5px;
    box-shadow: 0p 4px 10px 1px rgba(0,0,0,0.1);
}

.wrapper .title {
    height: 90px;
    border-radius: 5px 5px 0 0;
    color: #fff;
    font-size: 30px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
}

.wrapper form {
    padding: 30px 25px 25px 25px;
}

.wrapper form .row {
    height: 45px;
    margin-bottom: 15px;
    position: relative;
}

.wrapper form .row input {
    height: 100%;
    width: 100%;
    outline: none;
    padding-left: 60px;
    border-radius: 5px;
    border: 1px solid lightgray;
    font-size: 16px;
    transition: all 0.3s ease;
}

form .row input:focus {
    border-color: #16a085;
    box-shadow: inset 0px 0px 2px 2px rgba(26, 188, 156, 0.25);
}

form .button button {
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    padding-left: 0;
    background-color: #16a085;
    border: 1px solid #16a085;
    cursor: pointer;
}

form .button button:hover {
    background-color: #12876f;
}

</style>