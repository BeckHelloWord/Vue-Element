<template>
  <div class="demo">
    <template v-for="item of items">
      <p :key="item.message">{{item.message}}</p>
    </template>
    <ul>
      <template v-for="(value,key) of object">
        <li>{{key+'：'+value}}</li>
      </template>
    </ul>
    <button @click="sequence">改变</button>

    <button @click="skip">跳转</button>

    <router-link :to="{name:'index'}">首页</router-link>
  </div>
</template>

<script>
export default {
  name: 'demo',
  data() {
    return {
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ],
      object: {
        firstName: 'John',
        lastName: 'Doe',
        age: 30
      }
    }
  },
  methods: {
    sequence: function(event) {
      console.log(event.target.tagName)
      //修改数组中某个值
      this.$set(this.items, 0, { message: 'aaaa' });
      //修改对象中某个值
      this.$set(this.object, 'firstName', 'beck');
    },
    skip: function() {
      //编程式跳转
      // this.$router.push('index')
      //命名路由的写法
      this.$router.push({ name: 'index' })
    }

  },
  computed: {

  },
  watch: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
