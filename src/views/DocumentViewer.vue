<template>
  <div
    v-if="document"
    class="main-content">
    <div class="content-header">
      <div class="title">
        <h1 class="svg-container">
          {{ document.title }}
          <span>
            <a :href="document.url">
              <svg
                class="svg-icon"
                xmlns:dc="http://purl.org/dc/elements/1.1/"
                xmlns:cc="http://creativecommons.org/ns#"
                xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                xmlns:svg="http://www.w3.org/2000/svg"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 100 125">
                <g transform="translate(0,-952.36218)">
                  <path
                    d="m 42.928734,1037.7174 c -7.798053,7.798 -20.486102,7.7981 -28.284061,10e-5 -7.7979466,-7.7979 -7.7978487,-20.486 1.81e-4,-28.2841 l 14.142147,-14.14206 c 7.798044,-7.79805 20.486131,-7.79814 28.284068,-2e-4 a 3.000255,3.0003 45 1 1 -4.242647,4.24264 c -5.520926,-5.52093 -14.277823,-5.52088 -19.798844,1.4e-4 l -14.14214,14.14208 c -5.521005,5.5211 -5.521061,14.278 -1.45e-4,19.7989 5.520971,5.521 14.277862,5.5209 19.798826,-2e-4 l 12.727959,-12.7278 a 3.000255,3.0003 45 1 1 4.242589,4.2426 l -12.727933,12.7279 z M 71.21297,1009.433 c -7.798027,7.7981 -20.486076,7.7982 -28.284036,3e-4 a 3.000255,3.0003 45 1 1 4.242645,-4.2427 c 5.520921,5.5209 14.277812,5.5209 19.798852,-10e-5 L 81.11256,991.04836 c 5.521035,-5.52099 5.521087,-14.2779 1.36e-4,-19.79885 -5.52093,-5.52093 -14.277825,-5.52088 -19.798845,1.4e-4 l -12.727925,12.72791 a 3.000255,3.0003 45 1 1 -4.242577,-4.24257 l 12.727923,-12.72792 c 7.798044,-7.79805 20.48613,-7.79814 28.284066,-2.1e-4 7.797987,7.798 7.797846,20.48604 -1.86e-4,28.28411 L 71.21297,1009.433 z"
                    style="text-indent:0;text-transform:none;direction:ltr;block-progression:tb;baseline-shift:baseline;color:#000000;enable-background:accumulate;"
                    fill="#000000"
                    fill-opacity="1"
                    stroke="none"
                    marker="none"
                    visibility="visible"
                    display="inline"
                    overflow="visible" />
                </g>
              </svg>
            </a>
          </span>
        </h1>
        <p>{{ `${$t('document.by')} ${arrayToText(document.authors)}` }}</p>
      </div>
    </div>

    <div
      class="content"
      v-html="decode(document.content)" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapGetters([
      'document'
    ])
  },
  created () {
    this.fetchDocument({ id: this.id })
  },
  methods: {
    ...mapActions([
      'fetchDocument'
    ]),
    arrayToText (array) {
      if (array.length === 1) {
        return array[0]
      } else {
        return `${array.slice(0, array.length - 1).join(', ')} ${this.$t('and')} ${array.slice(array.length - 1)}`
      }
    },
    decode (string) {
      const encoded = Buffer.from(string, 'base64')
      return encoded.toString()
    }
  }
}
</script>

<style lang="scss">
.svg-container {
  display: flex;
  align-items: center;

  a:hover {
    .svg-icon g path {
        fill: $main-color;
      }
    }

  .svg-icon {
    margin-left: 1rem;
    height: 3rem;
    width: 3rem;

    g path {
      fill: $gray-400;
    }
  }
  // svg {
  //   fill: $gray-400;
  //   height: 3rem;
  //   width: auto;
  //   margin-top: 1rem;
  //   margin-left: 1rem;
  // }
}
</style>
