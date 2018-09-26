<template>
  <modal
    :breadcrumbs="breadcrumbs"
    title="New Document">
    <section>
      <div class="actions-row">
        <form>
          <p>
            <label for="title"><h3>{{ $t('documents.new.title.label') }}</h3></label>
            <input
              :placeholder="$t('documents.new.title.placeholder')"
              type="text"
              name="title">
          </p>
          <p>
            <label for="authors"><h3>{{ $t('documents.new.authors.label') }}</h3></label>
            <input-tag
              :tags.sync="tags"
              :placeholder="$t('documents.new.authors.placeholder')"/>
              <!-- <input
              :placeholder="$t('documents.new.authors.placeholder')"
              type="text"
              name="authors"> -->
          </p>
          <p>
            <label for="source"><h3>{{ $t('documents.new.source.label') }}</h3></label>
            <input
              :placeholder="$t('documents.new.source.placeholder')"
              type="text"
              name="source">
          </p>
        </form>
      </div>
    </section>
    <template slot="actions">
      <button
        class="button violet filled"
        type="submit">{{ $t('documents.new.submit') }}</button>
    </template>
  </modal>
</template>

<script>
import Modal from '@/components/utils/Modal'
import InputTag from 'vue-input-tag'

export default {
  components: {
    Modal,
    InputTag
  },
  data () {
    return {
      breadcrumbs: [{
        title: 'Documents',
        to: { name: 'documents' }
      }, {
        title: 'New Document'
      }],
      tag: '',
      tags: []
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
.vue-input-tag-wrapper {
  display: flex;
  flex-flow: row wrap;

  width: 100%;
  min-height: 5.4rem;
  background: transparent;
  margin-bottom: 2rem;
  font-size: 1.6rem;
  border: 1px solid $gray-400;
  border-radius: 2px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0.4rem 1.8rem;

  .new-tag {
    width: auto;
    font-size: 1.6rem;
    margin-top: 0;
    margin-bottom: 0;
    padding: 1.2rem 0;
    color: $dark;
  }

  .input-tag {
    background: $violet-600;

    padding: 0.5rem 0.75rem;
    margin: 0.4rem 0.75rem 0.4rem 0;

    color: #FFF;
    border-color: $violet-600;
    font-weight: 600;
    font-size: 1.6rem;

    .remove {
      color: #FFF;
      padding-left: 0.75rem;
    }
  }
}
</style>
