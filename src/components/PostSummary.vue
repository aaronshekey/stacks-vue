<template>
  <div class="s-post-summary">
    <div class="s-post-summary--stats">
      <div class="s-post-summary--stats-item" v-bind:class="{ 'has-accepted-answer': is_answered, 'has-answers': hasAnswers }">
        <span v-if="is_answered">
          <svg aria-hidden="true" class="svg-icon iconCheckmarkSm" width="14" height="14" viewBox="0 0 14 14"><path d="M13 3.41L11.59 2 5 8.59 2.41 6 1 7.41l4 4 8-8z"></path></svg>
        </span>
        {{ abbreviatedAnswerCount }}
        <span v-if="answer_count === 1">
          answer
        </span>
        <span v-else>
          answers
        </span>
      </div>
      <div class="s-post-summary--stats-item">
        {{ abbreviatedVoteCount }}
        <span v-if="vote_count === 1 || vote_count === -1">
          vote
        </span>
        <span v-else>
          votes
        </span>
      </div>
      <div class="s-post-summary--stats-item">
        {{ abbreviatedViewCount }}
        <span v-if="view_count === 1">
          view
        </span>
        <span v-else>
          views
        </span>
      </div>
    </div>
    <div class="s-post-summary--content">
      <a class="s-post-summary--content-title s-link" v-html="title" v-bind:href=url></a>
      <p class="s-post-summary--content-excerpt" v-if="hasBody">{{ body }}</p>
      <div class="s-post-summary--meta">
        <div class="s-post-summary--meta-tags">
          <a class="flex--item s-tag" v-bind:href="'https://stackoverflow.com/tags/' + tag" v-for="tag of tags" :key="tag">{{ tag }}</a>
        </div>
        <div class="s-user-card s-user-card__minimal">
          <a class="s-avatar s-user-card--avatar" v-bind:href=profile_url>
            <img class="s-avatar--image" v-bind:src=profile_image />
          </a>
          <a class="s-user-card--link" v-html="display_name" v-bind:href=profile_url></a>
          <ul class="s-user-card--awards">
            <li class="s-user-card--rep">{{ abbreviatedReputation }}</li>
          </ul>
          <div class="s-user-card--time">
            asked
            <timeago :datetime=convertedDate :auto-update="60"></timeago>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostSummary',
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
    reputation: Number,
    is_answered: Boolean,
    tags: Array,
    last_activity_date: Number
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
    },
    abbreviatedAnswerCount: function () {
      return abbreviateNumber(this.answer_count, 0)
    },
    abbreviatedViewCount: function () {
      return abbreviateNumber(this.view_count, 0)
    },
    abbreviatedVoteCount: function () {
      return abbreviateNumber(this.vote_count, 0)
    },
    abbreviatedReputation: function () {
      return abbreviateNumber(this.reputation, 0)
    },
    convertedDate: function () {
      return Date(this.last_activity_date * 1000)
    }
  }
}

function abbreviateNumber (number, decPlaces) {
  // 2 decimal places => 100, 3 => 1000, etc
  decPlaces = Math.pow(10, decPlaces)

  // Enumerate number abbreviations
  const abbrev = ['k', 'm', 'b', 't']

  // Go through the array backwards, so we do the largest first
  for (let i = abbrev.length - 1; i >= 0; i--) {
    // Convert array index to "1000", "1000000", etc
    const size = Math.pow(10, (i + 1) * 3)

    // If the number is bigger or equal do the abbreviation
    if (size <= number) {
      // Here, we multiply by decPlaces, round, and then divide by decPlaces.
      // This gives us nice rounding to a particular decimal place.
      number = Math.round(number * decPlaces / size) / decPlaces

      // Handle special case where we round up to the next abbreviation
      if ((number === 1000) && (i < abbrev.length - 1)) {
        number = 1
        i++
      }

      // Add the letter for the abbreviation
      number += abbrev[i]

      // We are done... stop
      break
    }
  }

  return number
}
</script>
