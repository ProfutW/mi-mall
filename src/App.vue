<template>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
export default {
  name: 'app',
  data() {
    return {
      res: {}
    }
  },
  mounted() {
    // this.axios.get('/mock/login.json').then(res => {
    //   this.res = res
    // })
    this.axios.get('/user/login').then(res => {
      this.res = res
      console.log(res)
    })
  }
}
</script>