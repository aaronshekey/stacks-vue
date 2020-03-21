<template>
  <div id="app">
    <Question v-for="item of items" :key="item.question_id"
      :title=item.title
      :view_count=item.view_count
      :vote_count=item.score
      :answer_count=item.answer_count
      :url=item.link
      :profile_url=item.owner.link
      :profile_image=item.owner.profile_image
      :display_name=item.owner.display_name
      :is_answered=item.is_answered
    />
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
