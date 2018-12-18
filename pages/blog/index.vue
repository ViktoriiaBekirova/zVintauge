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

                    <div class="btn" @click="readMore(i)" v-show="showedReadmore !== i">
                        <span class="btn__text">read more</span>
                    </div>

                    <transition name="fade">
                        <div class="show-more" v-show="showedReadmore === i">
                            <div class="blog-page__content_quote"><p>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet vultatup duista.</p></div>
                            <h2>{{item.header1}}</h2>
                            <p>{{item.text1}}</p>
                            <h2>{{item.header2}}</h2>
                            <p>{{item.text2}}</p>
                            <h2>{{item.header3}}</h2>
                            <p>{{item.text3}}</p>
                            <p>{{item.text_about}}</p>
                        </div>
                    </transition>

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
                blog: null,
                showedReadmore: -1
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
        },
        methods: {
            readMore(index) {
                this.showedReadmore = index
            }
        }
    }
</script>