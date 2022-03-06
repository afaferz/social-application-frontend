<template>
    <div>
        <AppNavbar />
        <router-view />
    </div>
</template>

<script>
import AppNavbar from '@/components/Bar/AppNavbar.vue';

export default {
  components: {
    AppNavbar,
  },
  setup() {},
};
</script>

<style>
* {
    padding: 0;
    margin: 0;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    min-height: 100vh;
    padding-top: 5vh;
}
</style>
