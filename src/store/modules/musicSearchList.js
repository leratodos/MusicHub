import axios from "axios"

export default {
    actions: {
        fetchMusic(ctx, searchQuery){
            axios.get('https://deezerdevs-deezer.p.rapidapi.com/search?q=' + searchQuery, {
                headers:{
                    'X-RapidAPI-Key': 'c02c0cb68amshdf8203025ace999p1b4af1jsnedffae211399',
                    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
                }
            }).then((res)=>{
                const musicSearchList = res.data.data;
                console.log(musicSearchList);

                if  (musicSearchList && musicSearchList.length > 0) {
                  
                    console.log('OK')

                } else {
                    console.log('ERROR')
       
                };
                ctx.commit('setMusicSearchList', musicSearchList);
            })
        }
    },
    mutations: {
        setMusicSearchList(state, musicSearchList) {
            state.musicSearchList = musicSearchList
        },
   
    },
    state: {
        musicSearchList: [],

    },
    getters: {
        AllMusicSearchList(state) {
            return state.musicSearchList
        },
    },
}