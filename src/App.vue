<template>
  <div>
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
  export default {
    name:'App',
    components:{Footer,Header}
  }
</script>

<style lang="less" >
  .text{
    height: 300px;
    background-color: antiquewhite;
    font-size: 50px;
  }
</style>