<template>
  <Transition
    name="fade">
    <div class="modal">
      <section class="modal-header">
        <header>
          <ol class="breadcrumbs">
            <li>
              <RouterLink
                :to="{ name: 'home' }"
                class="breadcrumb">
                SAS Learning
              </RouterLink>
            </li>
            <li
              v-for="breadcrumb in breadcrumbs"
              :key="breadcrumb.title"
              class="breadcrumb">
              <RouterLink
                v-if="breadcrumb.to"
                :to="breadcrumb.to">
                {{ breadcrumb.title }}
              </RouterLink>
              <template v-else>
                {{ breadcrumb.title }}
              </template>
            </li>
          </ol>
          <h1>{{ $t(title) }}</h1>
        </header>
      </section>

      <div class="modal-content">
        <slot />
      </div>

      <div class="modal-footer">
        <footer>
          <nav class="form-nav">
            <a
              href="#"
              class="button violet"
              @click.prevent="$router.go(-1)">
              {{ $t('modal.close') }}
            </a>
            <slot name="actions" />
          </nav>
        </footer>
      </div>

      <a
        :aria-label="$t('modal.close')"
        href="#"
        class="modal-close button-modal-close"
        @click.prevent="$router.go(-1)" />
    </div>
  </Transition>
</template>

<script>

export default {
  props: {
    breadcrumbs: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .6s ease, padding .6s ease;
  & > section{
    transform: scale(1);
    transition: transform .6s ease;
  }
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transition: all .6s ease;
  & > section{
    transform: scale(.9);
    transition: transform .6s ease;
  }
}

.modal {
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  grid-template-areas:
    "modal-header"
    "modal-content"
    "modal-footer";

  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: white;

  .modal-content, modal-header {
    background: white;
  }

  header, section, footer {
    width: 880px;
    margin: 0 auto;
  }

  input {
    width: 100%;
    background: transparent;
    padding: 16px 18px;
    margin-bottom: 2rem;
    font-size: 1.6rem;
    border: 1px solid $gray-400;
    border-radius: 2px;
    box-sizing: border-box;
  }

  .modal-header {
    grid-area: modal-header;
    position: sticky;
    top: 0;
    height: 10rem;
    background-color: white;

    padding: 15rem 0 3rem;
    @media (min-width: 1200px) {
      border-bottom: 1px solid $light-blue-700;

      &:after {
        content: "";
        position: absolute;
        bottom: -2.1rem;
        width: 100%;
        height: 2rem;
        background-image: linear-gradient(to bottom,#fff 10%,rgba(255,255,255,0)75%);
      }
    }

    .breadcrumbs {
      margin: 0;
      padding: 0;
      list-style: none;
      margin-bottom: 1.6rem;
      li {
        display: inline-block;
        font-size: 1.2rem;
        position: relative;
        padding-right: 12px;
        margin-right: 0.4rem;
        &:not(:last-of-type)::after,
        &:not(:last-of-type)::before{
          content: "";
          width: 6px;
          height: 2px;
          border-radius: 2px;
          background: $light-gray;
          display: block;
          position: absolute;
          right: 0;
        }
        &:not(:last-of-type)::after{
          transform: rotate(45deg);
          top: 11px;
        }
        &:not(:last-of-type)::before{
          transform: rotate(-45deg);
          top: 14px;
        }
      }
    }
  }

  .modal-content {
    grid-area: modal-content;
    padding-top: 2rem;

    > section:last-of-type{
      margin-bottom: 128px;
    }
  }

  .modal-footer {
    grid-area: modal-footer;

    position: sticky;
    bottom: 0;

    padding: 22px 0;
    background-color: $light-gray-300;

    a, button {
      margin-right: 1.5rem;
    }
  }

  .modal-close {
    position: fixed;
    right: 56px;
    top: 56px;
    padding: 17px;
    z-index: 99999;
    user-select: none;
    border: 2px solid rgba($gray-400, 0.5);
    border-radius: 50%;
    backface-visibility: hidden;

    @media (min-width: 796px){
      right: 36px;
      top: 36px;
    }

    &:hover,
    &:focus {
      border: 2px solid rgba($gray-400, 1);
    }
    &:before,
    &:after {
      position: absolute;
      content: "";
      background: $gray-400;
      width: 20px;
      height: 2px;
      top: 16px;
      left: 7px;
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  }
}
</style>
