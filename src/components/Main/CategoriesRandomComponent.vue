<template>
    <div class="categories_wrapper container">
        <div class="categories_random">
            <a @click="createMusicList" href="#" class="categories_list hits">
                <span class="categorie_name">Hits</span>
            </a>
            <a @click="createMusicList" href="#" class="categories_list concentration">
                <span class="categorie_name">Concentration</span>
            </a>
            <a @click="createMusicList" href="#" class="categories_list alternative">
                <span class="categorie_name">Alternative</span>
            </a>
            <a @click="createMusicList" href="#" class="categories_list pop">
                <span class="categorie_name">Pop</span>
            </a>
            <a @click="createMusicList" href="#" class="categories_list jazz">
                <span class="categorie_name">Jazz</span>
            </a>
            <a @click="createMusicList" href="#" class="categories_list party">
                <span class="categorie_name">Party Night</span>
            </a>
       
        </div>
    </div>    
</template>

<script>
import axios from "axios"
import { mapActions} from 'vuex';




export default {
    name: 'CategoriesRandomComponent',
   
    methods: {
        ...mapActions(['fetchMusic']),
        createMusicList() {
        this.fetchMusic('a')
       }
    }
  
}



</script>

<style scoped lang="scss" src="./CategoriesRandom.scss">
    
</style>