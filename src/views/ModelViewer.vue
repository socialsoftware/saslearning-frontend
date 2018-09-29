<template>
  <div
    v-if="model"
    class="main-content">
    <div class="content-header">
      <div class="title">
        <h1>{{ model.title }}</h1>
        <p>{{ model.description }}</p>
      </div>
      <div>
        <router-link
          :to="{name: 'post-model'}"
          class="button violet filled">
          {{ $t('model.edit.header') }}
        </router-link>
      </div>
    </div>

    <div class="content">
      <tree-list
        :fields="model.fields"
        list-style="clean-list">
        <template slot-scope="field">
          <h2>{{ field.title }}
            <span
              v-if="field.required"
              class="badge">
              ({{ $t('model.field.required') }})
            </span>
          </h2>
          <p>{{ field.description }}</p>
        </template>
      </tree-list>
    </div>
  </div>
</template>

<script>
import TreeList from '@/components/utils/TreeList'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    TreeList
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapGetters([
      'model'
    ])
  },
  created () {
    this.fetchModel({ id: this.id })
  },
  methods: {
    ...mapActions([
      'fetchModel'
    ])
  }
}
</script>
