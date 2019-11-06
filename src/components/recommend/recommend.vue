<template>
  <div class="recommend" >
      <scroll ref="scroll" class="recommend-content" :data="discList">
        <div>
        <div v-if="recommends.length"  class="slider-wrapper">
         <!-- 轮播图组件-->
          <slider>
            <div v-for="item in recommends" :key="item.id">
              <a :href="item.linkUrl">
                <img class="needsclick" @load="loadImage" :src="item.picUrl" alt="">
              </a>
            </div>
          </slider>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li v-for="item in discList" class="item">
              <div class="icon">
                <img  v-lazy="item.imgurl" alt="" height="60" width="60">
              </div>
              <div class="text">
                <h2 class="name" v-html="item.creator.name"></h2>
                <p class="desc" v-html="item.dissname"></p>
              </div>
            </li>
          </ul>
        </div>
        </div>
        <div class="loading-container" v-show="!discList.length">
          <loading :title="loadingData"> </loading>
        </div>
      </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import Loading from  'base/loading/loading'
  import  Scroll from 'base/scroll/scroll'
  //引入轮播图组件
  import Slider from 'base/slider/slider'
  //引入封装数据的方法
  import { getRecommend,getDisCList} from "api/recommend";
  import {ERR_OK} from "api/config";
  export  default {
    name:'recommend',
    components:{
      Slider,
      Scroll,
      Loading
    },
    data(){
      return {
        //轮播图数据
        recommends:[],
        //歌单数据
        discList:[],
        loadingData:"正在努力加载,小主耐心等待哦"
      }
    },
    created() {
       //调用
      setTimeout(()=>{
        this._getRecommend();
      },5000)
      this._getDiscList();
    },
    methods:{
      //获取轮播图的数据
      _getRecommend(){
        getRecommend().then((res)=>{
             if(res.code===ERR_OK){
               //给轮播图数据赋值
               this.recommends=res.data.slider
               console.log(this.recommends)
             }
        })
      },
      _getDiscList(){
        getDisCList().then((res)=>{
          if(res.code===ERR_OK)
          {
            this.discList = res.data.list
            console.log('歌單列表',res.data.list)
          }
        })
      },
      loadImage(){
        if(!this.checkLoaded)
        {
          this.$refs.scroll.refresh()
        }
        this.checkLoaded=true
      }
    }
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        /*height: 0*/
        /*padding-top: 40%*/
        overflow: hidden
        .slider-content
          position: absolute
          top: 0
          left: 0
          width: 100%
          height: 100%
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>
