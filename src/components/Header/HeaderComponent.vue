<template>
    <div>
        <header class="header">
           <div class="search_block">
                <input @keyup.enter="createMusicList" v-model="searchQuery" type="search" class="search_input" placeholder=" Search...">
                <span v-show="this.isError" class="error">Oops..Not found, try again!</span>
            </div>
            <div class="user_block">
                <a href="#">
                    <span class="icon icon-airplayvideo"></span>
                </a>
                <a href="#">
                    <span class="icon icon-bell"></span>
    
                </a>
               
                <div class="user_info">
                    <a href="#" class="user_name_wrapper">
                        <span class="user_name">Jeremy Smitterspooner</span>
                        <span class="user_status">Music Hub premium</span>
                    </a>
                
                    <a href="#" class="user_avatar">
                        <img src="../../assets/img/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper.png" alt="user photo">
                    </a>
                </div>
            </div>  
        </header>
    </div>
</template>

<script>
import { tSExpressionWithTypeArguments } from '@babel/types';
import axios, { Axios } from 'axios';
import { mapActions, mapGetters} from 'vuex';


export default {
    name: 'header-component',
    data () {
        return {
            searchQuery: '',
            musicSearchList: [],
            isError: false
        }
    },
    methods: {
        
        ...mapActions(['fetchMusic']),
        createMusicList() {
            this.fetchMusic(this.searchQuery);
            this.searchQuery = '';
        }, 
    },

}
</script>

<style scoped lang="scss" src="./HeaderComponent.scss">
    
</style>