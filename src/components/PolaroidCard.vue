<template>
  <article id="polaroid-card">
    <header class='card-header'>
      <div class='card-date'>Nov 30, 2017</div>
    </header>
    <div class='content'>
      <img :src='imgSrc' class='no-border' />
    </div>
    <div class='card-descriptions'>
      <h4 class="card-title">My awesome Paper card!</h4>
      <p class="card-text">Notice that the card width in this example have been set to 20rem, otherwise it will try to fill the current container/row where the card is.</p>
    </div>
    <div class='tags'>
      <div :class='[baseClass, isSquare ? squareTag : circleTag]' v-for='{tag, index} in tags' :key="index">
        {{tag}}
      </div>
    </div>
  </article>
</template>
<script>
export default {
  data: function () {
    return ({
      tags: ["人像","风光摄影","复古胶片","街拍","人文","偏情绪"],
      baseClass: "card-tag",
      squareTag: "square-tag",
      circleTag: "circle-tag"
    })
  },
  props: ["imgSrc", "isSquare"]
}
</script>
<style lang="less" scoped>
@import '../styles/variable.less';

#polaroid-card {
  text-align: left;
  margin-bottom: 60px;
  border: @base-border;
  border-radius: 3px;
  background-color: @background;

  .card-header {
    width: auto;
    height: 60px;
    position: relative;

    .card-date {
      padding: 0 10px;
      font-size: 14px;
      line-height: 40px;
      height: 40px;
      position: absolute;
      top: 10px;
      left: -20px;
      background-color: @background;
      border: @base-border;
      box-shadow: 2px 2px 4px @border-color;
    }
  }

  img {
    border-color: @border-color;

  }

  .card-descriptions {
    padding-left: 10px;
  }

  .tags {
    display: flex;
    padding: 10px 0;
    flex-wrap:wrap;

    .card-tag {
      flex: none;
      // box-sizing: content-box;
      height: 20px;
      line-height: 22px;
      font-size: 12px;
      color: @background;
      padding-left: 16px;
      padding-right: 10px;
      margin-left: 20px;
      margin-bottom: 10px;
      position: relative;
      border-top-left-radius: 2px;
      border-bottom-left-radius: 2px;
      background-color: @grey-tag;
      &:hover {
        cursor: pointer;
        background-color: @dark-grey-tag;
      }
    }

    .square-tag {
      &::before {
        content: '';
        width: 0;
        height: 0;
        position: absolute;
        left: -20px;
        top: 0;
        border: 10px solid transparent;
        border-right-color: @grey-tag;
      }
      &::after {
        content: " ";
        width: 8px;
        height: 8px;
        background-color: @background;
        border-radius: 4px;
        position: absolute;
        top: 6px;
        left: 2px;
      }
    }

    .square-tag:hover {
      &::before {
        border-right-color: @dark-grey-tag;
      }
    }

    .circle-tag {
      border-radius: 10px;
      padding-left: 20px;
      margin-left: 10px;
      &::after {
        content: " ";
        width: 10px;
        height: 10px;
        background-color: @background;
        border-radius: 6px;
        position: absolute;
        top: 5px;
        left: 6px;
      }
    }
  }
}
</style>
