<template>
<section class="ui-section" :class="computedClass">
    <div class="ui-section__title">{{ title }}</div>
    <div class="ui-section__body">
        <slot/>
    </div>

    <slot name="model"></slot>
</section>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: 'UI element'
		},
		mod: {
			type: String,
			default: ''
		}
	},
	computed: {
		computedClass () {
			if (this.mod) {
				return `ui-section--${this.mod}`
			}
		}
	}
}
</script>
