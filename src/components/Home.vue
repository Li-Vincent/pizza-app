<template>
    <div>
        <h1>Home</h1>
        <button class="btn btn-success" @click="goToMenu">Let's order!</button>
    </div>
    
</template>

<script>
export default {
  methods: {
    goToMenu() {
        this.$router.push({ name: 'menu', params: { userId: 123 }});
    //   this.$router.push({ name: "menu", query: { plan: 'private' } });
    }
  }
};
</script>

<style>
</style>
