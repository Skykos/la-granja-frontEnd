<template>
    <div id="singup">
        <div class="background"></div>
        <div class="formularioproduct formulario shadow-lg">
            <h3>Registrar productos</h3>
                <form id="myform2" v-on:submit.prevent="processProducts">
                    <div class="formFlex">
                        <div class="div-izq" >
                            <input v-model="newProduct.productId" name="productId" class="form-control" type="number" placeholder="IDProducto">
                            <input v-model="newProduct.productName" name="name" class="form-control" type="text" placeholder="Nombre">
                            <input v-model="newProduct.productDescription" name="productDescription" class="form-control" type="text" placeholder="Descripción">
                            <input v-model="newProduct.productPrice" name="productPrice" class="form-control" type="number" placeholder="Precio venta" >
                        </div>
                        <div>
                            <input v-model="newProduct.sellerId" name="sellerId"  class="form-control" type="number" placeholder="ID vendedor" >
                            <input v-model="newProduct.sellerName" name="sellerName" class="form-control" type="text" placeholder="Nombre vendedor" multiple>
                            <input v-model="newProduct.quantity" name="quantity" class="form-control" type="number" placeholder="Cantidad" >
                            
                        </div>
                    </div>
                    <p v-if="show_error" class="error"> No se registro el producto</p>
                <button class="btn btn-dark buttonProducto">Guardar</button>
                 </form>
        </div>
    </div>
</template>

<script>
import gql from "graphql-tag";

export default{
        name: "Products",
        data:function(){
            return{
                show_error: false,
                newProduct : {
                    productId:"",
                    productName:"",
                    productDescription:"",
                    productPrice:"",
                    sellerId:"",
                    sellerName:"",
                    quantity:"",
                    isProductInStock: true
                }
                }
            },
        methods:{
            processProducts: async function(){
            console.log("Guardado")
            console.log(this.newProduct)
            await this.$apollo.mutate({
                mutation: gql`
                mutation CreateProduct($newProduct: newProductInput) {
                createProduct(newProduct: $newProduct) {
                    productId,
                    productName
                    productPrice
                    productDescription
                    isProductInStock
                    sellerId
                    sellerName
                    quantity
                    #adminId
                    #date
                     }
                 }
                `,
                variables: {
                newProduct: this.newProduct
                }
            })
            .then((result) => {

                document.getElementById('myform2').reset();
                console.log(result)
                                                        
                                               
            })
            .catch((error) => {
                console.log(error) 
                this.show_error=true
                
            })
            }
        },
        created: function(){} 
}
</script>

<style>
#signup
.background{
    background-image: url("https://images.pexels.com/photos/4054850/pexels-photo-4054850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    height: calc(100vh - 78px);
}
.formFlex{
    display: flex;
}
.div-izq{
    margin-right: 20px
}

.formularioproduct{
    position: absolute;
    top: 60%;
    right: 18%;
    transform: translate(-50%,-50%);
    background: rgb(152, 192, 152);
    padding: 60px 50px;
    border-radius: 10px

}
.formulario input,button,select{
    margin-top: 20px;
}
.formulario label{
    margin-right: 20px;
}

.formulario h3{
    text-align: center;
}
.buttonProducto{
    width: 220px;
    margin-left: 105px;
    margin-top: 40px;   
}

.error{
    color:red;
    font-size:35PX;

}
@media(max-width:426px){
.formularioSignup{
    width: 400px;
    padding: 20px 10px;
    position: absolute;
    top: 58%;
    right: -45%;
}
.buttonProducto{
    margin: 20px;
    margin-left: 80px;
}


}
</style>