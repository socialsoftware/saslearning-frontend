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
            <input
              :placeholder="$t('documents.new.authors.placeholder')"
              type="text"
              name="authors">
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

export default {
  components: {
    Modal
  },
  data () {
    return {
      breadcrumbs: [{
        title: 'Documents',
        to: { name: 'documents' }
      }, {
        title: 'New Document'
      }]
    }
  }
}
</script>
