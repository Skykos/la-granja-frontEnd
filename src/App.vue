<template>
  <div id="app">
    <div class="footer shadow">
      
        <h1><b> LA GRANJA </b></h1>
      
      <div class="buttons-footer">
        <button v-if="isAuth" v-on:click="loadlistProducts" class="btn btn-light">Home</button>
        <button v-if="isAuth" v-on:click="loadProduct" class="btn btn-light">Producto</button>
        <button v-if="!isAuth" v-on:click="loadLogIn" class="btn btn-light">Login</button>
        <button v-if="!isAuth" v-on:click="loadSignUp" class="btn btn-light">Signup</button>
        <button v-if="isAuth" v-on:click="signOut" class="btn btn-light">Logout</button>
      </div>
    </div>
    <div>
      <router-view v-on:loginComplete="loginComplete"></router-view>
      <router-view v-on:loginComplete="loginComplete"></router-view>
      
    </div>
  </div>

</template>

<script> 
export default {
  name: "App",
  data: function () {
    return{
      isAuth:false
    }
  },
  methods: {
    verifyAuth(){
      this.isAuth = localStorage.getItem("isAuth") || false;
      if(this.isAuth){
        console.log("Pagina de inicio")
      }else{     
        this.loadLogIn()
      }
    },
   
    loadLogIn() {
      this.$router.push({ name: "logIn" });
    },
    loadSignUp(){
      this.$router.push({name:"signUp"});
    },
    loginComplete(data){
      this.isAuth=true
      localStorage.setItem('token',data.token)
      localStorage.setItem('isAuth', this.isAuth)
      localStorage.setItem('username',data.username)
      this.verifyAuth()
    },
    signOut(){
      this.loadLogIn();
      this.isAuth=false
      localStorage.clear();
    },
    loadProduct() {
      this.$router.push({ name: "product" });
    },

    loadlistProducts() {
      this.$router.push({ name: "products" });
    }

  },
  created: function () {
    this.verifyAuth();
  },
  
};

</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200;300;600&display=swap");
.footer {
  display: flex;
  background: linear-gradient(to right, rgb(9, 32, 3), rgb(7, 66, 16));
  justify-content: space-between;
  font-family: "Readex Pro", sans-serif;
  padding: 20px 20px;
}


.footer h1 {
  color: white;
  font-size: 30px;
  display: flex;
  flex-direction: row;
  align-items:  baseline;
  align-content: end;
  justify-content: space-around;
  padding: 8px 0px;
}

.buttons-footer {
  width: 240px;
 display: flex;
  justify-content: center;
  
}
.buttons-footer button{
  margin: 10px;
}

body {
  margin: 0;
}


 


</style>
