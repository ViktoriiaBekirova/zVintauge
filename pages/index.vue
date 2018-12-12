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
            <div class="gallery-container__block" v-for="(item, index) in gallery" :key="`item_${index}`">
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
    <section class="philosophy-section">
      <div class="wrapper">
        <div class="philosophy">
          <h2 class="philosophy__header">Our Philosophy</h2>
          <div class="philosophy__content">
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
              Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
              nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at
              vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril.
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
              tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
              quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
              consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto
              odio dignissim qui blandit praesent luptatum zzril.
            </p>
          </div>
          <div class="philosophy__quote">
            <p>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet vultatup duista.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="blog-section">
      <div class="blog" v-for="(item, i) in blog" :key="`item_${i}`">
        <div class="blog-content">
          <div class="blog-content__img">
            <img :src="item.img.src" :alt="item.img.alt">
          </div>
          <div class="blog-content__text">
            <h3>{{item.header}}</h3>
            <p>{{item.text}}</p>
            <v-button class="blog-content__text_button" text="read more" link="/"></v-button>
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
            gallery: null,
            blog: null
        }
    },
    components: {
        mobileSlider
    },
    mounted () {
        axios.get('https://api.myjson.com/bins/dw34k')
            .then(response => {
                this.gallery = response.data.slice(0,6)
                // console.log(this.gallery)
            })
        axios.get('https://api.myjson.com/bins/17xmb8')
            .then(response => {
                this.blog = response.data.slice(0,3)
            })
            .catch(e => {
                console.log(e)
            })
    }
}
</script>



