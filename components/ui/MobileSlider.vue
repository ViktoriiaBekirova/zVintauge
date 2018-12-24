<template>
		<div class="swiper-container" v-swiper:mySwiper="swiperOption">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<img src="/img/slide1.jpg">
				</div>
				<div class="swiper-slide">
					<img src="/img/slide2.jpg">
				</div>
				<div class="swiper-slide">
					<img src="/img/slide3.jpg">
				</div>
			</div>
			<!-- Add Arrows -->
			<div class="swiper-button-next"></div>
			<div class="swiper-button-prev"></div>
		</div>
</template>

<script>
	export default {
        data() {
            return {
                swiperOption: {
                    loop: true,
                    effect: 'fade',
                    keyboard: {
                        enabled: true,
                    },
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    on: {
                        slideChange () {
                            console.log('onSlideChangeEnd', this)
                        },
                        tap () {
                            console.log('onTap', this)
                        }
                    }
                }
			}
        }
    }
</script>
