<template>
    <div class="app project-task">

        <!-- ############ HEADER APP ############# -->
   		<!-- <HeaderComponent /> -->

        <!-- GOJEK PROJEK -->
        <div class="tambahkan-dokumen w-full mt-8 px-28 justify-between bg-indigo-50">
            <div class="bg-white shadow-lg rounded">
                <div class="body flex flex-col px-4">
                    <div class="title text-lg text-center mt-4 font-bold text-gray-500">
                        Gojek Projeck Lorem ipsum dolor sit amet.
                    </div>
                    <div class="desc text-center text-sm px-12 mt-2 font-semibold text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex animi odit neque officiis nemo placeat iusto facere magnam, laudantium veniam et cupiditate dicta doloremque doloribus debitis veritatis, repellat minima consectetur autem temporibus maxime at porro reprehenderit! Deserunt, veritatis modi voluptatibus soluta cupiditate nesciunt esse reprehenderit praesentium dignissimos, pariatur atque ipsa?
                    </div>
                    <div class="button flex items-center justify-center px-4 mt-4 mb-8">
                        <button class="bg-red-500 px-6 py-1 rounded-full hover:bg-red-600 mr-4">
                            <span class="font-bold uppercase text-xs text-gray-50 leading-loose" >Progress</span>
                        </button>
                        <button class="bg-purple-500 px-6 py-1 rounded-full hover:bg-purple-600 mr-4">
                            <span class="font-bold uppercase text-xs text-gray-50 leading-loose" >dokumen</span>
                        </button>
                        <button class="bg-red-500 px-6 py-1 rounded-full hover:bg-red-600">
                            <span class="font-bold uppercase text-xs text-gray-50 leading-loose" >overview</span>
                        </button>
                    </div>
                </div>
                <div class="footer-bot text-base font-bold px-4 py-3 rounded-b bg-gray-100 flex items-center justify-between">
                    <div class="image-left flex items-center justify-start">
                        <div class="img-gojek flex-shrink-0 rounded-full">
                            <img src="https://pbs.twimg.com/media/EAKvmBZUIAUeWSN.jpg" class="rounded-full w-12">
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
                        <div class="garis-samping border-r border-gray-400 border-dashed h-12 mr-8"></div>
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

        <div class="garis border-t border-gray-300 mt-16 my-14 mx-28"></div>

        <div class="wrap-second-content grid grid-cols-4 gap-8 px-28">

            <!-- SIDEBAR -->
            <MiniSidebarComponent />

            <!-- SECOND CONTENT -->
            <div class="col-span-3 search">

                <!-- SEARCH -->
                <div class="search flex items-center w-full">
                    <button class="bg-red-400 text-white flex items-center px-4 py-2 rounded-tl rounded-bl w-1/3 shadow leading-thight">
                        <span class="block mr-2 font-semibold text-md">Search task</span>
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <input 
                        type="search" 
                        class="w-full rounded-tr rounded-br py-2 shadow-sm focus:outline-none focus:shadow-inner px-2"
                        placeholder="Masukkan kata kunci...">
                </div>

                <!-- DAFTAR TUGAS -->
                <div class="task-list py-6 px-4 shadow-lg rounded bg-white mt-4">
                    <div class="flex items-center justify-between w-full">
                        <div class="img-ket flex flex-col">
                            <div class="flex-shrink-0 shadow rounded-full">
                                <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80" alt="">
                            </div>
                            <div class="flex-shrink-0 shadow rounded-full mt-5">
                                <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80" alt="">
                            </div>
                        </div>
                        <div class="text flex flex-wrap w-3/4">
                            <div class="judul mb-2 text-lg font-semibold text-gray-500">Mengirim Dokumen ke Klien</div>
                            <div class="isi text-gray-500 text-md">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, voluptatibus dignissimos? Maxime ullam porro ad? Repellendus voluptatum dignissimos porro laborum.
                            </div>
                        </div>
                        <div class="waktu flex flex-col justify-center">
                            <div class="jam text-lg text-gray-300 font-semibold">12:12 PM</div>
                            <div class="bg-green-200 text-sm text-green-600 px-2 rounded-full">
                                3 responses
                            </div>
                        </div>
                    </div>
                    <div class="w-full border-b my-4"></div>
                    <div class="flex items-center justify-between w-full">
                        <div class="img-ket flex flex-col">
                            <div class="flex-shrink-0 shadow rounded-full">
                                <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80" alt="">
                            </div>
                            <div class="flex-shrink-0 shadow rounded-full mt-5">
                                <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80" alt="">
                            </div>
                        </div>
                        <div class="text flex flex-wrap w-3/4">
                            <div class="judul mb-2 text-lg font-semibold text-gray-500">Mengirim Dokumen ke Klien</div>
                            <div class="isi text-gray-500 text-md">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, voluptatibus dignissimos? Maxime ullam porro ad? Repellendus voluptatum dignissimos porro laborum.
                            </div>
                        </div>
                        <div class="waktu flex flex-col justify-center">
                            <div class="jam text-lg text-gray-300 font-semibold">12:12 PM</div>
                            <div class="bg-green-200 text-sm text-green-600 px-2 rounded-full">
                                3 responses
                            </div>
                        </div>
                    </div>
                    <div class="w-full border-b my-4"></div>
                    <div class="flex items-center justify-between w-full">
                        <div class="img-ket flex flex-col">
                            <div class="flex-shrink-0 shadow rounded-full">
                                <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80" alt="">
                            </div>
                            <div class="flex-shrink-0 shadow rounded-full mt-5">
                                <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80" alt="">
                            </div>
                        </div>
                        <div class="text flex flex-wrap w-3/4">
                            <div class="judul mb-2 text-lg font-semibold text-gray-500">Mengirim Dokumen ke Klien</div>
                            <div class="isi text-gray-500 text-md">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, voluptatibus dignissimos? Maxime ullam porro ad? Repellendus voluptatum dignissimos porro laborum.
                            </div>
                        </div>
                        <div class="waktu flex flex-col justify-center">
                            <div class="jam text-lg text-gray-300 font-semibold">12:12 PM</div>
                            <div class="bg-green-200 text-sm text-green-600 px-2 rounded-full">
                                3 responses
                            </div>
                        </div>
                    </div>
                    <div class="w-full border-b my-4"></div>

                    <div class="tampilkan justify-center flex">
                        <button class=" flex items-center">
                            <span class="text-gray-500 text-sm font-semibold leading-thight">Tampilkan selanjutnya</span>
                            <svg class="w-4 text-gray-500 mt-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        </button>
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
import MiniSidebarComponent from '@/components/MiniSidebarComponent.vue';
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
        selectImage(){
            // this.loadingImage = true;
            // if(this.form.bukti_trasnfer){
            // 	this.loadingImage = false;
            // }
        },
    },
}
</script>