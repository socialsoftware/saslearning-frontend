<template>
  <Modal
    :breadcrumbs="breadcrumbs"
    :title="title">
    <section>
      <div class="actions-row">
        <form>
          <p>This will be a form</p>
        </form>
      </div>
    </section>
  </Modal>
</template>

<script>
import Modal from '@/components/utils/Modal'

export default {
  components: {
    Modal
  },
  props: {
    title: {
      type: String,
      required: true
    },
    breadcrumbTitle: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      breadcrumbs: [{
        title: this.$t('models.title'),
        to: { name: 'models' }
      }, {
        title: this.$t(this.breadcrumbTitle)
      }],
      form: []
    }
  }
}
</script>

<style lang="scss">

</style>
