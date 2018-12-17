<template>
    <div class="wrapper">
        <section class="blog-info">
            <div class="blog-page" v-for="(item, i) in blog" :key="`item_${i}`">
                <div class="blog-page__header">
                    <span class="blog-page__header_time">{{item.time}}</span>
                    <h1 class="blog-page__header_title">{{item.header_blog}}</h1>
                    <span class="blog-page__header_tags">{{item.tags}}</span>
                </div>
                <div class="blog-page__img">
                    <img :src="item.img.src" :alt="item.img.alt">
                </div>
                <div class="blog-page__content">
                    <p class="blog-page__content_text">{{item.text}}</p>
                    <v-button text="read more" link="/about"></v-button>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import axios from '~/static/api/axios'

    export default {
        data () {
            return {
                blog: null
            }
        },
        mounted () {
            axios.get('/api/blog.json')
                .then(response => {
                    this.blog = response.data
                })
                .catch(e => {
                    console.log(e)
                })
        }
    }
</script>