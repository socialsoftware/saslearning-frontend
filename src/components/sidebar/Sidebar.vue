<template>
  <div class="sidebar">
    <div class="details card shadow">
      <section>
        <div class="avatar">
          <figure>
            <img
              v-if="profile.avatar"
              :src="profile.avatar"
              :alt="profile.name">
          </figure>
          <strong>{{ profile.name.charAt(0) }}</strong>
        </div>
        <h3>{{ profile.name }}</h3>
      </section>

      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    profile: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.sidebar {
  grid-area: sidebar;
  min-width: 30rem;
  padding-right: 5rem;

  .details {
    padding: 1rem 3rem;

    section {
      margin: 0;
      padding: 3rem 0;
      box-sizing: border-box;
      border-bottom: 1px solid #D3DAE0;

      h3 {
        margin-top: 1rem;
      }

      .label {
        margin-bottom: 3rem;
      }

      p {
        margin: 0
      }
    }

    section:first-of-type {
      text-align: center;
    }

    section:last-of-type {
      border-bottom: 0;
    }
  }

}

.card.shadow {
  background: white;
  box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.1);
  border-radius: 3px;
}

.avatar {
  width: 80px;
  height: 80px;
  position: relative;
  border-radius: 100%;
  overflow: hidden;
  display: inline-block;
  margin: 0;
  background: $violet-600;

  &.mini {
    width: 3rem;
    height: 3rem;

    figure img {
      width: 100%;
      height: 100%;
    }

    strong {
      font-size: 2rem;
    }
  }

  figure {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 2;
    border-radius: 100%;
  }

  strong {
    line-height: 1;
    font-size: 4.0rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    color: white;
  }
}

</style>
