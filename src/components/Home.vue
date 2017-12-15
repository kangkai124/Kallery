<template>
  <main id="home">
    <div class='content-container'>
      <div v-for="item in items" :key="item.id">
        <polaroid-card :img-src="item.url" :isSquare="item.isSquare"/>
      </div>
    </div>
    <div class='panel-container'>
      <aside class='panel'
        :class='{ fixed: isFixed }'
        :style='styleObject'>
        <div class='avatar-container'>
          <div class='avatar'>
            <a href="#">
              <img src="../assets/kk.jpg" alt="kk">
            </a>
          </div>
          <div class='name'>
            KangKai
          </div>
        </div>
        <hr class='hr' />
        <img src="../assets/music.png" alt="" class='no-border' />
      </aside>
    </div>
  </main>
</template>

<script>
import PolaroidCard from "./PolaroidCard"
import img0 from "@/assets/2017_12_06_2.jpg"
import img1 from "@/assets/Wudaokou.jpg"
import img2 from "@/assets/IMG_0641.jpg"
import img3 from "@/assets/IMG_3516_3.jpg"

import { bus } from "./bus.js"

export default {
  data () {
    return {
      isFixed: false,
      styleObject: {},
      items: [
        {url: img0, isSquare: false, id: 1 },
        {url: img1, isSquare: false, id: 2 },
        {url: img2, isSquare: false, id: 3 },
        {url: img3, isSquare: false, id: 4 }
      ]
    }
  },
  components: { PolaroidCard },
  mounted() {
    //do something after mounting vue instance
    bus.$on("change", (result) => {
      if (result) {
        const content = document.querySelector("#home").querySelector(".content-container")
        const container = document.querySelector("#home")
        this.styleObject = {
          left: content.offsetLeft + content.offsetWidth + container.offsetLeft + 20 + "px"
        }
      } else {
        this.styleObject = {}
      }
      this.isFixed = result
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../styles/variable.less';
#home {
  max-width: 965px;
  margin: 0 auto;
  padding: 0 30px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;

  .content-container {
    flex: none;
    float: left;
    width: 100%;
    max-width: 614px;
    margin-right: 20px;
  }

  .panel-container {
    flex: none;
    width: 100%;
    max-width: 293px;
    position: relative;
  }

  .panel {
    // flex: none;
    width: 100%;
    height: 100vh;
    max-width: 293px;
    // border: 1px solid #d9d9d9;
    position: absolute;
    top: 0;
    right: 0;
    // transition: all 0.2s ease-in-out;

    .avatar-container {
      width: 100%;
      height: 50px;
      overflow: hidden;

      .avatar {
        width: 80px;
        height: 50px;
        float: left;
        margin-right: 10px;
        padding-left: 10px;
        overflow: hidden;

        img {
          border-radius: 50%;
          width: 50px;
          height: 50px;
          border: 0;
        }
      }

      .name {
        width: calc(100% - 50px);
        height: 50px;
        float: left;
        line-height: 50px;
        font-size: 16px;
        text-align: left;
      }
    }

    .hr {
      width: 100%;
      height: 1px;
      border: none;
      border-top: 1px solid @hr-border;
      &::after {
        display: none;
      }
    }
  }

  .fixed {
    position: fixed;
    top: 68px;
  }
}
@media screen and (max-width: 1000px) {
  #home .panel-container {
    display: none;
  }

  #home .content-container {
    margin-right: 0;
  }
}
</style>
