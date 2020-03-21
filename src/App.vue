<template>
  <div id="app">
    <Question v-for="item of items" :key="item.question_id" :title=item.title />
  </div>
</template>

<script>
import axios from 'axios'
import Question from './components/Question.vue'

export default {
  name: 'App',
  components: {
    Question
  },
  data () {
    return {
      items: null
    }
  },
  async created () {
    axios
      .get('https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow')
      .then(response => (this.items = response.data.items))
  }
}
</script>
