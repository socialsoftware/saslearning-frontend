<template>
  <header class="main-header">
    <router-link
      :to="{name: 'home'}"
      class="logo">
      <h1>SAS Learning</h1>
    </router-link>
    <nav class="main-nav">
      <ul>
        <li><router-link :to="{name: 'documents'}">{{ $t('documents.title') }}</router-link></li>
        <li><router-link :to="{name: 'models'}">{{ $t('models') }}</router-link></li>
        <li><router-link
          v-if="loggedUser"
          :to="{name: 'activities'}">{{ $t('activities') }}</router-link></li>
        <li><router-link
          v-if="loggedUser"
          :to="{name: 'teams'}">{{ $t('teams') }}</router-link></li>
      </ul>
    </nav>
    <nav class="secondary-nav">
      <ul>
        <li>
          <dropdown id="app">
            <a
              slot="menu"
              class="language-switcher"
              href="#"
              @click.prevent>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 20 16">
                <path
                  fill="#8F95A1"
                  fill-rule="nonzero"
                  d="M9.3989071 9.3986014C8.1967213 8.1678322 6.99453552 7.048951 6.44808743 4.47552448h4.48087427V2.57342657H6.44808743V0H4.48087432v2.57342657H0v1.90209791h4.48087432c0 .67132867.10928961.33566433 0 .67132867C3.82513661 7.6083916 3.06010929 9.2867133 0 10.8531469l.6557377 1.9020979c2.95081968-1.5664336 4.48087432-3.4685315 5.13661203-5.7062938.6557377 1.6783217 1.74863388 3.0209791 2.95081967 4.2517483l.6557377-1.9020979zm5.9016393-6.26573427h-2.5136612L8.3060109 16h1.9672131l1.3114755-3.8041958h5.136612L18.0327869 16H20L15.3005464 3.13286713zm-3.1693989 7.04895107l1.9672132-5.14685317 1.9672131 5.14685317h-3.9344263z"/>
              </svg>
            </a>
            <template slot="options">
              <li>
                <a
                  v-if="$i18n.locale === 'en'"
                  href="#"
                  @click.prevent="$i18n.locale = 'pt'">
                  Português
                </a>
              </li>
              <li>
                <a
                  v-if="$i18n.locale === 'pt'"
                  href="#"
                  @click.prevent="$i18n.locale = 'en'">
                  English
                </a>
              </li>
            </template>
          </dropdown>

        </li>
        <li>
          <router-link
            :to="{name: 'sign-in'}"
            class="button violet">
            {{ $t('sign-in.enter') }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import Dropdown from '@/components/utils/Dropdown'

export default {
  components: {
    Dropdown
  },
  computed: {
    ...mapGetters([
      'loggedUser'
    ])
  }
}
</script>

<style lang="scss">
.main-header {
  grid-area: header;
  display: grid;
  grid-template-areas: "logo main-nav side-nav";
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto;

  @media screen and (max-width: 800px) {
    grid-template-areas:
      "logo"
      "main-nav"
      "side-nav";
    grid-template-rows: auto 1fr auto;
    grid-template-columns: auto;
  }

  height: 7rem;
  padding: 0 10rem;

  background: white;
  border-bottom: 1px solid $light-gray;
}

.logo {
  grid-area: logo;
  align-self: center;
  text-transform: uppercase;
  color: $main-color;
  text-decoration: none;

  h1 {
    font-size: 2rem;
  }
}

.main-nav {
  grid-area: main-nav;
  align-self: center;
  justify-self: center;
}

.secondary-nav {
  grid-area: side-nav;
  align-self: center;
  justify-self: center;

  #app {
    position: relative;
  }
}

.main-nav {
  ul li a {
    position: relative;
    box-shadow: inset 0 0 0 $main-color;
    padding: 1.65em 0;
    font-weight: 600;
    text-transform: uppercase;
    color: $gray-400;

    &:after, {
      content: "";
      position: absolute;
      left: 50%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      bottom: 2px;
      width: 70%;
      height: 3px;
      background: transparent;
      -webkit-transition: all .2s ease;
      transition: all .2s ease;
    }

    &:hover {
      color: $main-color;
    }

     &:hover:after {
      width: 100%;
      background: $main-color;
    }

    &.router-link-active {
      font-weight: 700;
      color: $main-color;

      &:after {
        width: 100%;
        background: $main-color;
      }
    }
  }
}

.main-nav, .secondary-nav {
  > ul {
    display: flex;
    justify-content: space-between;
    align-items: center;

    list-style-type: none;

    > li {

      &:not(:last-child) {
        margin-right: 5rem;
      }

      a {
        svg {
          height: 1.5rem;
          margin-top: 8px;
          width: auto;
        }
      }
    }
  }
}

</style>
