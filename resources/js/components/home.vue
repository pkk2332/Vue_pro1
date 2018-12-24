<template>


	<div>
		<h5>This is Home component</h5>

		<div  class="row">

			<div class="col-12 col-md-6 col-lg-4" v-for="x in count">
			<div class="card m-2" style="width: 18rem;">
			  <img class="card-img-top" style="border-radius: 5%;" :src="'https://loremflickr.com/320/240/asian,beautiful,girl/all?random='+x" alt="Card image cap">
			  <div class="card-body">
			    <p class="card-text" style="font-size: 15px">Showing some Random Images</p>
			  </div>
			</div>
			</div>
			
		</div>
		<div   >
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
}
.hide{
	display:none;
	margin:0 auto;
}

</style>