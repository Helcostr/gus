<template>
  <div class="accordion-item">
    <h2 class="accordion-header" :id="header_id">
      <button class="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="`#${collapse_id}`"
        aria-expanded="false"
        :aria-controls="collapse_id"
        >
        {{question}}
      </button>
    </h2>
    <div :id="collapse_id"
      class="accordion-collapse collapse"
      :data-bs-parent="`#${parent}`"
      :aria-labelledby="header_id">
      <div class="accordion-body">
        {{answer}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
      props: {
        index: Number,
        parent: String,
        header_id: String,
        collapse_id: String,
        question: String,
        answer: String
      },
  }
</script>
