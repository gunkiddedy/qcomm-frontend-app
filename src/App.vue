<template>
	<div
		id="app" 
		class="lg:px-36 px-4 app-route overflow-x-hidden" 
		:class="{'bg-indigo-50': !isLoginPage, 'bg-purple-700': isLoginPage}">

		<div v-if="!isLoginPage">
			<HeaderComponent />
		</div>

		<transition name="fade">
			<router-view></router-view>
		</transition>

		<span hidden>{{ checkRoute }}</span>

		<div v-if="!isLoginPage">
			<FooterComponent />
		</div>

	</div>
</template>

<script>

window.onbeforeunload = function(){
    return "Are you sure you want to close the window?";
}

import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
export default {
	components: {
        HeaderComponent,
        FooterComponent
    },
	data() {
		return {
			isLoginPage: false,
			// transitionName: 'fade',
		}
	},
	// watch: {
	// 	'$route' (to, from) {
	// 		const toDepth = to.path.split('/').length
	// 		const fromDepth = from.path.split('/').length
	// 		this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
	// 	}
	// },
	computed: {
		checkRoute(){
			if(this.$route.name =='Login'){
				this.isLoginPage = true;
			}else{
				this.isLoginPage = false;
			}
		}
	},
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition-duration: 0.3s;
	transition-property: opacity;
	transition-timing-function: ease;
}
.fade-enter, 
.fade-leave-active {
  	opacity: 0;
}
/* .slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
} */
</style>