<template>
    <div class="fast_music_list"  >
        <ul  class="music_search_list">
            <li class="search_item"  v-for="track in AllMusicSearchList" :key="track.id">
                <div class="item_text">
                    <img class="icon_note"  src="../../assets/img/MusicNote.svg" alt="">
                    <p class="title">{{track.artist.name}} - {{track.title}}</p>
                </div>
                <div class="item_icons">
                    <button class="download"><span class="icon-arrow-down"></span></button>
                    <button v:on="openModal" @click="showModal = track.id" class="info"><span class="icon-info"></span></button>
                </div>
                <modal v-if="showModal === track.id" @close="showModal = false" class="modal" @click="closeModal">
                    <div class="modal_content">
                        <button @click="closeModal"  class="close_modal"><span class="icon-cancel-circle"></span></button>
                        <div class="info_wrapper">
                            <div class="track_info"> 
                                <p class="artist"><span>Artist: </span>{{track.artist.name}}</p>
                                <p class="track_title"><span>Track: </span>{{track.title}}</p>
                                <p class="album_title"><span>Album: </span>{{track.album.title}}</p>
                            </div>
                            <div class="track_img">
                                <img src="./../../assets/img/categories-hits.jpg" alt="">
                            </div>
                        </div>
                   

                       
                       
                        

                  
                    </div>
                 
                    <!-- <img src="{{track.album.picture_small}}" alt=""> -->
                </modal>
            </li>
       
            
        </ul>
      
    </div>
</template>

<script>
import musicSearchList from '@/store/modules/musicSearchList';
import { mapGetters, mapActions} from 'vuex';



export default {
    name: 'MusicListComponent',
    
    data () {
        return {
            showModal: true,
        }
    },
    mounted(){
      
    },
    computed: {
        ...mapGetters(['AllMusicSearchList'])
    },
    methods: {
        openModal() {
            this.showModal = false;
        },
        closeModal() {
            this.showModal = true;
        },

    },
 
    
  
}



</script>

<style scoped lang="scss" src="./MusicListComponent.scss">
    
</style>