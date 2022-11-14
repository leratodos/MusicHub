import Vue from 'vue';
import VueX from 'vuex';
import musicSearchList from './modules/musicSearchList';
import core from 'core-js';


// Vue.use(VueX);

export default new VueX.Store({
  modules: {
    musicSearchList
  }

})

// createStore({
//   
//   

//  
//   
// })
