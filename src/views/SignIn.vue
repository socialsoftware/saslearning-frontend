<template>
  <Modal
    :breadcrumbs="breadcrumbs"
    title="sign-in.breadcrumb">
    <section>
      <div class="actions-row">
        <div class="details">
          <h3>{{ $t('sign-in.title') }}</h3>
          <p>{{ $t('sign-in.description') }}</p>
        </div>
        <div class="actions">
          <a
            v-for="provider in providers"
            :key="provider.name"
            class="button-primary"
            :href="withCallbackUrl(provider.url)">
            {{ $t(`sign-in.providers.${provider.name.toLowerCase()}`) }}
          </a>
        </div>
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
    nextUrl: {
      type: String,
      default: undefined
    }
  },
  data () {
    return {
      providers: [{
        name: 'FenixEdu',
        url: `/api/v1/fenixedu/sign-in`
      }, {
        name: 'Google',
        url: '#'
      }],
      breadcrumbs: [{
        title: 'Sign In'
      }]
    }
  },
  methods: {
    withCallbackUrl (url) {
      if (this.nextUrl !== undefined) {
        const destination = `${window.location.origin}${this.nextUrl}`
        console.log(destination)
        return `${url}?callback=${encodeURIComponent(destination)}`
      } else {
        return url
      }
    }
  }
}
</script>
