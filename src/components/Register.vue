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
                        <div class="form-group">
                            <label for="confirm-password">确认密码</label>
                            <input type="password" v-model="confirmPassword" class="form-control">
                        </div>
                        <button type="submit" class="btn btn-block btn-success">注册</button>
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
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    onSubmit() {
      if (this.password === this.confirmPassword) {
        const formData = {
          email: this.email,
          password: this.password
        };
        this.$axios
          .post("users-lee.json", formData)
          .then(res => this.$router.push({ name: "login" }))
          .catch(err => console.log(err));
      } else {
        alert("两次输入的密码不一致!");
      }
    }
  }
};
</script>

<style>
</style>
