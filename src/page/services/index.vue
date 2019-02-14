<template>
  <div>
    <Header></Header>
    <div class="nav">
      <ul class="services">
        <li class="service-item">加密服务</li>
        <li class="service-item">解密服务</li>
        <li class="service-item">正则匹配</li>
      </ul>
    </div>
  </div>
</template>
<script>
import Header from "./../../components/common/header";
export default {
  name: "services",
  components: {
    Header
  }
};
</script>
<style>
.services {
  margin-top: 1rem;
  display: flex;
  width: 100rem;
  height: 45rem;
  justify-content: center;
  align-items: center;
}
.service-item {
  text-align: center;
  line-height: 14rem;
  display: inline-block;
  background: #000;
  color: #fff;
  width: 14rem;
  height: 15rem;
  border-radius: 0.5rem;
  font-size: 2rem;
}
</style>