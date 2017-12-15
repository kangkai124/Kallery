<template>
  <div id="gallery-footer">
    <router-link to="/">
      <i class='icon-home2' />
    </router-link>
    <router-link to="/album">
      <i class='icon-iconfontxiangce' />
    </router-link>
    <router-link to="/tags">
      <i class='icon-tag1' />
    </router-link>
    <router-link to="/about">
      <i class='icon-smile' />
    </router-link>
  </div>
</template>
<script>
export default {
	data() {
		return ({

		})
	},
	methods: {
	}
}
</script>
<style lang="less" scoped>
@import '../styles/variable.less';
#gallery-footer {
  width: auto;
  height: 48px;
  display: flex;
  align-items: center;

  a {
    background: none;
    flex: auto;
    color: @text-color;
  }

  i {
    font-size: 24px;
  }

  .router-link-exact-active {
    color: @link-icon;
  }
}
</style>
