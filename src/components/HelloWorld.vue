<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ faasResponse }}</h1>
   
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  @Prop() private faasResponse!: string;

  // 组件方法也可以直接声明为实例的方法
  created(): void {
    fetch("/api/index")
      .then(resp => resp.json())
      .then(data => {
        this.faasResponse = data.message;
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
