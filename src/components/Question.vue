<template>
  <div class="grid ai-center p16 sm:fd-column sm:ai-start bb bc-black-2">
    <div class="grid--cell fl-shrink0 ws2 mr16 sm:mb8">
      <div class="grid gs8 jc-center sm:jc-start fc-light">
        <div class="grid fd-column ai-center px12 py6 sm:fd-row sm:p0">
          <div class="grid--cell fs-body3 sm:mr4">{{ vote_count }}</div>
          <div class="grid--cell fs-fine">
            <span v-if="vote_count === 1 || vote_count === -1">
              vote
            </span>
            <span v-else>
              votes
            </span>
          </div>
        </div>
        <div class="grid fd-column ai-center px12 py6 sm:fd-row sm:pt2 sm:pb2 sm:pl6 sm:pr6 bar-sm" v-bind:class="{ 'bg-green-500 fc-white bc-transparent': is_answered, 'ba bc-green-2 fc-green-500': hasAnswers }">
          <div class="grid--cell fs-body3 sm:mr4">{{ answer_count }}</div>
          <div class="grid--cell fs-fine">
            <span v-if="answer_count === 1">
              answer
            </span>
            <span v-else>
              answers
            </span>
          </div>
        </div>
        <div class="grid fd-column ai-center px12 py6 sm:fd-row sm:p0">
          <div class="grid--cell fs-body3 sm:mr4">{{ view_count }}</div>
          <div class="grid--cell fs-fine">
            <span v-if="view_count === 1">
              view
            </span>
            <span v-else>
              views
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="grid--cell fl1 sm:w100">
      <a v-bind:href=url class="s-link fs-subheading d-inline-block mb4 sm:mb8" v-bind:class="{ 'sm:mb2': hasBody }">{{ title }}</a>
      <p class="v-truncate2 mb8" v-if="hasBody">{{ body }}</p>
      <div class="grid gs4 ai-center fw-wrap">
        <a class="grid--cell s-tag" href="#">git</a>
        <a class="grid--cell s-tag" href="#">version-control</a>
        <a class="grid--cell s-tag" href="#">git-commit</a>
        <a class="grid--cell s-tag" href="#">undo</a>
        <a class="grid--cell s-tag" href="#">pre-commit</a>
        <div class="grid ai-center fc-light ml-auto pl12">
          <a class="grid ai-center mr4" v-bind:href=profile_url>
            <img class="bar-sm d-block mr4 w16 h16" v-bind:src=profile_image>
              {{ display_name }}
          </a>
          answered 3 mins ago
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Question',
  props: {
    title: String,
    body: String,
    view_count: Number,
    answer_count: Number,
    vote_count: Number,
    url: String,
    profile_image: String,
    display_name: String,
    profile_url: String,
    is_answered: Boolean
  },
  computed: {
    hasBody: function () {
      if (this.body === undefined) {
        return false
      } else {
        return true
      }
    },
    hasAnswers: function () {
      if (this.answer_count > 0) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
