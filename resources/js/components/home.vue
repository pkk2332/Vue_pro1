<template>


	<div>
        <h2>The best library ever in the world, u can find most of the books and here and download it for free </h2>
                       <hr>
		<h5>This is Home component</h5>


      <transition-group  class ="row" name="bounce" tag="div"  >
			<div class=" col-md-6 col-12 col-lg-4" v-for="x in count" :key="x">
			<div class="card m-2" style="width: 18rem;">
			  <img class="card-img-top" style="border-radius: 5%;" :src="'https://loremflickr.com/320/240/asian,chinese,beautiful,girl/all?random='+x" alt="Card image cap">
			  <div class="card-body">
			    <p class="card-text" style="font-size: 15px">Showing some Random Images</p>
			  </div>
			</div>
			</div>
      </transition-group>
    
			

		<div>
			<img src="giphy.gif" :class="{hide : true,show:busy}" >
		</div>
		<div class="" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10" >
		</div>
	</div>
</template>

<script>
import infiniteScroll from 'vue-infinite-scroll'

export default {

  directives: {infiniteScroll},
  data () {
    return {
    	count:0,
      show:false,
    	busy:true,
    	



    }
  },
  methods:{ 
  	loadMore(){

  		
  this.busy = true;
  
   setTimeout(() => {

        this.count+=9


                this.busy = false
           
       console.log(this.count)
      }, 1000);
  		
  

  	}
  },
  mounted(){
  	this.busy=false

  }


}




</script>

<style lang="css" scoped>
.show{
	display:block !important;
  width: 150px
}
.hide{
	display:none;
	margin:0 auto;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

</style>