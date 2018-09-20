<template>
  <ul class="list">
    <li
      v-for="row in rows"
      :key="row.id">
      <slot v-bind="row"/>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    rows: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
.list {
  display: flex;
  flex-direction: column;

  list-style: none;
  padding: 0;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 2rem 0;
    border-bottom: 1px solid $light-gray;

    h3, p {
      margin: 0;
    }
  }

  .list-item {
    flex: 1;
    cursor: pointer;
  }

  .list-item:hover {
    color: $main-color;
  }
}
</style>
