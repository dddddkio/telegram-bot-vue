<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'

const checkedOptions = ref(['￥5 - 1点'])
const options = ['￥5 - 1点', '￥10 - 2点', '￥15 - 3点', '￥20 - 4点']

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <!-- 
    <div class="wrapper">

      
      
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/point">Point</RouterLink> 
        

    </div>
    -->
  </header>

  <!--
  <RouterView />
  -->
  <div><text class="text-bold text-black" style="font-size: large;">Hi, xxx! </text>您的账户目前余额 <text
      class="text-red">2</text> 点</div>
  <div style="margin-top:10px">套餐：
    <div style="margin-top:5px">
      <el-checkbox-group v-model="checkedOptions" :min="0" :max="1">
        <el-checkbox v-for="option in options" :key="option" :label="option">{{
          option
        }}</el-checkbox>
      </el-checkbox-group>
    </div>
  </div>

  <el-button type="success" style="margin-top:10px;width:100%">去支付</el-button>

  <div class="bg-grey light solid-xl shadow" style="padding:10px;border-radius: 2%;margin-top: 15px;">
    提示1：如果支付完成，VIP没有到账，请退出重新登录一次即可。如果还未到账可以发工单联系客服。</div>
  <div class="bg-grey light solid-xl shadow" style="padding:10px;border-radius: 2%;margin-top: 10px;">
    提示2：月付用户没有手机等客户端权限，需要手机客户端的请选择季付及以上套餐。</div>
  <div class="bg-grey light solid-xl shadow" style="padding:10px;border-radius: 2%;margin-top: 10px;">
    提示3：部分订单更改为HKD港币结算，最终换算为人民币付款时可能会因为汇率原因产生部分价格差异。</div>
</template>


<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
