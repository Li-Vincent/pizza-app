<template>
    <div class="row">
        <div class="col-sm-12 col-md-8">
            <table class="table">
                <thead class="thead-default">
                    <tr>
                        <th>尺寸</th>
                        <th>价格</th>
                        <th>加入</th>
                    </tr>
                </thead>
                <tbody v-for="item in getMenuItems" :key="item.name+item.options">
                    <tr>
                        <td><strong>{{item.name}}</strong></td>
                    </tr>
                    <tr v-for="option in item.options" :key="option.size">
                        <td>{{option.size}}寸</td>
                        <td>{{option.price}}RMB</td>
                        <td><button @click="addToCart(item,option)" class="btn btn-sm btn-outline-success">+</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="col-sm-12 col-md-4">
            <div v-if="cart.length>0">
                <table class="table">
                    <thead class="thead-default">
                        <tr>
                            <th>数量</th>
                            <th>品种</th>
                            <th>价格</th>
                        </tr>
                    </thead>
                    <tbody v-for="item in cart" :key="item.name+item.size">
                        <tr>
                            <td>
                                <button @click="decreaceQuantity(item)" class="btn btn-sm btn-light">-</button>
                                {{item.quantity}}
                                <button @click="increaceQuantity(item)" class="btn btn-sm btn-light">+</button>
                            </td>
                            <td>{{item.name + " " + item.size}}寸</td>
                            <td>{{item.price*item.quantity}}RMB</td>
                        </tr>
                    </tbody>
                </table>
                <p>总价：{{totalPrice}}RMB</p>
                <button class="btn btn-block btn-success">提交</button>
            </div>
            <div v-else>
                {{cartEmptyText}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [],
      cartEmptyText: "购物车中没有商品",
      getMenuItems: {}
    };
  },
  methods: {
    addToCart(item, option) {
      let addItem = {
        name: item.name,
        size: option.size,
        price: option.price,
        quantity: 1
      };
      if (this.cart.length > 0) {
        let result = this.cart.filter(cartItem => {
          return (
            cartItem.name == addItem.name &&
            cartItem.size == option.size &&
            cartItem.price == option.price
          );
        });
        if (result != null && result.length > 0) {
          result[0].quantity++;
        } else {
          this.cart.push(addItem);
        }
      } else {
        this.cart.push(addItem);
      }
    },
    increaceQuantity(item) {
      item.quantity++;
    },
    decreaceQuantity(item) {
      item.quantity--;
      if (item.quantity <= 0) {
        this.removeFromCart(item);
      }
    },
    removeFromCart(item) {
      this.cart.splice(this.cart.indexOf(item), 1);
    }
  },
  computed: {
    totalPrice() {
      return this.cart.reduce((sum, item) => {
        return (sum += item.price * item.quantity);
      }, 0);
    }
  },
  created() {
    this.$axios
      .get("menu-lee.json")
      .then(res => (this.getMenuItems = res.data))
      .catch(err => console.log(err));
  }
};
</script>

<style>
</style>
