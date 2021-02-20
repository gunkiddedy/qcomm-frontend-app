<template>
    <div id="app" class="app">

        <!-- ############ HEADER APP ############# -->
   		<!-- <HeaderComponent /> -->

        <div class="main lg:px-0 md:px-12">
            <!-- ############ PROJECT SAYA ############# -->
            <div class="project flex items-center justify-between mt-10">
                <div class="project-title">
                    <span class="text-2xl font-semibold leading-3">Daftar Project</span>
                </div>
                <div class="btn-selengkapnya">
                    <router-link to="/project-form">
                        <button class="bg-red-500 hover:bg-green-700 focus:bg-green-700 focus:ring-4 focus:ring-green-200 focus:outline-none rounded-full px-6 py-2 shadow flex items-center leading-thight">
                            <svg class="w-4 mt-1 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                            <span class="block text-white font-semibold leading-none tracking-wider">Tambah project</span>
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

            <div class="loader-page flex justify-center" v-if="loaderPage">
                <Loader />
            </div>

            <!-- ############ IMAGE PROJEk ############# -->
            <div class="image-project mt-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-12 gap-4">

                <div
                    v-for="(item, i) in projectList"
                    :key="i" 
                    @click="goToProjectOverview"
                    class="card rounded shadow-lg relative cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-100">
                    <!-- IMAGE CARD -->
                    <div class="img-card-img">
                        <img src="https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80" alt="" class="object-contain w-full rounded-t">
                    </div>
                    <!-- TEXT CARD -->
                    <div class="title-card max-h-40 h-40 bg-white flex flex-col py-6 px-6">
                        <div class="img-title text-lg font-semibold">
                            {{ item.title }}
                        </div>
                        <div class="img-desc text-xs font-base">
                            {{ item.description }}
                        </div>
                    </div>
                    <!-- FOOTER CARD -->
                    <div class="footer-card bg-gray-100 px-6 rounded-b py-1">
                        <div class="footer-contain flex items-center justify-around">
                            <div class="flex-shrink-0 shadow rounded-full mr-2">
                                <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80" alt="">
                            </div>
                            <div class="flex flex-col py-2">
                                <span class="text-sm font-semibold">
                                    {{ item.title }}
                                </span>
                                <span class="text-xs act-time">
                                    {{ item.updatedAt }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                

            </div>

            <!-- ########## PAGINATION ########## -->
            <div class="pagination flex justify-center my-8">
                <nav class="relative z-0 inline-flex shadow-sm space-x-1" aria-label="Pagination">
                    <a href="#" class="relative inline-flex items-center justify-center px-2 py-2  rounded bg-white text-purple-500 hover:bg-gray-50 font-bold w-10">
                        <span class="sr-only">Previous</span>
                        <!-- Heroicon name: chevron-left -->
                        <svg class="w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"></path></svg>
                    </a>
                    <a href="#" class="relative inline-flex items-center px-4 py-3 bg-yellow-500 text-sm text-white hover:bg-gray-50 font-bold  rounded">
                    1
                    </a>
                    <a href="#" class="relative inline-flex items-center px-4 py-2 bg-white text-sm text-purple-700 hover:bg-gray-50 font-bold  rounded">
                    2
                    </a>
                    <span class="relative inline-flex items-center px-4 py-2 bg-white text-sm text-purple-700 font-bold  rounded">
                    ...
                    </span>
                    <a href="#" class="relative inline-flex items-center px-4 py-2 bg-white text-sm text-purple-700 hover:bg-gray-50 font-bold  rounded">
                    12
                    </a>
                    <a href="#" class="relative inline-flex items-center justify-center px-2 py-2  rounded bg-white text-purple-500 hover:bg-gray-50 font-bold w-10">
                        <span class="sr-only">Next</span>
                        <!-- Heroicon name: chevron-right -->
                        <svg class="w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
                    </a>
                </nav>
            </div>

        </div>


        <!-- ###### FOOTER APP ####### -->
        <!-- <FooterComponent /> -->

	</div><!--end DIV app -->
</template>

<script>
const appToken = 'asdsada12313';
import axios from 'axios'
import Loader from '@/components/Loader'
export default {
    components: { Loader },
    data() {
        return {
            loaderPage: false,
            projectList: []
        }
    },
    mounted() {
        this.getProjects();
    },
    methods: {
        getProjects(){
            this.loaderPage = true;
            axios.get('/projects', {
                headers: {
                    'Authorization': 'Bearer ' + appToken
                }
            })
            .then((response) => {
                this.loaderPage = false;
                this.projectList = response.data.data;
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        },
        goToProjectOverview(){
            this.$router.push('/project-overview')
        }
    },
}
</script>