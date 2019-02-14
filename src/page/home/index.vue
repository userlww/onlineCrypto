<template>
  <div>
    <Header></Header>
    <div class="container">
      <div class="entry">
        <p class="entry-title">Welcome to OnlineCrypto Site</p>
        <p class="mini-title">We try our best to provide best services</p>
        <button class="button">Have a try</button>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../../components/common/header";
export default {
  name: "home",
  components: {
    Header
  }
};
</script>
<style>
.container {
  height: 83vh;
  background-image: url("../../assets/img/banner.jpg");
  background-size: cover;
  background-position: 50% 50%;
}
.entry {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  height: 100%;
}
.entry {
  color: #fff;
  text-align: center;
}
.entry-title {
  font-size: 1.5rem;
  line-height: 3rem;
}
.button {
  height: 2rem;
  border: none;
  background: #000;
  width: 6rem;
  color: #fff;
  margin-top: 1rem;
  border-radius: 0.4rem;
}
</style>
