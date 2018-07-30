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
// blog  https://wd2977814978jcnbar.wilddogio.com/
// pizza https://wd9077913423avyuea.wilddogio.com/
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
          if (users.length > 0) {
            this.$router.push({ name: "home" });
          }
        });
    }
  }
};
</script>

<style>
</style>
