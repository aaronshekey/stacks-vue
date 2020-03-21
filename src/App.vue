<template>
  <div id="app">
    <Question title="Welcome to Your Vue.js App" body="I need some text in here as an example" />
  </div>
</template>

<script>
import Question from './components/Question.vue'

export default {
  name: 'App',
  components: {
    Question
  }
}
</script>
