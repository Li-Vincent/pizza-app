<template>
    <div class="row mt-3">
        <div class="col-md-12 col-lg-12">
            <div class="card">
                <div class="card-body">
                    <img src="../../src/assets/icon.png" alt="icon" class="mx-auto d-block">
                    <form @submit.prevent="onSubmit">
                        <div class="form-group">
                            <label for="email">邮箱</label>
                            <input type="text" v-model="email" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="password">密码</label>
                            <input type="password" v-model="password" class="form-control">
                        </div>
                        <button type="submit" class="btn btn-block btn-success">登录</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      this.$axios
        .get("users-lee.json")
        .then(res => res.data)
        .then(data => {
          const users = [];
          for (let key in data) {
            const user = data[key];
            users.push(user);
          }
          let result = users.filter(user => {
            return user.email === this.email && user.password === this.password;
          });
          if (result != null && result.length > 0) {
            this.$store.dispatch("setUser", result[0].email);
            this.$router.push({ name: "home" });
          } else {
            alert("账号密码错误！");
            this.$store.dispatch("setUser", null);
          }
        });
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.dispatch("setUser", null);
    });
  }
};
</script>

<style>
</style>
