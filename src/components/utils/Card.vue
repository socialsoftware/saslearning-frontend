<template>
  <div class="card shadow dashboard-item">
    <div class="card-header">
      <h3>{{ title }}</h3>
      <p v-if="description">
        {{ description }}
      </p>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: undefined
    }
  }
}
</script>

<style lang="scss">
.dashboard-item {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 1fr 1fr auto;
  grid-template-areas:
    "card-header"
    "card-content"
    "card-footer";

  height: 22rem;

  h3, p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    margin: 0
  }

  .card-header, .card-content {
    padding: 0 2.5rem;
    margin-bottom: 1.5rem;
  }

  .card-header {
    grid-area: card-header;
    margin-top: 3rem;
    height: 5rem;
  }

  .card-content {
    grid-area: card-content;
  }

  .card-footer {
    grid-area: card-footer;
  }

}
</style>
