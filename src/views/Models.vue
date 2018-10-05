<template>
  <div class="main-content">
    <div class="content-header">
      <div class="title">
        <h1>{{ $t('models.title') }}</h1>
        <p>{{ $t('models.description') }}</p>
      </div>
      <div>
        <router-link
          :to="{name: 'create-model'}"
          class="button violet filled">
          {{ $t('models.new.header') }}
        </router-link>
      </div>
    </div>

    <div class="content-actions search-page">
      <form
        name="search-form"
        class="search-form"
        role="search"
        @submit.prevent="setSearch({modelSearch})">
        <button
          :value="$t('models.search.title')"
          type="submit">
          <svg
            class="svg-icon"
            viewBox="0 0 20 20">
            <path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"/>
          </svg>
        </button>
        <input
          v-model="modelSearch"
          :placeholder="$t('models.search.title')"
          type="search">
        <button
          :value="$t('models.search.clear')"
          type="button"
          data-focus="input.search-field"
          @click="clear">
          <svg
            class="svg-icon"
            viewBox="0 0 20 20">
            <path
              fill="none"
              d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"/>
          </svg>
        </button>
      </form>
    </div>

    <div class="content">
      <list
        v-if="models"
        :rows="models">
        <template slot-scope="model">
          <router-link
            :to="{name: 'model', params: { id: model.id }}"
            class="list-item"
            tag="div">
            <h3>{{ model.title }}</h3>
            <p>{{ model.description }}</p>
          </router-link>
          <div>
            <a
              class="button options suspension-points"
              href="#">
              <span>...</span>
            </a>
          </div>
        </template>
      </list>
    </div>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import List from '@/components/utils/List'

export default {
  components: {
    List
  },
  data () {
    return {
      headers: [
        { title: 'Title', isHidden: false },
        { title: 'URL', isHidden: true }
      ],
      modelSearch: undefined
    }
  },
  computed: {
    ...mapGetters([
      'loggedUser',
      'models'
    ])
  },
  mounted () {
    this.fetchModels()
  },
  methods: {
    ...mapActions([
      'fetchModels'
    ]),
    clear () {
      this.modelSearch = undefined
    }
  }
}
</script>
