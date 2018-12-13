<template>
	<section class="footer">
		<div class="wrapper">
			<div class="footer-content">
				<ul class="footer-content__nav">
					<li>
						<nuxt-link to="/">Home</nuxt-link>
					</li>
					<li>
						<nuxt-link to="/gallery">Gallery</nuxt-link>
					</li>
					<li>
						<nuxt-link to="/blog">Blog</nuxt-link>
					</li>
					<li>
						<nuxt-link to="/about">About</nuxt-link>
					</li>
					<li>
						<nuxt-link to="/contact">Contact</nuxt-link>
					</li>
				</ul>
				<div class="footer-content__contact">
					<p class="contact-us">Contact us:</p>
					<div class="contact-us__content">
						<a class="mail"  href="mailto:zvintage@gmail.com">zvintage@gmail.com</a>
						<a class="back-call" href="tel:99999999999">99999999999</a>
					</div>
				</div>
			</div>
			<div class="footer-social">
				<social class="socials"></social>
				<span class="ergo">© 2006—{{date}} "Copyright Designed"</span>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
        data () {
            return {
                date: null
            }
        },
        mounted () {
			this.Date()
        },
        methods: {
            Date: function () {
                let dateFull = new Date()
                this.date = dateFull.getFullYear()
            },
        }
	}
</script>
