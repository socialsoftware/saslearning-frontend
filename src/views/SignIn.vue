<template>
  <modal
    :breadcrumbs="breadcrumbs"
    title="sign-in.breadcrumb">
    <section>
      <div class="actions-row">
        <div class="details">
          <h3>{{ $t('sign-in.title') }}</h3>
          <p>{{ $t('sign-in.description') }}</p>
        </div>
        <div class="actions">
          <router-link
            class="button-primary"
            to="#">{{ $t('sign-in.providers.fenixedu') }}</router-link>
          <router-link
            class="button-primary"
            to="#">{{ $t('sign-in.providers.google') }}</router-link>
        </div>
      </div>
    </section>
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
        title: 'Sign In'
      }]
    }
  }
}
</script>
