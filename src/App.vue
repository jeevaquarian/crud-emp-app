<template>
  <div id="app">
    <div>
      <Header />
    </div>
    <div class="container">
      <div class="row">
        <div class="mt-5 mb-3 col-md-12">
          <employeeList />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import employeeList from "./components/employeeList";
export default {
  name: "App",
  components: {
    Header,
    employeeList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
