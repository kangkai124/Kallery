<template>
  <div class="hello">
  </div>
</template>

<script>
import AlbumCard from "./AlbumCard"

export default {
	name: "gallery",
	data() {
		return {
			msg: "标题 title",
			ablums: [0, 1, 2, 3, 4, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
		}
	},
	components: { AlbumCard }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.kk-card {
  float: left;
  margin-left: 30px;
  margin-bottom: 30px;
  background-color: white;
}

.hello {
  overflow: hidden;
}

h1 {
  font-family: Patrick Hand SC,kaiti;
}
</style>
