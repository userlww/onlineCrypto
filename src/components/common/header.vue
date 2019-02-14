<template>
  <header>
    <p class="title">OnlineCrypto</p>
    <ul class="nav">
      <li>
        <a href>Home</a>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/services">Services</router-link> 
      </li>
      <li>
        <router-link to="/resources">Resources</router-link> 
      </li>
      <li>
        <a href>Blog</a>
      </li>
      <li>
        <a href>Github</a>
      </li>
    </ul>
  </header>
</template>
<script>
export default {
  name: "header"
};
</script>

<style>
@import "../../assets/css/header.css";
</style>

