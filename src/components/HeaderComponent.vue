<template>
    <div class="header-component bg-white -mx-36 px-36">

        <!-- MOBILE -->
        <div class="w-16 h-16 flex justify-center items-center text-gray-600 md:hidden">
            <button class="p-1 hover:text-blue-500" :class="{'text-gray-500': isMenuOpen}" @click="toggleMenu">
                <svg class="fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path v-if="!isMenuOpen" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" />
                    <path v-else d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z" />
                </svg>
            </button>

            <transition enter-active-class="transition duration-200 ease-in-out transform" enter-class="-translate-x-full opacity-0" leave-active-class="transition duration-200 ease-in-out transform" leave-to-class="-translate-x-full opacity-0">
                <div v-show="isMenuOpen" class="absolute inset-0 h-screen" @click.self="toggleMenu">
                    <div ref="menu" class="mt-16 absolute inset-0 z-40 overflow-y-auto">
                        <div class="py-6 w-full min-h-full bg-gray-700">
                            <!-- Extract: user_info blade partial -->
                            <div class="px-6 pb-6 flex items-center border-b border-gray-100 sm:flex-col">
                                <div class="hidden px-3 text-white text-base rounded-full border sm:block">Username</div>
                                <div class="mr-auto text-white flex-shrink-0 flex justify-center items-center rounded-full border-4 sm:mt-4 sm:mx-auto">
                                    <svg class="fill-current w-24 h-24 sm:w-32 sm:h-32" viewBox="0 0 24 24">
                                        <path d="M12,8L10.67,8.09C9.81,7.07 7.4,4.5 5,4.5C5,4.5 3.03,7.46 4.96,11.41C4.41,12.24 4.07,12.67 4,13.66L2.07,13.95L2.28,14.93L4.04,14.67L4.18,15.38L2.61,16.32L3.08,17.21L4.53,16.32C5.68,18.76 8.59,20 12,20C15.41,20 18.32,18.76 19.47,16.32L20.92,17.21L21.39,16.32L19.82,15.38L19.96,14.67L21.72,14.93L21.93,13.95L20,13.66C19.93,12.67 19.59,12.24 19.04,11.41C20.97,7.46 19,4.5 19,4.5C16.6,4.5 14.19,7.07 13.33,8.09L12,8M9,11A1,1 0 0,1 10,12A1,1 0 0,1 9,13A1,1 0 0,1 8,12A1,1 0 0,1 9,11M15,11A1,1 0 0,1 16,12A1,1 0 0,1 15,13A1,1 0 0,1 14,12A1,1 0 0,1 15,11M11,14H13L12.3,15.39C12.5,16.03 13.06,16.5 13.75,16.5A1.5,1.5 0 0,0 15.25,15H15.75A2,2 0 0,1 13.75,17C13,17 12.35,16.59 12,16V16H12C11.65,16.59 11,17 10.25,17A2,2 0 0,1 8.25,15H8.75A1.5,1.5 0 0,0 10.25,16.5C10.94,16.5 11.5,16.03 11.7,15.39L11,14Z" />
                                    </svg>
                                </div>
                                <div class="ml-4 flex-1 flex flex-col sm:mt-4 sm:ml-0 sm:items-center">
                                    <div class="text-white text-2xl sm:hidden">Username</div>
                                    <div class="text-yellow-500 text-xl sm:text-sm">10.000 BET</div>
                                </div>
                            </div>

                            <!-- Extract: menu_items -->
                            <div class="mt-4">
                                <!-- TODO: add group here and group-hover to the shevron icon to show it only when the group is hovered -->
                                <a href="#" class="px-10 py-2 flex items-center text-xl text-gray-100 hover:text-orange-500 sm:px-4 sm:text-base">
                                    <div>
                                        <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 71">
                                            <path d="M28.559 5.848c2.665-6.75 12.217-6.75 14.882 0l.691 1.751a8 8 0 009.784 4.712l1.8-.551c6.938-2.125 12.895 5.343 9.279 11.635l-.938 1.632a8 8 0 002.416 10.587l1.553 1.063c5.988 4.1 3.862 13.413-3.311 14.51l-1.86.284a8 8 0 00-6.771 8.49l.136 1.877c.528 7.238-8.079 11.382-13.408 6.457l-1.382-1.277a8 8 0 00-10.86 0l-1.382 1.277c-5.33 4.925-13.936.78-13.408-6.457l.136-1.877a8 8 0 00-6.77-8.49l-1.86-.285c-7.174-1.096-9.3-10.409-3.312-14.509l1.553-1.063a8 8 0 002.416-10.587l-.938-1.632c-3.616-6.292 2.34-13.76 9.28-11.635l1.799.55a8 8 0 009.784-4.71l.69-1.752z" fill="none" /></svg>
                                    </div>
                                    <div class="ml-6 flex-1 sm:ml-4">Item </div>
                                    <div>
                                        <svg class="fill-current w-6 h-6 hover:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M9.3 8.7a1 1 0 011.4-1.4l4 4a1 1 0 010 1.4l-4 4a1 1 0 01-1.4-1.4l3.29-3.3-3.3-3.3z" /></svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>

        <!-- desktop -->
        <nav class="bg-white md:block hidden">
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
                                            to="/projects" 
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
                                            to="/projects" 
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
                                            to="/projects" 
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
                                <router-link to="/projects" class="text-gray-700 px-3 py-2 rounded-md text-sm font-semibold">Projects</router-link>
                                
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

                                                <router-link to="/users" class="isi py-2 hover:bg-indigo-50 px-4 w-full cursor-pointer text-gray-400">
                                                    Daftar User
                                                </router-link>
                                                <router-link to="/projects" class="isi py-2 hover:bg-indigo-50 px-4 w-full cursor-pointer text-gray-400">
                                                    Daftar Project
                                                </router-link>
                                                <router-link to="/companies" class="isi py-2 hover:bg-indigo-50 px-4 w-full cursor-pointer text-gray-400">
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

                                                <router-link to="/groups" class="isi py-2 hover:bg-indigo-50 px-4 w-full cursor-pointer text-gray-400">
                                                    Daftar Group
                                                </router-link>
                                                <router-link to="/categories" class="isi py-2 hover:bg-indigo-50 px-4 w-full cursor-pointer text-gray-400">
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
                                                <div
                                                    @click="handleLogout"
                                                    class="isi py-2 hover:bg-indigo-50 px-4 w-full cursor-pointer text-gray-400">
                                                    Logout
                                                </div>
                                            </div>
                                            <!-- Support -->
                                            <div class="title flex flex-col items-center mt-4">
                                                <div class="small-title text-purple-600 uppercase text-md font-bold px-4 w-full">
                                                    support
                                                </div>

                                                <router-link to="/projects" class="isi py-2 hover:bg-indigo-50 px-4 w-full cursor-pointer text-gray-400">
                                                    Bantuan
                                                </router-link>
                                                <router-link to="/projects" class="isi py-2 hover:bg-indigo-50 px-4 w-full cursor-pointer text-gray-400">
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
                                v-if="isLogin" 
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
            isMenuOpen: false,
            clickMyTask: false,
            clickManage: false,
            clickMyAccount: false,
            userStatus: '',
            isLogin: false,
        }
    },
    watch: {
        isMenuOpen: isOpen => {
            if (isOpen) {
                document.body.style.setProperty("overflow", "hidden");
                document.body.style.setProperty("position", "relative");
            } else {
                document.body.style.removeProperty("overflow");
                document.body.style.removeProperty("position");
            }
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
        let userdata = this.$store.getters['currentUser/userData'];
        userdata.forEach(user => {
            this.userStatus = user.data.status;
            console.log('userdata ' +user.data.status);
        });
        if(this.userStatus == 200){
            this.isLogin = true;
        }else{
            this.isLogin = false;
            this.$router.push('/login');
        }
    },
    methods: {
        toggleMenu() {
            this.$refs.menu.scrollTo(0, 0)
            this.isMenuOpen = !this.isMenuOpen;
        },
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
            this.$swal({
                title: "Oops...!",
                text: "Anda yakin akan logout?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Ya, logout!",
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$store.dispatch('currentUser/afterLogout');
                    this.$router.push('/login');
                    // axios.post("/api/logout")
                    // .then((res) => {
                    //     this.$router.push({
                    //         name: "login",
                    //     });
                    //     localStorage.setItem("isLoggedIn", "false");
                    //     localStorage.removeItem("username");
                    //     localStorage.removeItem("desa_id");
                    //     localStorage.removeItem("kecamatan_id");
                    //     localStorage.removeItem("role");
                    //     localStorage.removeItem("isAdmin");
                    //     this.isLoggedIn = "false";
                    // })
                    // .catch((err) => {
                    //     console.log(err);
                    // });
                // this.$swal("Success!", "Anda berhasil logout", "success");
                }
                else if (result.isDismissed) {
                  this.$swal("Canceled!", "Logout Dibatalkan!", "info");
                }
            });
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