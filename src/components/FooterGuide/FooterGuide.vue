<template>
  <div id="footerGuide">
    <footer class="foot-guide">
      <span class="guide_item on" @click="goto('/home')">
         <span class="item_icon">
            <i class="iconfont icon-home"></i>
         </span>
         <span>首页</span>
      </span>
      <span class="guide_item " @click="goto('/category')">
         <span class="item_icon">
            <i class="iconfont icon-fenlei"></i>
         </span>
         <span>分类</span>
      </span>
      <span class="guide_item " @click="goto('/found')">
         <span class="item_icon">
            <i class="iconfont icon-tupian"></i>
         </span>
         <span>识物</span>
      </span>
      <span class="guide_item " @click="goto('/shop')">
         <span class="item_icon">
            <i class="iconfont icon-xiazai3"></i>
         </span>
         <span>购物</span>
      </span>
      <span class="guide_item " @click="goto('/personal')">
         <span class="item_icon">
            <i class="iconfont icon-geren"></i>
         </span>
         <span>个人</span>
      </span>
    </footer>
  </div>

</template>
<script>
  export default {
    methods:{
      goto(path){
        this.$router.replace(path)
      }
    }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../comment/stylus/mixins.styl"
  #footerGuide
     width 100%
     height 100%
     .foot-guide
        border-top 1px solid #eee
        position fixed
        left 0
        bottom 0
        width 100%
        height 98px
        display flex
        justify-content space-around
        align-items center
        background-color white
        .guide_item
          display flex
          flex-direction column
          align-items center
          font-size 24px
          &.on
            color #C71423
          .item_icon
            margin-bottom 10px
            .iconfont
              font-size 40px
</style>
