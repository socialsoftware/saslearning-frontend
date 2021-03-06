<template>
  <div
    v-if="loggedUser"
    class="dashboard">
    <DashboardSection
      :create-to="{name: 'post-document'}"
      title="dashboard.activities">
      <Card
        v-for="activity in activities.slice(0, elements)"
        :key="activity.id"
        :title="activity.title"
        :description="activity.document.title">
        <div class="card-content">
          <p class="label">
            <strong>Meta model:</strong>
            <template v-if="activity.metaModel">
              {{ activity.metaModel.title }}
            </template>
            <template v-else>
              {{ $t('dashboard.metamodel.undefined') }}
            </template>
          </p>
        </div>

        <div class="card-footer">
          <ul v-if="activity.team">
            <li
              v-for="member in activity.team.members"
              :key="member.name"
              class="avatar mini">
              <figure v-if="member.avatar">
                <img
                  v-if="member.avatar"
                  :src="member.avatar"
                  :alt="member.name">
              </figure>
              <strong>{{ member.name.charAt(0) }}</strong>
            </li>
          </ul>
          <ul v-else>
            <li class="avatar mini">
              <figure v-if="loggedUser.avatar">
                <img
                  v-if="loggedUser.avatar"
                  :src="loggedUser.avatar"
                  :alt="loggedUser.display_name">
              </figure>
              <strong>{{ loggedUser.display_name.charAt(0) }}</strong>
            </li>
          </ul>
          <div class="meter">
            <span
              :class="barColor(activity.progress)"
              :style="{width: activity.progress + '%'}" />
          </div>
        </div>
      </Card>
      <footer v-if="activities.length > elements">
        <a href="#">
          {{ $t('dashboard.view-all') }}
        </a>
      </footer>
    </DashboardSection>

    <DashboardSection
      :create-to="{name: 'post-document'}"
      title="dashboard.teams">
      <Card
        v-for="team in teams.slice(0, elements)"
        :key="team.id"
        :title="team.name">
        <div class="card-content">
          <p class="label">
            {{ $tc('dashboard.team.activities', team.activities, { count: team.activities }) }}
          </p>
        </div>
        <div class="card-footer">
          <ul v-if="team.members">
            <li
              v-for="member in team.members"
              :key="member.name"
              class="avatar mini">
              <figure v-if="member.avatar">
                <img
                  v-if="member.avatar"
                  :src="member.avatar"
                  :alt="member.name">
              </figure>
              <strong>{{ member.name.charAt(0) }}</strong>
            </li>
          </ul>
          <ul v-else>
            <li class="avatar mini">
              <figure v-if="loggedUser.avatar">
                <img
                  v-if="loggedUser.avatar"
                  :src="loggedUser.avatar"
                  :alt="loggedUser.display_name">
              </figure>
              <strong>{{ loggedUser.display_name.charAt(0) }}</strong>
            </li>
          </ul>
        </div>
      </Card>
      <footer v-if="teams.length > elements">
        <a href="#">
          {{ $t('dashboard.view-all') }}
        </a>
      </footer>
    </DashboardSection>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import Card from '@/components/utils/Card'
import DashboardSection from '@/components/dashboard/DashboardSection'

export default {
  components: {
    Card,
    DashboardSection
  },
  data: function () {
    return {
      elements: 3
    }
  },
  computed: {
    ...mapGetters([
      'activities',
      'loggedUser',
      'teams'
    ])
  },
  mounted () {
    this.fetchActivities()

    this.$nextTick(() => {
      window.addEventListener('resize', this.elementsToRender)
      // Init
      this.getWindowWidth()
    })
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.elementsToRender)
  },
  methods: {
    ...mapActions([
      'fetchActivities'
    ]),
    activitiesToCards (activities) {
      return activities.slice(0, 3).map(activity => {
        activity.description = activity.document.title
        return activity
      })
    },
    elementsToRender () {
      const width = document.documentElement.clientWidth

      if (width <= 1098) {
        this.elements = 1
      } else if (width <= 1400) {
        this.elements = 2
      } else {
        this.elements = 3
      }
    },
    getWindowWidth (event) {
      this.windowWidth = document.documentElement.clientWidth
    },
    barColor (progress) {
      if (progress > 70) {
        return 'orange'
      } else if (progress > 50) {
        return 'yellow'
      } else {
        return 'orange'
      }
    }
  }
}
</script>

<style lang="scss">
.dashboard {
  grid-area: dashboard;
  min-height: 0;
  min-width: 0;

  .dashboard-section {
    display: grid;
    grid-template-areas:
    "header"
    "content"
    "footer";
    grid-template-columns: 100%;
    grid-gap: 3rem;

    overflow: hidden;
    min-width: 0;

    @media only screen and (min-width: 1098px) {
    grid-template-areas:
      "header header"
      "content content"
      "footer footer";
      grid-template-columns: repeat(2, 50%);
    }

    @media only screen and (min-width: 1400px) {
    grid-template-areas:
      "header header header"
      "content content content"
      "footer footer footer";
    grid-template-columns: repeat(3, 33%);
    }

    margin-bottom: 10rem;

    .label {
      color: $gray-400;
    }

    header {
      grid-area: header;
      display: flex;
      flex-grow: 1;
    }

    footer {
      grid-area: footer;

      a {
        display: block;
        text-align: center;
      }
    }
  }
}

.button-svg {
    border-radius: 50%;
    height: 2.5rem;
    width: 2.5rem;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 1rem;

  svg {
    height: 1.5rem;
    fill: $main-color;
  }

  &:hover {
    svg {
      fill: white;
    }
  }
}

.card-content, .card-footer {
  ul {
    display: flex;
    margin: 1rem 0 3rem 0;
    padding: 0;

    li {
      margin-right: 0.5rem;
    }
  }
}

.card-footer {
  ul {
    padding: 0 2.5rem;
  }
}

.meter {
  height: 0.25rem;  /* Can be anything */

  span {
    display: block;
    height: 100%;

    border-bottom-right-radius: 3px; //THIS SHOULD ONLY BE TRUE WHEN WIDTH = 100%
    border-bottom-left-radius: 3px;
    overflow: hidden;

    &.green {
      background-color: $green;
    }

    &.yellow {
      background-color: $yellow;
    }

    &.orange {
      background-color :$orange;
    }
  }
}
</style>
