<template>
    <div>

    <transition name="rotate">    
     <aa></aa>
 </transition>

       


    <div class="container-fluid pt-5" >
           
       

              <transition   name="bounce"
          enter-active-class="bounceInLeft"
          leave-active-class="bounceOutRight"> 
                  <router-view></router-view>
             </transition> 
    </div>
</div>
</template>

<script>

const aa = () => System.import('./navcom')


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

<style lang="css" scoped>
/*    .extra-enter {
        transform: translateX(-200px);
        opacity: 0;
    }
    .extra-enter-to {
        transform: translateX(0px);
    }
    .extra-enter-active {
        transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .extra-leave-active, .extra-leave-to {
        opacity: 0;
    }
.fade-enter-active,
.fade-leave-active {
  transition-duration: 2s;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 1s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}
.zoom-enter-active,
.zoom-leave-active {
  animation-duration: 0.9s;
  animation-fill-mode: both;
  animation-name: zoom;
}

.zoom-leave-active {
  animation-direction: reverse;
  animation-duration: 0.9s;
}

@keyframes zoom {
 from {
   opacity: 0 ;
      transform: scale3d(0.3, 0.3, 0.3);

 } 
  100% {
   opacity: 1;
 }}
shiftx-enter-active {
            animation: shift-in 2s;
         }
         .shiftx-leave-active {
            animation: shift-in 2s reverse;
         }
         @keyframes shift-in {
            0%   {transform:rotateX(0deg);}
            25%  {transform:rotateX(90deg);}
            50%  {transform:rotateX(120deg);}
            75%  {transform:rotateX(180deg);}
            100% {transform:rotateX(360deg);}
         }*/
</style>