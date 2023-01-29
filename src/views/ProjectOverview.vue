<template>
    <div class="app project-overview">

        <!-- ############ HEADER APP ############# -->
   		<!-- <HeaderComponent /> -->

        <!-- GOJEK PROJEK -->
        <div class="tambahkan-dokumen w-full mt-8 lg:px-28 justify-between bg-indigo-50">
            <div class="bg-white shadow-lg rounded">
                <div class="body flex flex-col px-4">
                    <div class="title text-lg lg:text-center mt-4 font-bold text-gray-500">
                        Gojek Projeck Lorem ipsum dolor sit amet.
                    </div>
                    <div class="desc lg:text-center text-sm lg:px-12 mt-2 font-semibold text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex animi odit neque officiis nemo placeat iusto facere magnam, laudantium veniam et cupiditate dicta doloremque doloribus debitis veritatis, repellat minima consectetur autem temporibus maxime at porro reprehenderit! Deserunt, veritatis modi voluptatibus soluta cupiditate nesciunt esse reprehenderit praesentium dignissimos, pariatur atque ipsa?
                    </div>
                    <div class="button flex lg:flex-row flex-col items-center justify-center px-4 mt-4 mb-8">
                        <button class="bg-red-500 px-6 py-1 rounded-full hover:bg-red-600 lg:mr-4 lg:mb-0 mb-2">
                            <span class="font-bold uppercase text-xs text-gray-50 leading-loose" >Progress</span>
                        </button>
                        <button class="bg-purple-500 px-6 py-1 rounded-full hover:bg-purple-600 lg:mr-4 lg:mb-0 mb-2">
                            <span class="font-bold uppercase text-xs text-gray-50 leading-loose" >dokumen</span>
                        </button>
                        <button class="bg-red-500 px-6 py-1 rounded-full hover:bg-red-600">
                            <span class="font-bold uppercase text-xs text-gray-50 leading-loose" >overview</span>
                        </button>
                    </div>
                </div>
                <div class="footer-bot text-base font-bold px-4 py-3 rounded-b bg-gray-100 flex lg:flex-row flex-col lg:items-center justify-between">

                    <div class="image-left flex items-center justify-start lg:mb-0 mb-2">
                        <div class="img-gojek flex-shrink-0 rounded-full">
                            <img src="https://images.unsplash.com/photo-1582346992845-c963d5b0ba0d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" class="rounded-full h-12 w-12">
                        </div>
                        <div class="flex flex-col px-2 text-gray-400">
                            <div class="title text-sm font-bold">
                                Gojek Indonesia
                            </div>
                            <div class="client text-xs font-bold">
                                Client
                            </div>
                        </div>
                    </div>

                    <div class="image-right flex items-center justify-start">
                        <div class="garis-samping lg:border-r border-gray-400 lg:border-dashed h-12 lg:mr-8"></div>
                        <div class="img-gojek flex-shrink-0 rounded-full bg-blue-300 w-12 h-12 flex items-center justify-center px-2">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                        </div>
                        <div class="flex flex-col px-2 text-gray-400">
                            <div class="title text-sm font-bold">
                                Ongoing
                            </div>
                            <div class="client text-xs font-bold mr-24">
                                Overall Progress
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <!-- PROJECT BRIEF -->
        <div class="project-brief w-full my-10 lg:px-28">
            <div class="flex items-center justify-start mb-2">
                <div class="img-gojek flex-shrink-0 rounded-full bg-purple-700 w-10 h-10 flex items-center justify-center px-2">
                    <svg class="w-6 h-6 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                </div>
                <div class="title text-lg font-bold ml-4 text-gray-600">
                    Project Brief
                </div>
            </div>
            <div class="text-justify text-gray-500 font-medium">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias eum eos corporis sit explicabo nemo culpa ea tenetur. Natus nostrum suscipit amet unde sed alias nam. Nihil quam iure asperiores sit, corrupti possimus. Totam doloremque sit, dignissimos a provident maxime incidunt molestias, modi, ut cum sed minima qui perspiciatis nostrum.
            </div>
        </div>
        
        <div class="garis border-t border-gray-300 mt-16 mb-8 lg:mx-28"></div>

        <!-- PARTICIPANTS -->
        <div class="documents flex items-center w-full my-12 lg:px-28 justify-between">
            <div class="font-bold text-lg text-gray-600">Participants</div>
            <div class="bg-blue-200 text-purple-500 rounded px-4 py-1 text-sm font-semibold">
                5 People
            </div>
        </div>

        <div class="rincian w-full my-4 lg:px-28 justify-between bg-indigo-50">
            <div class="sidebar bg-white rounded px-0 py-4 shadow-lg">

                <div class="sidebar-contain flex items-center justify-between px-4">
                    <div class="title text-md font-semibold text-purple-700">
                        Project Leader
                    </div>
                    <div class="flex items-center">
                        <div class="mr-2 text-gray-400 font-bold">Budi Gunawan</div>
                        <div class="icon mr-2 rounded-full bg-blue-200 px-1 py-1">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                        </div>
                    </div>
                </div>

                <div class="garis w-full border-t my-2"></div>

                <div class="sidebar-contain flex items-center justify-between px-4">
                    <div class="title text-md font-semibold text-purple-700">
                        Project Leader
                    </div>
                    <div class="flex items-center">
                        <div class="mr-2 text-gray-400 font-bold">Budi Gunawan</div>
                        <div class="icon mr-2 rounded-full bg-blue-200 px-1 py-1">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                        </div>
                    </div>
                </div>
                <div class="garis w-full border-t my-2"></div>

                <div class="sidebar-contain flex items-center justify-between px-4">
                    <div class="title text-md font-semibold text-purple-700">
                        Project Leader
                    </div>
                    <div class="flex items-center">
                        <div class="mr-2 text-gray-400 font-bold">Budi Gunawan</div>
                        <div class="icon mr-2 rounded-full bg-blue-200 px-1 py-1">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <!-- TASKS -->
        <div class="documents flex items-center w-full my-12 lg:px-28 justify-between">
            <div class="font-bold text-lg text-gray-600">Tasks</div>
            <div class="bg-blue-200 text-purple-500 rounded px-4 py-1 text-sm font-semibold">
                300 tasks
            </div>
        </div>

        <div class="rincian w-full my-4 lg:px-28 justify-between bg-indigo-50">
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

        <!-- ###### FOOTER APP ####### -->
        <!-- <FooterComponent /> -->

	</div><!--end DIV app -->
</template>

<script>
// @ is an alias to /src
// import HeaderComponent from '@/components/HeaderComponent.vue';
// import FooterComponent from '@/components/FooterComponent.vue';
export default {
    // components: {
    //     HeaderComponent,
    //     FooterComponent
    // },
    data() {
        return {
            profileClicked: false,
        }
    },
    methods: {
        selectImage(){
            // this.loadingImage = true;
            // if(this.form.bukti_trasnfer){
            // 	this.loadingImage = false;
            // }
        },
    },
}
</script>