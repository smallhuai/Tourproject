<template>
  <div class="hello">
      <h1>我是信息页</h1>
      <div class="box"></div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg:""
    }
  },
  mounted(){
   console.log(this.$route)
    //  var data={
    //           v: '1559785164172',
    //           c: 'Index',
    //           m: 'GetBannerList',
    //           Type: '2',
    //           City: '上海'
    //         };
    // this.$apis.GetBannerList(data).then((res)=>{
    //     console.log(res);
    // })
  },
  methods:{
  	add(){
  		this.$router.push({
  			path:"/msea/89",
  		})
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


.box{
  width:100%;
  height:r(48*2);
  background:red;
}

</style>


