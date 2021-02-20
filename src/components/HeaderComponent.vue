<template>
    <div class="header-component bg-white -mx-36 px-36">
        <nav class="bg-white">
            <div class="max-w-7xl mx-auto">
                <div class="flex items-center justify-between h-20">
                    <!-- <div class="flex items-center justify-between"> -->
                        <div class="flex-shrink-0">
                            <!-- <img class="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow"> -->
                            <router-link to="/">
                                <span class="company text-purple-700 hover:text-green-600 text-2xl font-bold">
                                    QComm PM
                                </span>
                            </router-link>
                        </div>
                        <div class="hidden lg:block">
                            <div class="flex items-baseline space-x-4">
                                <!-- DASHBOARD -->
                                <router-link to="/" class="text-gray-700 px-3 py-2 rounded-md text-sm font-semibold">Dashboard</router-link>
            
                                <!-- MY TASK-->
                                <div class="text-gray-700 px-3 py-2 rounded-md text-sm font-semibold flex flex-col">
                                    <div
                                        @click="menuMyTask" 
                                        class="cursor-pointer flex items-center">
                                        <div class="mr-1">My Tasks</div>
                                        <div>
                                            <svg 
                                                class="w-3 mt-1"
                                                :class="rotateIconMyTask" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24" 
                                                xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <!-- DROPDOWN MY TASK -->
                                    <div 
                                        @click="clickMyTask = !clickMyTask"
                                        v-if="clickMyTask"
                                        class="dropdown bg-white rounded px-0 py-2 shadow z-20 w-1/4 absolute mt-8">
                                        <router-link 
                                            to="/project-list" 
                                            class="hover:bg-blue-100 sidebar-contain flex items-center justify-start px-4 py-3">
                                            <div class="icon rounded-full bg-blue-200 px-1 py-1 mr-4">
                                                <svg class="w-5 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                            </div>
                                            <div class="title flex flex-col">
                                                <div class="small-title text-xs text-gray-400 font-semibold">
                                                    Bank Mandiri
                                                </div>
                                                <div class="isi text-sm text-gray-400">
                                                    Kirim dokumen ke bagian keuangan
                                                </div>
                                            </div>
                                        </router-link>
                                        <router-link 
                                            to="/project-list" 
                                            class="hover:bg-blue-100 sidebar-contain flex items-center justify-start px-4 py-3">
                                            <div class="icon rounded-full bg-blue-200 px-1 py-1 mr-4">
                                                <svg class="w-5 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                            </div>
                                            <div class="title flex flex-col">
                                                <div class="small-title text-xs text-gray-400 font-semibold">
                                                    Bank Mandiri
                                                </div>
                                                <div class="isi text-sm text-gray-400">
                                                    Kirim dokumen ke bagian keuangan
                                                </div>
                                            </div>
                                        </router-link>
                                        <router-link 
                                            to="/project-list" 
                                            class="hover:bg-blue-100 sidebar-contain flex items-center justify-start px-4 py-3">
                                            <div class="icon rounded-full bg-blue-200 px-1 py-1 mr-4">
                                                <svg class="w-5 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                            </div>
                                            <div class="title flex flex-col">
                                                <div class="small-title text-xs text-gray-400 font-semibold">
                                                    Bank Mandiri
                                                </div>
                                                <div class="isi text-sm text-gray-400">
                                                    Kirim dokumen ke bagian keuangan
                                                </div>
                                            </div>
                                        </router-link>
                                                                               
                                    </div>
                                </div>

                                <!-- PROJECTS -->
                                <router-link to="/project-list" class="text-gray-700 px-3 py-2 rounded-md text-sm font-semibold">Projects</router-link>
                                
                                <!-- MANAGE -->
                                <div class="text-gray-700 px-3 py-2 rounded-md text-sm font-semibold flex flex-col">
                                    <div @click="menuManage" class="cursor-pointer flex items-center">
                                        <div class="mr-1">Manage</div>
                                        <div>
                                            <svg 
                                                class="w-3 mt-1"
                                                :class="rotateIconManage" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24" 
                                                xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <!-- DROPDOWN MANAGE -->
                                    <div 
                                        @click="clickManage = !clickManage"
                                        v-if="clickManage" 
                                        class="dropdown bg-white rounded px-0 shadow z-20 w-1/6 absolute mt-8">
                                        <div class="sidebar-contain flex flex-col px-2 py-8">
                                            <!-- ACCOUNTS -->
                                            <div class="title flex flex-col items-center">
                                                <div class="small-title text-purple-600 uppercase text-md font-bold px-4 w-full">
                                                    Accounts
                                                </div>

                                                <router-link to="/user-list" class="isi py-2 hover:bg-indigo-50 px-4 w-full cursor-pointer text-gray-400">
                                                    Daftar User
                                                </router-link>
                                                <router-link to="/project-list" class="isi py-2 hover:bg-indigo-50 px-4 w-full cursor-pointer text-gray-400">
                                                    Daftar Project
                                                </router-link>
                                                <router-link to="/company-list" class="isi py-2 hover:bg-indigo-50 px-4 w-full cursor-pointer text-gray-400">
                                                    Daftar Company
                                                </router-link>
                                                <router-link to="/user-kpi" class="isi py-2 hover:bg-indigo-50 px-4 w-full cursor-pointer text-gray-400">
                                                    Update KPI
                                                </router-link>
                                            </div>
                                            <!-- SETTINGS -->
                                            <div class="title flex flex-col items-center mt-4">
                                                <div class="small-title text-purple-600 uppercase text-md font-bold px-4 w-full">
                                                    setting
                                                </div>

                                                <router-link to="/group-list" class="isi py-2 hover:bg-indigo-50 px-4 w-full cursor-pointer text-gray-400">
                                                    Daftar Group
                                                </router-link>
                                                <router-link to="/category-list" class="isi py-2 hover:bg-indigo-50 px-4 w-full cursor-pointer text-gray-400">
                                                    Daftar Kategori
                                                </router-link>
                                            </div>
                                        </div>
                                                                               
                                    </div>
                                </div>

                                <!-- MY ACCOUNT -->
                                <div class="text-gray-700 px-3 py-2 rounded-md text-sm font-semibold flex flex-col">
                                    <div @click="menuMyAccount" class="cursor-pointer flex items-center">
                                        <div class="mr-1">My Account</div>
                                        <div>
                                            <svg 
                                                class="w-3 mt-1"
                                                :class="rotateIconMyAccount" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24" 
                                                xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <!-- DROPDOWN MY ACCOUNT -->
                                    <div 
                                        @click="clickMyAccount = !clickMyAccount"
                                        v-if="clickMyAccount" 
                                        class="dropdown bg-white rounded px-0 shadow z-20 w-1/6 absolute mt-8">
                                        <div class="sidebar-contain flex flex-col px-2 py-8">
                                            <!-- ACCOUNT -->
                                            <div class="title flex flex-col items-center">
                                                <div class="small-title text-purple-600 uppercase text-md font-bold px-4 w-full">
                                                    Account
                                                </div>

                                                <router-link to="/users/1" class="isi py-2 hover:bg-indigo-50 px-4 w-full cursor-pointer text-gray-400">
                                                    Profil Akun
                                                </router-link>
                                                <router-link to="/user-form" class="isi py-2 hover:bg-indigo-50 px-4 w-full cursor-pointer text-gray-400">
                                                    Update Akun
                                                </router-link>
                                                <router-link to="/user-form" class="isi py-2 hover:bg-indigo-50 px-4 w-full cursor-pointer text-gray-400">
                                                    Ubah Password
                                                </router-link>
                                                <router-link to="/login" class="isi py-2 hover:bg-indigo-50 px-4 w-full cursor-pointer text-gray-400">
                                                    Logout
                                                </router-link>
                                            </div>
                                            <!-- Support -->
                                            <div class="title flex flex-col items-center mt-4">
                                                <div class="small-title text-purple-600 uppercase text-md font-bold px-4 w-full">
                                                    support
                                                </div>

                                                <router-link to="/project-list" class="isi py-2 hover:bg-indigo-50 px-4 w-full cursor-pointer text-gray-400">
                                                    Bantuan
                                                </router-link>
                                                <router-link to="/project-list" class="isi py-2 hover:bg-indigo-50 px-4 w-full cursor-pointer text-gray-400">
                                                    Dukungan
                                                </router-link>
                                            </div>
                                        </div>
                                                                               
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="logout">
                            <button 
                                @click="handleLogout"
                                v-if="id" 
                                class="text-red-600 hover:text-green-600 focus:text-green-600 focus:ring-2 focus:ring-blue-200 focus:outline-none px-4 py-2 rounded-full text-sm font-bold flex items-center">
                                <span>LOGOUT</span>
                                <svg class="w-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </button>
                            <button 
                                @click="toLogin"
                                v-else 
                                class="text-red-600 hover:text-green-600 focus:text-green-600 focus:ring-2 focus:ring-blue-200 focus:outline-none px-4 py-2 rounded-full text-sm font-bold flex items-center">
                                <span>LOGIN</span>
                                <svg class="w-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </button>
                        </div>
                    <!-- </div> -->
                </div>
            </div>
        </nav>
        <div v-if="clickMyTask || clickManage || clickMyAccount" class="outside" @click="away"></div>
    </div>
