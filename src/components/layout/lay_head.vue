<template>
  <div class="LayHead">
    <div class="header-back">
      <span class="iconfont icon-jiantou2"></span>
    </div>
    <div class="header-seacrh">
     <span class="iconfont icon-sousuo4"></span> 
      目的地/酒店/景点/关键字
    </div>
    <div class="header-city">
      长沙
      <span class="iconfont icon-jiantou"></span>
    </div>
  </div>
</template>

<script>
import "@/assets/icon/iconfont.css";
export default {
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.LayHead {
  line-height: r(80);
  height: r(80);
  text-align: center;
  display: flex;
  .header-back {
    width: r(80);
    font-size: r(18);
  }
  .header-seacrh {
    flex: 1;
    height: r(50);
    line-height: r(50);
    margin-top: r(15);
    margin-left: r(15);
    margin-right: r(15);
    color: #999;
    box-shadow:0 0 r(2) #666 inset;
    border-radius: r(25);
  }
  .header-city {
    width: r(100);
  }
}
</style>


