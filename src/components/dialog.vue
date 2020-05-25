<template>
  <div class="dialog">
    <p> you :</p>
    <textarea type="text" v-model="question" placeholder="???"> </textarea>
    <p> robot :</p>
    <textarea  type="text" v-model="answer" placeholder="..."> </textarea>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class Dialog extends Vue {
  @Prop() private question!: string;
  @Prop() private answer!: string;

  // 组件方法也可以直接声明为实例的方法
  // created(): void {
    
  // }
  getAnswer(q: string) {
    fetch(`/api/answer?q=${q}`, {
        headers:{ 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
       })
      .then(resp => resp.text())
      .then(data => {
        this.answer = data;
      });
  }

  @Watch('question')
  questionChange(newQ: string){
     if(newQ.indexOf('\n') > 0)
        this.getAnswer(newQ)
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
