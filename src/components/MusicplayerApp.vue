<template>
    <div>
        <div class="header_nav_wrapper">
            <NavigationComponent/>
            <HeaderComponent/>
        </div>
        <div class="main">
            <div class="main_wrapper">
                <MusicListComponent/>
                <CategoriesRandomComponent/>
                <!-- <ArtistsRandomComponent/> -->
            
         
            </div>
       
        </div>
    </div>
</template>

<script>
import axios, { Axios } from 'axios';
import HeaderComponent from './Header/HeaderComponent.vue'
import MusicListComponent from './Main/MusicListComponent.vue'
import NavigationComponent from './Header/NavigationComponent.vue'
import CategoriesRandomComponent from './Main/CategoriesRandomComponent.vue'



export default {
    name: 'MusicplayerApp',
    components: {
        HeaderComponent,
        MusicListComponent,
        NavigationComponent,
        CategoriesRandomComponent
     
    }
}

</script>

<style lang="scss" src="./MusicplayerApp.scss">

   
    
</style>