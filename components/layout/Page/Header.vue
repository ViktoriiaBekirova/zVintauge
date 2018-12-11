<template>
	<section class="header">
		<div class="header-content">
            <div class="header-content__title">
                <nuxt-link to="/">zVintauge</nuxt-link>
            </div>
            <p class="header-content__text">Collectible Vintage & Antique Photos</p>
        </div>
        <div class="header-nav">
            <div class="header-nav__title" v-show="$mq !== 'desktop'">Menu</div>
            <div class="icon" v-show="$mq !== 'desktop'">
                <transition name="fade-scale" mode="out-in">
                    <div @click="openMenu" v-if="menuMobile === false" class="icon--menu" key="1"></div>
                    <div @click="closeMenu" v-if="menuMobile === true" class="icon--close-menu" key="2"></div>
                </transition>
            </div>
            <ul class="menu" ref="menu">
                <li>
                    <nuxt-link to="/">Home</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/">Gallery</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/">Blog</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/">About</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/">Contact</nuxt-link>
                </li>
            </ul>
        </div>
	</section>
</template>

<script>

    export default {
	    data() {
	        return {
                menuMobile: false
            }
        },
        methods: {
            openMenu() {
                this.menuMobile = true
                this.$refs.menu.classList.add('open')
            },
            closeMenu() {
                this.menuMobile = false
                this.$refs.menu.classList.remove('open')
            }
        }
	}
</script>

