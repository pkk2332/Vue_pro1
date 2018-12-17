<template>
    <div>
        <aa></aa>


    <div class="container-fluid">
               <h1>The best library ever in the world, u can find most of the books and here and download it for free </h1>
                       <hr>
       

<!-- 
            <router-link to="/">Home</router-link>
 <router-link :to="{ name:'detail' }">Detail</router-link>
          -->          
                     <router-view></router-view>

    </div>
</div>
</template>

<script>

    import aa from './navcom'


    export default {
    components:{
     aa   
    },
        data(){
            return {
                id:1,
                name:'namename'
            }
        },
        mounted() {
                
        }
    }
</script>
