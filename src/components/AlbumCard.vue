<template>
  <div class='album-card'>
    <div class="card" style="width: 20rem;">
      <!-- <img src="https://picsum.photos/768" alt="Card example image"> -->

      <div class="card-body">
        <h4 class="card-title">My awesome Paper card!</h4>
        <h5 class="card-subtitle">Nice looking subtitle.</h5>
        <p class="card-text">Notice that the card width in this example have been set to 20rem, otherwise it will try to fill the current container/row where the card is.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: "album-card",
	data() {
		return {
			msg: "I'm album card"
		}
	}
}
</script>

<style scoped>
.album-card {
  width: 100%;
  height: 100%;
}
</style>
