<template>
  <div>
    <mobile-slider></mobile-slider>
    <section class="about-section">
      <div class="wrapper">
        <div class="about">
          <h2 class="about__header">About us</h2>
          <p class="about__content">Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet,
            consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan leo vel tempor.
            Sit amet cursus nisl aliquam. Aliquam et elit eu nunc rhoncus viverra quis at felis. Sed do</p>
        </div>
      </div>
    </section>
    <section class="gallery-section">
      <div class="gallery">
        <div class="wrapper">
          <div class="gallery-container">
            <div class="gallery-container__block" v-for="(item, index) in gallery" :key="index">
              <nuxt-link :to="item.link">
                <div class="gallery-container__block_img">
                  <img :src="item.img.src" :alt="item.img.alt">
                </div>
                <div class="gallery-container__block_info">
                  <h3>{{item.header}}</h3>
                  <span>{{item.tag1 + '/' + item.tag2}}</span>
                </div>
              </nuxt-link>
            </div>
          </div>
          <div class="gallery-link">
            <v-button text="see more" link="/"></v-button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import axios from '~/api/axios'
import mobileSlider from '~/components/ui/MobileSlider.vue'

export default {
    data () {
        return {
            gallery: null
        }
    },
    components: {
        mobileSlider
    },
    mounted () {
        axios.get('https://api.myjson.com/bins/6qo5g')
            .then(response => {
                this.gallery = response.data
                // console.log(this.gallery)
            })
            .catch(e => {
                console.log(e)
            })
    }
}
</script>



