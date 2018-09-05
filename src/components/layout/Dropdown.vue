<template>
  <div
    :id="id"
    @click="toggle($event)">
    <slot name="menu"/>
    <div
      :class="{ active: show }"
      class="menu dropdown" >
      <ul>
        <slot name="options"/>
      </ul>
    </div>
    <div
      v-if="withUpperArrow"
      class="upper-arrow"/>
  </div>
</template>

<script>
export default {
  props: {
    withUpperArrow: {
      type: Boolean,
      default: true
    },
    id: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    toggle (e) {
      this.show = !this.show
      if (this.show) {
        setTimeout(() => window.addEventListener('click', this.clickOutEvent), 10)
      }
    },
    close () {
      this.show = false
    },
    clickOutEvent (e) {
      const el = this.$el.children[1]
      if (e.target !== el && !el.contains(e.target)) {
        this.close()
      }
      window.removeEventListener('click', this.clickOutEvent)
    }
  },
  events: {
    'hide::dropdown' () {
      this.show = false
    }
  }
}
</script>

<style lang="scss">
.dropdown{
  position: absolute;
  right: 0;
  left: 50%;
  transform: translateX(-80%);
  margin: 0;
  padding: 0;
  background: #FFF;
  -webkit-box-shadow: 0px 7px 40px 0px rgba(46,50,66,0.3);
  box-shadow: 0px 7px 40px 0px rgba(46,50,66,0.3);
  border-radius: 2px;
  list-style-type: none;
  text-align: left;
  min-width: 112px;
  transition: all .4s ease-in-out;
  z-index: 1;
  ul{
    padding: 0;
    list-style: none;
  }
  li{
    margin: 0;
    white-space: nowrap;
    font-size: 1.6rem;
    a{
      display: block;
      padding: 0 20px;
      height: 52px;
      line-height: 52px;
      text-decoration: none;
      color: $dark;
      border: 0;
      -webkit-transition: border .2s ease;
      transition: border .2s ease;
      &:hover{
        background-color: $main-color;
        color: white;
        border-bottom: 0;
      }
    }
  }
  &.active{
    opacity: 1;
    visibility: visible;
    & + .upper-arrow{
      opacity: 1;
      visibility: visible;
    }
  }
  &,
  & + .upper-arrow{
    margin-top: 3.5rem;
  }
}

.dropdown,
.upper-arrow{
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  pointer-events: all;
}

.upper-arrow{
  width: 30px;
  height: 12px;
  left: 50%;
  transform: translateY(-100%) translateX(-50%);
  position: absolute;
  z-index: 2;
  overflow: hidden;
  transition: all .4s ease-in-out;
  &::before{
    content: "";
    width: 12px;
    height: 12px;
    background: white;
    position: absolute;
    left: 50%;
    transform: translateX(-50%) translateY(50%) rotate(45deg);
    border-radius: 3px 0 0 0;
    box-shadow: 0 0 3px 0 rgba(0,0,0,0.10), 0 5px 10px 0 rgba(0,0,0,0.15);
  }
}

#user .dropdown{
  min-width: 200px
}

table td{
  .dropdown{
    left: auto;
    right: 0px;
    transform: translateX(10px) translateY(100%);
    bottom: 0;
    & + .upper-arrow{
      left: auto;
      right: 16px;
      bottom: 0px;
      transform: none;
    }
  }
}

</style>
