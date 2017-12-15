<template>
  <div id="music-box">
    <div class="blur"></div>
    <div class="content">
      <div class='music-cover' >
      <div class="cover">
        <img :src="coverImage" alt="cover" class='no-border'>
      </div>
    </div>
    <div class='music-description' >
      <h2>带着音乐去旅行</h2>
      <p>二珂</p>
    </div>
    <div class="music-options">
      <div class="music-progress">
        <div class="start">
          01:24
        </div>
        <div class="playing">
          <mt-range v-model='voice' :barHeight='2'></mt-range>
        </div>
        <div class="end">
          04:37
        </div>
      </div>
      <div class="intereact">
        <div class="like icon">
          <i class='icon-love2'></i>
        </div>
        <div class="pause icon">
          <i class="icon-play"></i>
        </div>
        <div class="next icon">
          <i class="icon-next"></i>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import Hammer from "hammerjs"
import cover from "../assets/cover.jpg"

export default {
	name: "music-box",
	data() {
		return {
			voice: 50,
			coverImage: cover,

		}
	},
	mounted() {
		const music = document.querySelector("#music-box")
		const hammer = new Hammer(music)
		const vm = this
		// music所在的父容器fixed定位，但是下面的页面是有滚动条的
		// 所以在music页面上操作时，需要禁止默认行为，即不触发下面页面的行为
		music.addEventListener("touchmove", function (e) {
			e.stopPropagation()
			e.preventDefault()
		})
		// 向右滑隐藏音乐盒
		hammer.on("swipe", function (ev) {
			if (ev.velocityX > 0) {
				vm.$emit("hideMusic")
			}
		})
	}
}
</script>
<style lang="less" scoped>
#music-box {
  width: auto;
  height: 100%;

  .blur {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: url('../assets/cover.jpg');
    background-repeat: no-repeat;
    background-size: 400% 200%;
    background-position: center;
    filter: blur(20px);
    z-index: 0;
  }

  .content {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: transparent;
    z-index: 9;
    display: flex;
    flex-direction: column;

    .music-cover {
      flex: 5;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 30px;
      .cover {
        flex: auto;
        border-radius: 4px;
        overflow: hidden;
        img {
          margin: 0 auto;
          // max-width: 667px;
        }
      }
    }
    .music-description {
      flex: 1;
      color: #fff;
      h2 {
        font-size: 18px;
      }
      p {
        font-size: 14px;
        color: #eee;
      }
    }
    .music-options {
      flex: 2;
      display: flex;
      flex-direction: column;
      align-content: space-between;
      // width: calc(~'100% - 60px');
      .music-progress {
        flex: 1 1 auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .start, .end {
          flex: 1 1 auto;
          color: #eee;
          font-size: 12px;
        }
        .playing {
          flex: 10 10 auto;
          .mt-range {
            height: 20px;
            line-height: 20px;

            .mt-range-thumb {
              width: 20px;
              height: 20px;
            }
          }
        }
      }
      .intereact {
        flex: 3 3 auto;
        display: flex;
        align-items: center;
        .icon {
          flex: auto;
          color: #fff;
          i{
            font-size: 26px;
          }
        }
        .pause.icon i {
          font-size: 36px;
        }
        .next.icon i {
          font-size: 30px;
        }
      }
    }
  }
}
</style>
