<template>
  <div id="app">
    <div class="container">
      <Header/>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
    <br>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <router-view name="guide"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="history"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="delivery"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style>
body {
  font-family: Arial;
}
</style>
