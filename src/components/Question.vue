<template>
  <div class="grid ai-center p16 sm:fd-column sm:ai-start bb bc-black-2">
    <div class="grid--cell fl-shrink0 ws2 mr16 sm:mb8">
      <div class="grid gs8 jc-center sm:jc-start">
        <div class="grid fd-column ai-center fc-light px12 py6 sm:fd-row sm:p0">
          <div class="grid--cell fs-body3 sm:mr4">{{ vote_count }}</div>
          <div class="grid--cell fs-fine">votes</div>
        </div>
        <div class="grid fd-column ai-center fc-light px12 py6 sm:fd-row sm:pt2 sm:pb2 sm:pl6 sm:pr6">
          <div class="grid--cell fs-body3 sm:mr4">{{ answer_count }}</div>
          <div class="grid--cell fs-fine">answers</div>
        </div>
        <div class="grid fd-column ai-center fc-light px12 py6 sm:fd-row sm:p0">
          <div class="grid--cell fs-body3 sm:mr4">{{ view_count }}</div>
          <div class="grid--cell fs-fine">views</div>
        </div>
      </div>
    </div>
    <div class="grid--cell fl1 sm:w100">
      <a :href=url class="s-link fs-subheading d-inline-block mb4 sm:mb2">{{ title }}</a>
      <p class="v-truncate2 mb8">{{ body }}</p>
      <div class="grid gs4 ai-center fw-wrap">
        <a class="grid--cell s-tag" href="#">git</a>
        <a class="grid--cell s-tag" href="#">version-control</a>
        <a class="grid--cell s-tag" href="#">git-commit</a>
        <a class="grid--cell s-tag" href="#">undo</a>
        <a class="grid--cell s-tag" href="#">pre-commit</a>
        <div class="grid ai-center fc-light ml-auto pl12">
          <a class="grid ai-center mr4" href="#">
            <img class="bar-sm d-block mr4" src="https://via.placeholder.com/16">
              GManNickG
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
    view_count: String,
    answer_count: String,
    vote_count: String,
    url: String
  }
}
</script>
