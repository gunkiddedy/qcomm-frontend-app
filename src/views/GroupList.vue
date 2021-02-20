<template>
    <div id="app" class="group-list">

        <!-- ############ HEADER APP ############# -->
   		<!-- <HeaderComponent /> -->

        <!-- ############ PROJECT TITLE ############# -->
        <div class="project flex lg:flex-row flex-col items-center justify-between mt-10">
            <div class="flex lg:flex-row flex-col lg:items-center justify-start">
                <div class="img-gojek rounded-full mr-4 bg-purple-700 w-16 h-16 flex items-center justify-center">
                    <svg class="w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                </div>
                <div class="flex flex-col">
                    <div class="project-title lg:mt-0 mt-2">
                        <span class="text-2xl font-semibold leading-3">Group</span>
                    </div>
                    <div class="">
                        <span class="text-md font-semibold text-gray-400">
                            Group user untuk project atau broadcast
                        </span>
                    </div>
                </div>
            </div>

            <div class="flex lg:flex-row flex-col lg:items-center justify-start">
                <div class="btn-selengkapnya lg:mt-0 mt-2">
                    <button
                        @click="goToGroupForm" 
                        class="bg-red-500 hover:bg-green-700 focus:bg-green-700 focus:ring-4 focus:ring-green-200 focus:outline-none rounded px-6 py-2 shadow flex items-center leading-thight">
                        <svg class="w-4 mt-1 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                        <span class="block text-white font-semibold">Tambah</span>
                    </button>
                </div>
                <div class="search flex items-center w-full lg:my-8 my-2 lg:px-2">
                    <button class="bg-red-500 hover:bg-green-700 focus:bg-green-700 focus:ring-4 focus:ring-green-200 focus:outline-none text-white flex items-center px-4 py-2 rounded-tl rounded-bl w-1/3 shadow leading-thight">
                        <span class="block mr-2 font-semibold text-md">Search</span>
                        <svg class="w-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <input 
                        type="search" 
                        class="w-full rounded-tr rounded-br py-2 shadow-sm focus:outline-none focus:shadow-inner px-2"
                        placeholder="Masukkan kata kunci...">
                </div>
            </div>
        </div>

        <div class="loader-page flex justify-center" v-if="loaderPage">
            <Loader />
        </div>

        <!-- ############ ADVOCASY ############# -->
        <div class="form-project mt-8">
            <div class="w-full my-4">
                <!-- LOOP -->
                <div 
                    v-for="(item, i) in groupList"
                    :key="i"
                    class="main-wrap mb-6 bg-white shadow-lg rounded">
                    <div 
                        class="title-wrap px-4 py-8 flex lg:flex-row flex-col items-start justify-between">
                        <div class="flex flex-col title-list">
                            <!-- TITLE -->
                            <div class="title text-lg text-gray-500 font-semibold">
                                {{ item.title }}
                            </div>
                            <!-- DESCRIPTION -->
                            <div class="sub text-gray-400 text-sm font-semibold">
                                {{ item.description }} 
                            </div>
                            
                            <!-- 3 BUTTONS -->
                            <div class="btn flex lg:flex-row flex-col lg:items-center justify-start my-4">
                                <button class="bg-red-500 hover:bg-green-700 focus:bg-green-700 focus:ring-4 focus:ring-green-200 focus:outline-none px-4 py-1 text-white rounded lg:mr-2 mr-0 lg:my-0 my-1">
                                    Modify
                                </button>
                                <button class="bg-red-500 hover:bg-green-700 focus:bg-green-700 focus:ring-4 focus:ring-green-200 focus:outline-none px-4 py-1 text-white rounded lg:mr-2 mr-0 lg:my-0 my-1">
                                    Archive
                                </button>
                                <button class="bg-purple-500 hover:bg-purple-700 focus:bg-purple-700 focus:ring-4 focus:ring-purple-300 focus:outline-none px-4 py-1 text-white rounded lg:mr-2 mr-0 lg:my-0 my-1">
                                    Kirim Broadcast
                                </button>
                            </div>
                        </div>
                        <!-- TIME -->
                        <div class="w-1/4">
                            <span class="waktu bg-green-200 text-green-600 text-xs rounded-full px-4">
                                {{ item.createdAt }}
                            </span>
                        </div>
                    </div>
                    <!-- CLICK MEMBER -->
                    <div @click="clickMember" class="jumlah-projek flex items-center justify-between px-4 py-6 cursor-pointer border-t">
                        <div class="jum-projek flex items-center justify-start">
                            <div class="icon">
                                <svg class="w-6 h-6 text-yellow-600" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                            </div>
                            <div class="jumprojek ml-2 text-yellow-600 font-semibold">
                                4 Members
                            </div>
                        </div>
                        <div class="icon">
                            <svg class="w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        </div>
                    </div>
                    <!-- MEMBER SHOW -->
                    <transition name="slide">
                        <div class="isi grid grid-cols-2 border-t" v-if="showMember">

                            <div class="hide py-4 px-4">
                                <div class="image-left flex items-center justify-start">
                                    <div class="img-gojek">
                                        <img src="../assets/users/user-4.png" class="rounded-full w-12">
                                    </div>
                                    <div class="flex flex-col px-2 text-gray-400">
                                        <div class="title text-sm font-bold">
                                            Budi Hartanto
                                        </div>
                                        <div class="client text-xs">
                                            Kompas Online
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="hide py-4 px-4">
                                <div class="image-left flex items-center justify-start">
                                    <div class="img-gojek">
                                        <img src="../assets/users/user-4.png" class="rounded-full w-12">
                                    </div>
                                    <div class="flex flex-col px-2 text-gray-400">
                                        <div class="title text-sm font-bold">
                                            Budi Hartanto
                                        </div>
                                        <div class="client text-xs">
                                            Kompas Online
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                    
                    <!-- CLICK BROADCAST -->
                    <div @click="clickBroadcast" class="jumlah-projek flex items-center justify-between px-4 py-6 cursor-pointer border-t border-b">
                        <div class="jum-projek flex items-center justify-start">
                            <div class="icon">
                                <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </div>
                            <div class="jumprojek ml-2 text-yellow-600 font-semibold">
                                2 Broadcast
                            </div>
                        </div>
                        <div class="icon">
                            <svg class="w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        </div>
                    </div>
                    <!-- BROADCAST SHOW -->
                    <transition name="slide">
                        <div class="wraper-broadcast" v-if="showBroadcast">
                            <!-- LOOP THIS -->
                            <div class="broadcast px-4 py-0">
                                <div class="hover hover:bg-indigo-50 border-b flex items-start justify-between px-4 py-4 cursor-pointer">
                                    <div class="kiri flex flex-col px-4 py-4 w-4/5">
                                        <div class="judul font-semibold text-gray-500">
                                            Membuat Berita Tentang Gojek
                                        </div>
                                        <div class="isi-berita text-gray-500 py-2">
                                            Tolong beritanya segera ditayangkan ya.. Thank you for using our service. This case is now being marked as closed. If you would like to reopen this case, please reply to this message.
                                        </div>
                                        <div class="select-file w-30-persen max-w-xs py-2">
                                            <label class="bg-gray-100 flex my-2 items-center justify-center py-1 rounded cursor-pointer hover:bg-gray-200 mr-4">
                                                <svg class="w-4 text-gray-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
                                                <span class="font-semibold text-gray-600 text-sm ml-2 leading-loose">Dokumen-Laporan1.pdf</span>
                                            </label>
                                            <label class="bg-gray-100 flex my-2 items-center justify-center py-1 rounded cursor-pointer hover:bg-gray-200 mr-4">
                                                <svg class="w-4 text-gray-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
                                                <span class="font-semibold text-gray-600 text-sm ml-2 leading-loose">Dokumen-Laporan1.pdf</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="kanan flex flex-wrap w-1/5 py-4 justify-end">
                                        <div class="datetime">
                                            <span class="text-gray-400 font-semibold">
                                                12/01/2021 12:13 PM
                                            </span>
                                        </div>
                                        <div class="status w-30-persen max-w-xs">
                                            <span class="bg-green-200 text-green-600 rounded-full px-2 text-xs">
                                                delivered
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="broadcast px-4 py-0">
                                <div class="hover hover:bg-indigo-50 border-b flex items-start justify-between px-4 py-4 cursor-pointer">
                                    <div class="kiri flex flex-col px-4 py-4 w-4/5">
                                        <div class="judul font-semibold text-gray-500">
                                            Membuat Berita Tentang Gojek
                                        </div>
                                        <div class="isi-berita text-gray-500 py-2">
                                            Tolong beritanya segera ditayangkan ya.. Thank you for using our service. This case is now being marked as closed. If you would like to reopen this case, please reply to this message.
                                        </div>
                                        <div class="select-file w-30-persen max-w-xs py-2">
                                            <label class="bg-gray-100 flex my-2 items-center justify-center py-1 rounded cursor-pointer hover:bg-gray-200 mr-4">
                                                <svg class="w-4 text-gray-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
                                                <span class="font-semibold text-gray-600 text-sm ml-2 leading-loose">Dokumen-Laporan1.pdf</span>
                                            </label>
                                            <label class="bg-gray-100 flex my-2 items-center justify-center py-1 rounded cursor-pointer hover:bg-gray-200 mr-4">
                                                <svg class="w-4 text-gray-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
                                                <span class="font-semibold text-gray-600 text-sm ml-2 leading-loose">Dokumen-Laporan1.pdf</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="kanan flex flex-wrap w-1/5 py-4 justify-end">
                                        <div class="datetime">
                                            <span class="text-gray-400 font-semibold">
                                                12/01/2021 12:13 PM
                                            </span>
                                        </div>
                                        <div class="status w-30-persen max-w-xs">
                                            <span class="bg-green-200 text-green-600 rounded-full px-2 text-xs">
                                                delivered
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
                
            </div>
        </div>

        <!-- ###### FOOTER APP ####### -->
        <!-- <FooterComponent /> -->

	</div><!--end DIV app -->
