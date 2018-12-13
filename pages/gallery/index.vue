<template>
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
            </div>
        </div>
    </section>
</template>

<script>
    import axios from '~/static/api/axios'

    export default {
        data () {
            return {
                gallery: null
            }
        },
        mounted () {
            axios.get('/api/gallery.json')
                .then(response => {
                    this.gallery = response.data
                })
                .catch(e => {
                    console.log(e)
                })
        }
    }
</script>