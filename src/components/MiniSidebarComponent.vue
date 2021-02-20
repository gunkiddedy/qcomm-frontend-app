<template>
    <div class="sidebar-mini bg-white rounded-lg px-0 shadow-lg max-h-60">
        <router-link 
            to="/project-new-task" 
            class="hover:bg-blue-100 sidebar-contain flex items-center justify-start px-4 py-3">
            <div class="icon mr-2">
                <svg class="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
            </div>
            <div class="title text-sm font-semibold">
                Buat Task Baru
            </div>
        </router-link>

        <!-- <div class="garis w-full border-t my-2"></div> -->

        <router-link to="/projects" class="hover:bg-blue-100 sidebar-contain flex items-center justify-start px-4 py-3 border-t">
            <div class="icon mr-2">
                <svg class="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
            </div>
            <div class="title text-sm font-semibold">
                Task Aktif
            </div>
        </router-link>

        <!-- <div class="garis w-full border-t my-2"></div> -->

        <router-link to="/project-task" class="hover:bg-blue-100 sidebar-contain flex items-center justify-start px-4 py-3 border-t">
            <div class="icon mr-2">
                <svg class="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            </div>
            <div class="title text-sm font-semibold">
                Task Saya
            </div>
        </router-link>

        <!-- <div class="garis w-full border-t my-2"></div> -->

        <router-link to="/project-overview" class="hover:bg-blue-100 sidebar-contain flex items-center justify-start px-4 py-3 border-t">
            <div class="icon mr-2">
                <svg class="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
            </div>
            <div class="title text-sm font-semibold text-gray-700">
                Semua Task
            </div>
        </router-link>

        <!-- <div class="garis w-full border-t my-2"></div> -->

        <router-link to="/project-document" class="hover:bg-blue-100 sidebar-contain flex items-center justify-start px-4 py-3 border-t">
            <div class="icon mr-2">
                <svg class="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
            </div>
            <div class="title text-sm font-semibold text-gray-700">
                Arsip Task
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'MiniSidebarComponent',
}
</script>

<style scoped>
.router-link-exact-active {
  /* background-color: #1947ee; */
  /* color: #1e30b8; */
  color: rgba(37, 99, 235);
  cursor: pointer;
  /*border-radius: 0.5rem;*/
}
</style>