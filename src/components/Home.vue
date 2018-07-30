<template>
    <div class="row">
        <div id="home" class="col-sm-12 text-center">
            <div class="background">
                <h1>欢迎大家品尝Pizza！</h1>
                <h2>这里有你非常喜欢的Pizza！</h2>
                <button class="btn btn-success" @click="goToMenu">Let's order!</button>
            </div>
        </div>
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

<style scoped>
#home{
    background:url('../../src/assets/pizza.jpg');
    height: 85vh;
    padding: 10%;
}
.background{
    background: #eee;
    opacity: 0.7;
    max-width: 70vw;
    margin: 0 auto;
    padding: 40px 0;
    border-radius: 10px;
}
</style>
