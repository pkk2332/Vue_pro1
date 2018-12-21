<template>


	<div>
		<h2>This is Home component</h2>

		<div class="row">
			<div class="col-4 " v-for="x in 9">
			<div class="card m-2" style="width: 18rem;">
			  <img class="card-img-top" style="border-radius: 5%;" :src="'https://loremflickr.com/320/240/chinese,beautiful,girl/all?random='+x" alt="Card image cap">
			  <div class="card-body">
			    <p class="card-text">Showing some Random Images</p>
			  </div>
			</div>
			</div>
			
		</div>
	</div>
</template>

<script>
export default {

  name: 'home',

  data () {
    return {

    }
  }
}




</script>

<style lang="css" scoped>
</style>