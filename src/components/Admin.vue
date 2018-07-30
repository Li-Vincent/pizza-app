<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <h3 class="text-muted my-5">添加新的Pizza</h3>
        <div class="form-group row">
          <label for="name" class="col-sm-1">品种</label>
          <input type="text" class="form-control col-sm-11" v-model="newPizza.name">
        </div>
        <div class="form-group row">
          <label for="desc" class="col-sm-1">描述</label>
          <textarea class="form-control col-sm-11" v-model="newPizza.description" rows="5"></textarea>
        </div>
        <p><strong>选项1</strong></p>
        <div class="form-group row">
          <label for="size1" class="col-sm-1">尺寸</label>
          <input type="text" class="form-control col-sm-11" v-model="newPizza.size1">
        </div>
        <div class="form-group row">
          <label for="price1" class="col-sm-1">价格</label>
          <input type="text" class="form-control col-sm-11" v-model="newPizza.price1">
        </div>
        <p><strong>选项2</strong></p>
        <div class="form-group row">
          <label for="size2" class="col-sm-1">尺寸</label>
          <input type="text" class="form-control col-sm-11" v-model="newPizza.size2">
        </div>
        <div class="form-group row">
          <label for="price2" class="col-sm-1">价格</label>
          <input type="text" class="form-control col-sm-11" v-model="newPizza.price2">
        </div>
        <div class="form-group row">
          <button @click="addPizza" class="btn btn-success btn-block">提交</button>
        </div>
    </div>
    <div class="col-sm-12 col-md-4">
      <h3 class="text-muted my-5">
        菜单
      </h3>
      <table class="table">
        <thead>
          <tr>
            <th>品种</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.id">
          <tr>
            <td>{{item.name}}</td>
            <td><button @click="deleteItem(item)" class="btn btn-sm btn-outline-danger">&times;</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newPizza: {
        name: "",
        description: "",
        size1: "",
        price1: "",
        size2: "",
        price2: ""
      },
      getMenuItems: []
    };
  },
  methods: {
    addPizza() {
      let data = {
        name: this.newPizza.name,
        description: this.newPizza.description,
        options: [
          {
            size: this.newPizza.size1,
            price: this.newPizza.price1
          },
          {
            size: this.newPizza.size2,
            price: this.newPizza.price2
          }
        ]
      };
      this.$axios
        .post("menu-lee.json", data)
        .then(res => res.data)
        .then(data => this.$router.push({ name: "menu" }))
        .catch(err => console.log(err));
    },
    deleteItem(item) {
      this.$axios
        .delete("menu-lee/" + item.id + ".json")
        .then(res => this.$router.push({ name: "menu" }));
    }
  },
  created() {
    this.$axios
      .get("menu-lee.json")
      .then(res => res.data)
      .then(data => {
        let menuArray = [];
        for (let key in data) {
          data[key].id = key;
          menuArray.push(data[key]);
        }
        this.getMenuItems = menuArray;
      })
      .catch(err => console.log(err));
  }
  //   beforeRouteEnter(to, from, next) {
  //     next(vm => {
  //       alert("hello " + vm.name);
  //     });
  //   }
};
</script>

<style>
</style>
