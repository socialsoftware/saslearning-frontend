<template>
  <section>
    <p class="label">
      <strong>{{ $t(title) }}</strong>
    </p>
    <ul>
      <li
        v-for="item in items.slice(0, elements)"
        :key="item.id">
        <slot v-bind="item">
          {{ item }}
        </slot>
      </li>
      <RouterLink
        v-if="items.length > elements && allItemsLink"
        :to="allItemsLink">
        {{ $t('dashboard.view-all') }}
      </RouterLink>
    </ul>
    <template v-for="action in actions">
      <a
        v-if="action.external"
        :key="action.id"
        :href="action.url">
        {{ $t(action.name) }}
      </a>
      <RouterLink
        v-else
        :key="action.id"
        :to="action.url">
        {{ $t(action.name) }}
      </RouterLink>
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
    allItemsLink: {
      type: Object,
      default: undefined
    },
    actions: {
      type: Array,
      default: () => []
    }
  },
  data: () => {
    return {
      elements: 5
    }
  },
  methods: {
    slots () {
      return ''
    }
  }
}
</script>

<style lang="scss" scoped>
ul{
    margin: 1.6rem 0;
    padding: 0;
    list-style: none;
    li{
      padding: .8rem 0;
      line-height: 1;
      display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        &::before,
        &::after{
          display: none
        }
        p{
          margin: 0;
        }
    }
  }
</style>
