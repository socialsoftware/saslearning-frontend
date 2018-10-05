<template>
  <section>
    <p class="label"><strong>{{ $t(title) }}:</strong></p>
    <ul>
      <li
        v-for="item in items"
        :key="item.id">
        <slot v-bind="item">
          {{ item }}
        </slot>
      </li>
    </ul>
    <template v-for="action in actions">
      <a
        v-if="action.external"
        :key="action.id"
        :href="action.url">{{ $t(action.name) }}</a>
      <router-link
        v-else
        :key="action.id"
        :to="action.url">{{ $t(action.name) }}</router-link>
    </template>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      default: function () {
        return []
      }
    },
    actions: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    slots () {
      return ''
    }
  }
}
</script>
