<template>
	<div
		id="app" 
		class="app-route overflow-x-hidden bg-indigo-50 min-h-screen flex flex-col max-w-screen-2xl m-auto">
		<HeaderComponent />
		<div class="px-8">
			<transition name="fade">
				<router-view></router-view>
			</transition>
		</div>
		<FooterComponent />
	</div>
</template>

<script>

// window.onbeforeunload = function(){
//     return "Are you sure you want to close the window?";
// }

import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
export default {
	components: {
		HeaderComponent,
		FooterComponent
	},
	mounted() {
		console.log('api key', process.env.API_KEY)
	}
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