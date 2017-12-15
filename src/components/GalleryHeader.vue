<template>
  <div id='gallery-header'
    class='header-wrap'
    :class='{ fixed: isFixed }'>
    <div class='header'>
      <div class='nav'>
        <a href='/'>
          <img />
          <h1>{{ title }}</h1>
      </a>
      </div>
      <div class='nav'></div>
      <div class='nav only-max'>
        <router-link to="/">
          <i class='icon-home margin-right only-max-icon' />
        </router-link>
        <router-link to="/album">
          <i class='icon-iconfontxiangce margin-right only-max-icon' />
        </router-link>
        <router-link to="/tags">
          <i class='icon-tag1 margin-right only-max-icon' />
        </router-link>
        <router-link to="/about">
          <i class='icon-smile margin-right only-max-icon' />
        </router-link>
        <i class='icon-music only-min-icon no-border' @click='toggleMusic' />
      </div>
    </div>
    <!-- 播放器 -->
    <div class='music-container' :class="{ 'ease-in-out': isOpend }">
      <div class='music'>
        <div class='music-header'>
          <i class='icon-back1' @click='toggleMusic' />
        </div>
        <music-box v-on:hideMusic='toggleMusic' ></music-box>
      </div>
    </div>
  </div>
</template>

<script>
import avatar from "../assets/avatar.jpg"
import { bus } from "./bus.js"
import MusicBox from "./MusicBox"

export default {
	data() {
		return{
			title: "Kk's Gallery",
			logoUrl: avatar,
			isFixed: false,
			isOpend: false
		}
	},
	components: { MusicBox },
	mounted() {
		window.addEventListener("scroll", this.handleScroll)
	},
	destroyed() {
		window.removeEventListener("scroll", this.handleScroll)
	},
	methods: {
		handleScroll() {
			const scrollTop = window.pageYoffset || document.documentElement.scrollTop || document.body.scrollTop
			const GALLERY_HEADER = 52
			if (scrollTop >= GALLERY_HEADER) {
				this.isFixed = true
				bus.$emit("change", true)
			} else {
				this.isFixed = false
				bus.$emit("change", false)
			}
		},
		toggleMusic() {
			this.isOpend = !this.isOpend
			this.$emit("move")
		}
	}
}
</script>

<style scoped lang="less">
@import '../styles/variable.less';
.header-wrap {
  width: 100%;
  padding: 10px 0;
  box-sizing: content-box;
  background-color: #fff;
  border-bottom: 1px solid rgba(0,0,0,.0975);
  // overflow: hidden;
  position: fixed;
  z-index: 9999;
  transition: all 0.2s ease-in-out 0.2s;
}
.header-wrap.fixed {
  padding: 0;
}
.header-wrap.dark {
  background-color: rgba(0, 0, 0, 0.36);
}

.music-container {
  width: 100%;
  height: 100%;
  // background-color: rgba(0, 0, 0, 0.36);
  overflow: hidden;
  position: fixed;
  top: 0;
  right:0;

  transform: translate(100%);
  transition: all 0.3s ease-in-out;

  .music {
    width: auto;
    // 因为音乐盒北京虚化，如果这里不给背景，会看到下面页面的文字
    background-color: #ddd;
    // border-top-left-radius: 10px;
    // border-top-right-radius: 10px;
    height: 100%;


    .music-header {
      display: none;
      text-align: left;
      padding-left: 10px;
      padding-top: 10px;

      i {
        font-size: 24px;
      }
    }
  }
}

.music-container.ease-in-out {
  transform: translate(0);
}

.header {
  max-width: 1010px;
  height: 48px;
  margin: 0 auto;
  padding: 0 40px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: space-around;

  .nav {
    flex: auto;
    align-self: center;
    &:nth-of-type(1) {
      padding-left: 10px;
    }
    &:nth-of-type(3) {
      padding-right: 10px;
      display: flex;
      justify-content: flex-end;

      a {
        background: none;
        color: @text-color;
        flex: 0 0 50px;
      }
      i {
        font-size: 24px;
        &:hover {
          cursor: pointer;
          // color: #42b983;
        }
      }

    }

      i.only-min-icon {
        display: none;
      }

    img {
      float:left;
      width: 30px;
      height: 30px;
      margin-right: 10px;
      border-width: 1px;
    }

    h1 {
      height: 32px;
      font-size: 1.4rem;
      float: left;
      margin: 0;

      &::before {
        content: '';
        display: block;
        float: left;
        width: 1px;
        height: 32px;
        margin-right: 10px;
        // margin-top: -14px;
        background-color: #333;
      }
    }
  }
}

@media screen and (max-width: 1010px) {
  .header-wrap {
    padding: 0;
  }
  .header {
    padding: 0;

    .nav {
      &:nth-of-type(3) {
        a {
          display: none;
        }
      }
    }

    .only-max i.only-min-icon {
      display: inline-block;
      color: rgb(228, 55, 122);
    }
  }

}
</style>
