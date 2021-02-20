<template>
    <div class="app user-profile">

        <!-- ############ HEADER APP ############# -->
   		<!-- <HeaderComponent /> -->

        <!-- GOJEK PROJEK -->
        <div class="white-user lg:py-12 py-6 bg-white lg:-mx-36 -mx-4">
            <div class="wraper">
                <div class="body flex flex-col px-4 items-center">
                    <div class="img-profle rounded-full bg-blue-200 w-64 text-center">
                        <img class="object-contain rounded-full w-full" :src="userDetail.profilePictureUrl" alt="img-user">
                    </div>
                    <div class="title text-2xl text-center mt-4 font-bold text-gray-500" >
                        {{ userDetail.fullName }}
                    </div>
                    <div class="role text-center text-lg px-12 mt-2 font-bold text-gray-400">
                        {{ userDetail.role }}
                    </div>
                    <div class="bergabung flex items-center justify-center px-4 mt-4 mb-8 text-gray-400">
                        Bergabung sejak 4 tahun 3 bulan yang lalu.
                    </div>
                    <div class="button-tiga flex items-center justify-center px-4 mt-4 mb-12 text-gray-400">
                        <button class="bg-blue-200 rounded lg:px-6 px-2 py-1 text-white font-semibold text-xs cursor-text mr-4">
                            Bulan ini
                        </button>
                        <button class="bg-blue-200 rounded lg:px-6 px-2 py-1 text-white font-semibold text-xs cursor-text mr-4">
                            Tahun ini
                        </button>
                        <button class="bg-blue-200 rounded lg:px-6 px-2 py-1 text-white font-semibold text-xs cursor-text">
                            Keseluruhan
                        </button>
                    </div>
                    <!-- <div>
                        {{ userDetail }}
                    </div> -->
                </div>
            </div>
            <!-- <div class="w-full h-12 bottom-2 absolute"> -->
                <svg class="text-indigo-50 lg:h-12 h-6 absolute w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.54 17.34" preserveAspectRatio="none" fill="currentColor"><path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path></svg>
            <!-- </div> -->
        </div>
        
        <!-- PROJECT SCORE -->
        <div class="project-score w-full my-16 px-4">
            <div class="score flex lg:flex-row flex-col items-center justify-between">
                <div class="scores flex flex-col items-center border-r border-gray-300 border-dashed px-8">
                    <div class="img-gojek flex-shrink-0 rounded-full bg-blue-200 w-20 h-20 flex items-center justify-center px-4">
                        <svg class="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div class="tgl text-lg font-bold mt-2 text-gray-600">
                        10/80/10
                    </div>
                    <div class="tgl text-md font-bold text-gray-500 uppercase">
                        deadline pctg
                    </div>
                    <div class="tgl text-sm font-bold text-gray-400 uppercase">
                        (faster/ontime/missed)
                    </div>
                </div>
                <div class="scores flex flex-col items-center border-r border-gray-300 border-dashed px-8">
                    <div class="img-gojek flex-shrink-0 rounded-full bg-blue-200 w-20 h-20 flex items-center justify-center px-4">
                        <svg class="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                    </div>
                    <div class="tgl text-lg font-bold mt-2 text-gray-600">
                        10/80/10
                    </div>
                    <div class="tgl text-md font-bold text-gray-500 uppercase">
                        quality pctg
                    </div>
                    <div class="tgl text-sm font-bold text-gray-400 uppercase">
                        (faster/ontime/missed)
                    </div>
                </div>
                <div class="scores flex flex-col items-center border-r border-gray-300 border-dashed px-8">
                    <div class="img-gojek flex-shrink-0 rounded-full bg-blue-200 w-20 h-20 flex items-center justify-center px-4">
                        <svg class="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                    </div>
                    <div class="tgl text-lg font-bold mt-2 text-gray-600">
                        10/80/10
                    </div>
                    <div class="tgl text-md font-bold text-gray-500 uppercase">
                        idea pctg
                    </div>
                    <div class="tgl text-sm font-bold text-gray-400 uppercase">
                        (faster/ontime/missed)
                    </div>
                </div>
                <div class="scores flex flex-col items-center px-1">
                    <div class="img-gojek flex-shrink-0 rounded-full bg-blue-200 w-20 h-20 flex items-center justify-center px-4">
                        <svg class="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    </div>
                    <div class="tgl text-lg font-bold mt-2 text-gray-600">
                        10/80/10
                    </div>
                    <div class="tgl text-md font-bold text-gray-500 uppercase">
                        design pctg
                    </div>
                    <div class="tgl text-sm font-bold text-gray-400 uppercase">
                        (faster/ontime/missed)
                    </div>
                </div>
            </div>
        </div>
        
        <div class="garis border-t border-gray-300 mt-16 mb-8 mx-28"></div>

        <!-- TASKS SUMMARY-->
        <div class="documents flex lg:flex-row flex-col items-center w-full mt-12 mb-4 lg:px-28 px-4 justify-between">
            <div class="font-bold text-lg text-gray-600">Task Summary</div>
            <div class="bg-blue-200 text-purple-500 rounded px-4 py-1 text-sm font-semibold">
                300 tasks
            </div>
        </div>

        <div class="rincian w-full my-4 lg:px-28 px-4 justify-between bg-indigo-50">
            <div class="sidebar bg-white rounded px-0 py-4 shadow-lg">

                <div class="sidebar-contain flex items-center justify-between px-4">
                    <div class="title text-md font-semibold text-purple-700">
                        Ongoing Tasks
                    </div>
                    <div class="flex items-center">
                        <div class="mr-2 text-gray-400 font-bold">30</div>
                        <div class="icon mr-2 rounded-full bg-blue-200 px-1 py-1">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                        </div>
                    </div>
                </div>

                <div class="garis w-full border-t my-2"></div>

                <div class="sidebar-contain flex items-center justify-between px-4">
                    <div class="title text-md font-semibold text-purple-700">
                        Completed Tasks
                    </div>
                    <div class="flex items-center">
                        <div class="mr-2 text-gray-400 font-bold">30</div>
                        <div class="icon mr-2 rounded-full bg-blue-200 px-1 py-1">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                        </div>
                    </div>
                </div>
                <div class="garis w-full border-t my-2"></div>

                <div class="sidebar-contain flex items-center justify-between px-4">
                    <div class="title text-md font-semibold text-purple-700">
                        Pending Tasks
                    </div>
                    <div class="flex items-center">
                        <div class="mr-2 text-gray-400 font-bold">30</div>
                        <div class="icon mr-2 rounded-full bg-blue-200 px-1 py-1">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <!-- PROJECT SUMMARY-->
        <div class="documents flex lg:flex-row flex-col items-center w-full mt-12 mb-4 lg:px-28 px-4 justify-between">
            <div class="font-bold text-lg text-gray-600">Project Summary</div>
            <div class="bg-blue-200 text-purple-500 rounded px-4 py-1 text-sm font-semibold">
                {{ projectCount }}
            </div>
        </div>

        <div class="rincian w-full my-4 lg:px-28 px-4 justify-between bg-indigo-50">

            <div class="project-summary bg-white px-0 py-0 shadow-lg">
                <div class="sidebar-contain flex lg:flex-row flex-col lg:items-center justify-between px-4 border-t py-2">
                    <div class="kiri flex flex-col">
                        <div class="title">
                            <span class="font-bold text-purple-700 uppercase text-lg">
                                gojek campaign new year 2021 
                            </span>
                            <span class="text-xs text-red-500 uppercase font-bold">januari 2021</span>
                        </div>
                        <div class="isi lg:ml-4 ml-0 my-2">
                            <ul>
                                <li class="font-semibold text-gray-400">Quality: 90/100</li>
                                <li class="font-semibold text-gray-400">Idea: 90/100</li>
                                <li class="font-semibold text-gray-400">Design: 90/100</li>
                                <li class="font-semibold text-gray-400">Deadline: 90/100</li>
                            </ul>
                        </div>
                    </div>
                    <div class="image-left flex items-center justify-start">
                        <div class="title text-base font-bold text-gray-400 mr-2">
                            Gojek Indonesia
                        </div>
                        <div class="img-gojek flex-shrink-0 rounded-full bg-gray-200 px-2 py-2">
                            <img src="https://pbs.twimg.com/media/EAKvmBZUIAUeWSN.jpg" class="rounded-full w-12">
                        </div>
                    </div>
                </div>
            </div>
            <div class="project-summary bg-white px-0 py-0 shadow-lg">
                <div class="sidebar-contain flex lg:flex-row flex-col lg:items-center justify-between px-4 border-t py-2">
                    <div class="kiri flex flex-col">
                        <div class="title">
                            <span class="font-bold text-purple-700 uppercase text-lg">
                                gojek campaign new year 2021 
                            </span>
                            <span class="text-xs text-red-500 uppercase font-bold">januari 2021</span>
                        </div>
                        <div class="isi lg:ml-4 ml-0 my-2">
                            <ul>
                                <li class="font-semibold text-gray-400">Quality: 90/100</li>
                                <li class="font-semibold text-gray-400">Idea: 90/100</li>
                                <li class="font-semibold text-gray-400">Design: 90/100</li>
                                <li class="font-semibold text-gray-400">Deadline: 90/100</li>
                            </ul>
                        </div>
                    </div>
                    <div class="image-left flex items-center justify-start">
                        <div class="title text-base font-bold text-gray-400 mr-2">
                            Gojek Indonesia
                        </div>
                        <div class="img-gojek flex-shrink-0 rounded-full bg-gray-200 px-2 py-2">
                            <img src="https://pbs.twimg.com/media/EAKvmBZUIAUeWSN.jpg" class="rounded-full w-12">
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

        <!-- ###### FOOTER APP ####### -->
        <!-- <FooterComponent></FooterComponent> -->

	</div><!--end DIV app -->
</template>

<script>
import userData from '@/api/userDetail.json'
export default {
    props: ["id"],
    // components: {
    //     HeaderComponent,
    //     FooterComponent
    // },
    data() {
        return {
            userId: this.id,
            profileClicked: false,
            userDetail: userData.data,
            projectCount: 0,
        }
    },
    mounted() {
        this.countProject();
        // this.isAuthenticated();
    },
    methods: {
        countProject(){
            let counter = userData.data.performance.length;

            if(counter >= 2)
                this.projectCount = counter + ' Projects';
            else if(counter == 1)
                this.projectCount = counter + ' Project';
            else
                this.projectCount = 0 +' Project';

            console.log(userData.data.performance);
        },
        isAuthenticated(){
            if(!this.userId){
                this.$router.push('/login');
            }
        }
    },
}
</script>