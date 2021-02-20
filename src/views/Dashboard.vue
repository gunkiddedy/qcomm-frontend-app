<template>
    <div id="app" class="aa">

        <!-- ############ HEADER APP ############# -->
   		<!-- <HeaderComponent /> -->

        <!-- ############ PROJECT SAYA ############# -->
        <div class="project flex items-center justify-between mt-10">
            <div class="project-title">
                <span class="text-2xl font-semibold leading-3">Project Saya</span>
            </div>
            <div class="btn-selengkapnya">
                <router-link to="/projects">
                    <button class="bg-red-500 hover:bg-green-700 focus:bg-green-700 focus:ring-4 focus:ring-green-200 focus:outline-none text-white rounded-full px-6 py-2 shadow flex items-center leading-thight">
                        <span class="block text-white font-semibold leading-none tracking-wider">Selengkapnya</span>
                        <svg class="w-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                </router-link>
            </div>
        </div>

        <!-- ############ PROJECT AKTIF TITLE SMALL ############# -->
        <div class="">
            <span class="text-md font-base">
                Project aktif yang sedang berjalan
            </span>
        </div>

        <!-- ############ IMAGE PROJEk ############# -->
        <div class="image-project mt-8 grid lg:grid-cols-4 gap-12">

            <!-- CARD -->
            <!-- hover:scale-110 -->
            <div @click="toProjectOverview" class="card rounded shadow-lg relative cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-100">
                <div class="img-card-img">
                    <img src="https://images.unsplash.com/photo-1582346992845-c963d5b0ba0d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="" class="object-contain w-full rounded-t">
                </div>
                <div class="title-card max-h-40 h-40 flex flex-col py-6 px-6 bg-white">
                    <div class="img-title text-lg font-semibold">
                        Mandiri Run 2021 Get
                    </div>
                    <div class="img-desc text-xs font-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quis.
                    </div>
                </div>
                <div class="footer-card bg-gray-100 px-6 rounded-b py-1">
                    <div class="footer-contain flex items-center justify-around">
                        <div class="flex-shrink-0 shadow rounded-full mr-2">
                            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80" alt="">
                        </div>
                        <div class="flex flex-col py-2">
                            <span class="text-sm font-semibold">
                                Bank Mandiri
                            </span>
                            <span class="text-xs act-time">
                                Aktifitas terakhir 1 jam yang lalu
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- CARD -->
            <div @click="toProjectOverview" class="card rounded shadow-lg relative cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-100">
                <div class="img-card-img">
                    <img src="https://images.unsplash.com/photo-1582346992845-c963d5b0ba0d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="" class="object-contain w-full rounded-t">
                </div>
                <div class="title-card max-h-40 h-40 flex flex-col py-6 px-6 bg-white">
                    <div class="img-title text-lg font-semibold">
                        Mandiri Run 2021 Get
                    </div>
                    <div class="img-desc text-xs font-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quis.
                    </div>
                </div>
                <div class="footer-card bg-gray-100 px-6 rounded-b py-1">
                    <div class="footer-contain flex items-center justify-around">
                        <div class="flex-shrink-0 shadow rounded-full mr-2">
                            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80" alt="">
                        </div>
                        <div class="flex flex-col py-2">
                            <span class="text-sm font-semibold">
                                Bank Mandiri
                            </span>
                            <span class="text-xs act-time">
                                Aktifitas terakhir 1 jam yang lalu
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- CARD -->
            <div @click="toProjectOverview" class="card rounded shadow-lg relative cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-100">
                <div class="img-card-img">
                    <img src="https://images.unsplash.com/photo-1582346992845-c963d5b0ba0d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="" class="object-contain w-full rounded-t">
                </div>
                <div class="title-card max-h-40 h-40 flex flex-col py-6 px-6 bg-white">
                    <div class="img-title text-lg font-semibold">
                        Mandiri Run 2021 Get
                    </div>
                    <div class="img-desc text-xs font-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quis.
                    </div>
                </div>
                <div class="footer-card bg-gray-100 px-6 rounded-b py-1">
                    <div class="footer-contain flex items-center justify-around">
                        <div class="flex-shrink-0 shadow rounded-full mr-2">
                            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80" alt="">
                        </div>
                        <div class="flex flex-col py-2">
                            <span class="text-sm font-semibold">
                                Bank Mandiri
                            </span>
                            <span class="text-xs act-time">
                                Aktifitas terakhir 1 jam yang lalu
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- CARD -->
            <div @click="toProjectOverview" class="card rounded shadow-lg relative cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-100">
                <div class="img-card-img">
                    <img src="https://images.unsplash.com/photo-1582346992845-c963d5b0ba0d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="" class="object-contain w-full rounded-t">
                </div>
                <div class="title-card max-h-40 h-40 flex flex-col py-6 px-6 bg-white">
                    <div class="img-title text-lg font-semibold">
                        Mandiri Run 2021 Get
                    </div>
                    <div class="img-desc text-xs font-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quis.
                    </div>
                </div>
                <div class="footer-card bg-gray-100 px-6 rounded-b py-1">
                    <div class="footer-contain flex items-center justify-around">
                        <div class="flex-shrink-0 shadow rounded-full mr-2">
                            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80" alt="">
                        </div>
                        <div class="flex flex-col py-2">
                            <span class="text-sm font-semibold">
                                Bank Mandiri
                            </span>
                            <span class="text-xs act-time">
                                Aktifitas terakhir 1 jam yang lalu
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <!-- ############ GARIS ############# -->
        <div class="garis border-t border-gray-300 mt-24 mb-8"></div>

        <!-- ############ SIDEBAR AND SEARCH ############# -->
        <div class="wrap-second-content grid lg:grid-cols-4 gap-12">
            <!-- SIDEBAR -->
            <MiniSidebarComponent />
            <!-- SECOND CONTENT -->
            <div class="lg:col-span-3 search">
                <!-- SEARCH -->
                <div class="search flex items-center w-full">
                    <button class="bg-red-400 hover:bg-green-700 focus:bg-green-700 focus:ring-4 focus:ring-green-200 focus:outline-none text-white flex items-center px-2 py-2 rounded-tl rounded-bl w-auto shadow leading-thight">
                        <span class="block mr-2 font-semibold text-md">Search</span>
                        <svg class="w-6 h-6 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <input 
                        type="search" 
                        class="w-full rounded-tr rounded-br py-2 px-2 shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="Masukkan kata kunci...">
                </div>

                <div class="task-list py-6 px-4 shadow-lg rounded bg-white mt-4">
                    <div class="flex lg:flex-row flex-col lg:items-center lg:justify-between w-full">
                        <div class="img-ket flex lg:flex-col">
                            <div class="shadow rounded-full">
                                <img class="h-8 w-8 rounded-full shadow" src="https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80" alt="">
                            </div>
                            <div class="shadow rounded-full lg:mt-5 lg:ml-0 ml-4 mt-0">
                                <img class="h-8 w-8 rounded-full shadow" src="https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80" alt="">
                            </div>
                        </div>
                        <div class="text flex flex-wrap w-3/4">
                            <router-link to="/project-task-detail">
                                <div class="judul mb-2 text-lg font-semibold text-gray-500">Mengirim Dokumen ke Klien</div>
                                <div class="isi text-gray-500 text-md cursor-pointer hover:text-blue-500">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, voluptatibus dignissimos? Maxime ullam porro ad? Repellendus voluptatum dignissimos porro laborum.
                                </div>
                            </router-link>
                        </div>
                        <div class="waktu flex lg:flex-col items-center lg:justify-center lg:mt-0 mt-2">
                            <div class="jam text-lg text-gray-300 font-semibold lg:mr-0 mr-2">12:12 PM</div>
                            <div class="bg-green-200 text-sm text-green-600 px-2 rounded-full">
                                3 responses
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- <div class="bg-indigo-100 -ml-36 -mr-36 h-20"></div> -->

        <!-- ###### FOOTER APP ####### -->
        <!-- <FooterComponent /> -->

	</div><!--end DIV app -->
</template>

<script>
// @ is an alias to /src
// import HeaderComponent from '@/components/HeaderComponent.vue';
// import FooterComponent from '@/components/FooterComponent.vue';
import MiniSidebarComponent from '@/components/MiniSidebarComponent.vue'
export default {
    components: {
        // HeaderComponent,
        // FooterComponent,
        MiniSidebarComponent
    },
    data() {
        return {
            profileClicked: false,
        }
    },
    methods: {
        toProjectOverview(){
            this.$router.push('/project-overview');
        }
    },
}
</script>