</template>

<script>
const appToken = 'dsadsadsad';
import Loader from '@/components/Loader.vue'
import axios from 'axios'
export default {
    components: {
        Loader,
    },
    data() {
        return {
            showBroadcast: false,
            showMember: false,
            showBroadcast2: false,
            showMember2: false,
            loaderPage: false,
            groupList: []
        }
    },
    mounted() {
        this.getGroups();
    },
    methods: {
        goToGroupForm(){
            this.$router.push('/group-form');
        },
        getGroups(){
            this.loaderPage = true;
            axios.get('/groups', {
                headers: {
                    'Authorization': 'Bearer ' + appToken
                }
            })
            .then((response) => {
                this.loaderPage = false;
                this.groupList = response.data.data;
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        },
        clickMember(){
            this.showBroadcast = false;
            this.showMember = !this.showMember;
        },
        clickBroadcast(){
            this.showMember = false;
            this.showBroadcast = !this.showBroadcast;
        },
        clickMember2(){
            this.showBroadcast2 = false;
            this.showMember2 = !this.showMember2;
        },
        clickBroadcast2(){
            this.showMember2 = false;
            this.showBroadcast2 = !this.showBroadcast2;
        }
    },
}
</script>

<style scoped>
    slide-enter-active {
    -moz-transition-duration: 0.5s;
    -webkit-transition-duration: 0.5s;
    -o-transition-duration: 0.5s;
    transition-duration: 0.6s;
    -moz-transition-timing-function: ease-in;
    -webkit-transition-timing-function: ease-in;
    -o-transition-timing-function: ease-in;
    transition-timing-function: ease-in;
    }

    .slide-leave-active {
    -moz-transition-duration: 0.5s;
    -webkit-transition-duration: 0.5s;
    -o-transition-duration: 0.5s;
    transition-duration: 0.5s;
    -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    }

    .slide-enter-to, .slide-leave {
    max-height: 100px;
    overflow: hidden;
    }

    .slide-enter, .slide-leave-to {
    overflow: hidden;
    max-height: 0;
    }
</style>