</template>

<script>
export default {
    name: 'HeaderComponent',
    data(){
        return {
            clickMyTask: false,
            clickManage: false,
            clickMyAccount: false,
            id: '',
        }
    },
    computed: {
        rotateIconMyAccount(){
            return {
                transform: this.clickMyAccount, 
                'rotate-90': this.clickMyAccount,
                transition: this.clickMyAccount,
                'duration-300': this.clickMyAccount, 
                'ease-in-out': this.clickMyAccount
            }
        },
        rotateIconManage(){
            return {
                transform: this.clickManage, 
                'rotate-90': this.clickManage,
                transition: this.clickManage,
                'duration-300': this.clickManage, 
                'ease-in-out': this.clickManage
            }
        },
        rotateIconMyTask(){
            return {
                transform: this.clickMyTask, 
                'rotate-90': this.clickMyTask,
                transition: this.clickMyTask,
                'duration-300': this.clickMyTask, 
                'ease-in-out': this.clickMyTask
            }
        }
    },
    mounted() {
        this.id = localStorage.getItem('id');
        console.log(this.id);
    },
    methods: {
        away() {
            this.clickManage = false;
            this.clickMyAccount = false;
            this.clickMyTask = false;
        },
        menuMyTask(){
            this.clickMyTask = !this.clickMyTask;
            this.clickManage = false;
            this.clickMyAccount = false;
        },
        menuManage(){
            this.clickManage = !this.clickManage;
            this.clickMyTask = false;
            this.clickMyAccount = false;
        },
        menuMyAccount(){
            this.clickMyAccount = !this.clickMyAccount;
            this.clickMyTask = false;
            this.clickManage = false;
        },
        toLogin(){
            this.$router.push("/login");
        },
        handleLogout(){
            this.$router.push('/login');
            localStorage.removeItem('id');
        }
    },
}
</script>

<style scoped>
.outside {
    /* background-color: #24d0b9; */
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0px;
    left: 0px;
}
.router-link-exact-active {
  /* background-color: #1947ee; */
  /* color: #1e30b8; */
  color: #24d0b9;
  cursor: pointer;
  /*border-radius: 0.5rem;*/
}
</style>