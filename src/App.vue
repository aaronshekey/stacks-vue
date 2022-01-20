<template>
  <div id="app">
    <PostSummary v-for="item of items" :key="item.question_id"
      :title=item.title
      :view_count=item.view_count
      :vote_count=item.score
      :answer_count=item.answer_count
      :url=item.link
      :profile_url=item.owner.link
      :profile_image=item.owner.profile_image
      :display_name=item.owner.display_name
      :is_answered=item.is_answered
      :tags=item.tags
      :last_activity_date=item.last_activity_date
    />
  </div>
</template>

<script>
import axios from 'axios'
import PostSummary from './components/Post-Summary.vue'

export default {
  name: 'App',
  components: {
    PostSummary
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
