<template>
  <ul
    v-if="fields.length > 0"
    :class="listStyle">
    <li
      v-for="field in fields"
      :key="field.title">
      <slot v-bind="field">
        <h4>{{ field.title }}
          <span
            v-if="field.required"
            class="badge">
            ({{ $t('model.field.required') }})
          </span>
        </h4>
        <p>{{ field.description }}</p>
      </slot>
      <tree-list :fields="field.fields"/>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TreeList',
  props: {
    fields: {
      type: Array,
      required: true
    },
    listStyle: {
      type: String,
      default: 'tree-list'
    }
  }
}
</script>

<style lang="scss">
.tree-list {
  list-style-type: none;
  border-left: 2px solid $main-color;
  padding-left: 1.5rem;
  margin-left: 0rem;

  li {
    padding: 2rem 0;
    h4 {
      margin-top: 0;
      margin-bottom: 1rem;
    }

    p {
      margin: 0;
    }
  }
}

.clean-list {
  list-style-type: none;
  padding: 0;
}

.badge {
      text-transform: uppercase;
      font-size: 1.25rem;
      font-weight: 500;
      padding: 0.25rem 0.25rem;
      margin: 0 0.5rem;
    }
</style>
