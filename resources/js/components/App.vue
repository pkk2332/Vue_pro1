<template>
    <div>
        <aa></aa>


    <div class="container pt-5" >
               <h2>The best library ever in the world, u can find most of the books and here and download it for free </h2>
                       <hr>
       


        
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
