<template>
    <div id="app" class="project-form">

        <!-- ############ HEADER APP ############# -->
   		<!-- <HeaderComponent /> -->

        <!-- ############ PROJECT TITLE ############# -->
        <div class="project flex lg:flex-row flex-col lg:items-center justify-between mt-10">

            <div class="flex lg:flex-row flex-col lg:items-center justify-start">
                <div class="img-gojek rounded-full mr-4 bg-purple-700 w-16 h-16 flex items-center justify-center">
                    <svg class="w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                </div>
                <div class="flex flex-col">
                    <div class="project-title lg:mt-0 mt-2">
                        <span class="text-2xl font-semibold leading-3">Project</span>
                    </div>
                    <div class="">
                        <span class="text-md font-semibold text-gray-400">
                            Tambah project baru
                        </span>
                    </div>
                </div>
            </div>

            <div class="flex lg:flex-row flex-col lg:items-center justify-start">
                <div class="btn-selengkapnya lg:mt-0 mt-2">
                    <button class="bg-red-500 hover:bg-green-700 focus:bg-green-700 focus:ring-4 focus:ring-green-200 focus:outline-none rounded px-6 py-2 shadow flex items-center leading-thight">
                        <svg class="w-4 mt-1 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                        <span class="block text-white font-semibold">Tambah</span>
                    </button>
                </div>
                <div class="search flex items-center w-full lg:my-8 my-2 lg:px-2">
                    <button class="bg-red-500 hover:bg-green-700 focus:bg-green-700 focus:ring-4 focus:ring-green-200 focus:outline-none text-white flex items-center px-4 py-2 rounded-tl rounded-bl w-1/3 shadow leading-thight">
                        <span class="block mr-2 font-semibold text-md">Search</span>
                        <svg class="w-5 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <input 
                        type="search" 
                        class="w-full rounded-tr rounded-br py-2 shadow-sm focus:outline-none focus:shadow-inner px-2"
                        placeholder="Masukkan kata kunci...">
                </div>
            </div>

        </div>

        <!-- ############ FORM PROJEk ############# -->
        <div class="form-project mt-8 bg-gray-200">
            <!-- TAMBAHKAN DOKUMEN -->
            <div class="tambahkan-dokumen w-full my-4 justify-between bg-indigo-50">
                <div class="bg-white shadow-lg rounded pb-1">
                    <div class="title text-purple-600 text-base font-bold px-4 py-3 rounded-t bg-gray-100">
                        Tambah Project
                    </div>

                    <div class="txt-area px-4 py-6">
                        <label for="" class="font-semibold text-gray-400">Title</label>
                        <input
                            type="text"
                            placeholder="Enter project title" 
                            name="" 
                            id="" 
                            class="w-full shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent my-1 rounded font-semibold px-2 py-2">
                    </div>

                    <div class="txt-area px-4 pb-6">
                        <label for="" class="font-semibold text-gray-400">Description</label>
                        <textarea
                            placeholder="Deskripsi dokumen..." 
                            name="" 
                            id="" 
                            rows="5" 
                            class="w-full shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent my-1 rounded font-semibold px-2">
                        </textarea>
                    </div>

                    <div class="txt-area px-4">
                        <label for="" class="font-semibold text-gray-400">Project Brief</label>
                        <textarea
                            placeholder="Type project brief" 
                            name="" 
                            id="" 
                            rows="5" 
                            class="w-full shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent my-1 rounded font-semibold px-2">
                        </textarea>
                    </div>

                    <div class="start-date px-4 pt-6 flex lg:flex-row flex-col lg:items-center justify-start w-full">
                        <div class="lg:w-1/2 lg:mr-4">
                            <label for="" class="font-semibold text-gray-400">Start Date</label>
                            <input
                                type="text"
                                placeholder="Enter project title" 
                                name="" 
                                id="" 
                                class="w-full shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent my-1 rounded font-semibold px-2 py-2"
                            >
                        </div>
                        <div class="lg:w-1/2">
                            <label for="" class="font-semibold text-gray-400">Completed Date</label>
                            <input
                                type="text"
                                placeholder="Enter project title" 
                                name="" 
                                id="" 
                                class="w-full shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent my-1 rounded font-semibold px-2 py-2"
                            >
                        </div>                        
                    </div>

                    <div class="status px-4 py-6 flex lg:flex-row flex-col lg:items-center justify-start w-full">
                        <div class="lg:w-1/2 lg:mr-4">
                            <label for="" class="font-semibold text-gray-400">Status</label>
                            <select
                                type="text"
                                placeholder="Enter project title" 
                                name="" 
                                class="w-full shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent my-1 rounded font-semibold px-2 py-2 text-gray-400"
                            >
                                <option value="active">Active</option>
                                <option value="disable">Disable</option>
                            </select>
                        </div>
                        <div class="lg:w-1/2">
                            <label for="" class="font-semibold text-gray-400">Company</label>
                            <select
                                type="text"
                                placeholder="Enter project title" 
                                name="" 
                                class="w-full shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent my-1 rounded font-semibold px-2 py-2 text-gray-400"
                            >
                                <option value="active">Gojek</option>
                                <option value="disable">Company 1</option>
                                <option value="disable">Company 2</option>
                            </select>
                        </div>
                    </div>

                    <div class="attachment px-4 py-8 grid lg:grid-cols-3 w-full">
                        <div class="border lg:px-2 px-1 py-2 lg:my-0 my-1 rounded lg:mr-2">
                            <label for="" class="font-semibold text-gray-400">Attachment 1</label>
                            <input type="file" name="" id="" class="rounded text-sm">
                        </div>
                        <div class="border lg:px-2 px-1 py-2 lg:my-0 my-1 rounded lg:mr-2">
                            <label for="" class="font-semibold text-gray-400">Attachment 2</label>
                            <input type="file" name="" id="" class="rounded text-sm">
                        </div>
                        <div class="border lg:px-2 px-1 py-2 lg:my-0 my-1 rounded mr">
                            <label for="" class="font-semibold text-gray-400">Attachment 3</label>
                            <input type="file" name="" id="" class="rounded text-sm">
                        </div>
                    </div>

                    <div class="select-file flex lg:flex-row flex-col lg:items-center justify-start py-4 px-4 mb-4">
                        <button class="bg-red-400 hover:bg-green-700 focus:bg-green-700 focus:ring-4 focus:ring-green-200 focus:outline-none flex justify-center px-4 items-center py-1 rounded cursor-pointer lg:mr-4 lg:my-0 my-2">
                            <svg class="w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path></svg>
                            <span class="font-semibold text-white text-sm ml-2 leading-loose">Simpan Project</span>
                        </button>
                        <button
                            @click="canceling" 
                            class="bg-gray-100 px-4 py-1 rounded hover:bg-gray-300 focus:bg-gray-300 focus:ring-4 focus:ring-gray-200 focus:outline-none flex items-center justify-start">
                            <svg class="w-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            <span class="font-semibold text-gray-600 text-sm leading-loose" >Cancel</span>
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
export default {
    // components: {
    //     HeaderComponent,
    //     FooterComponent
    // },
    data() {
        return {
            
        }
    },
    methods: {
        canceling(){
            this.$router.go(-1);
        }
    },
}
</script>