import Vue from 'vue';
import Vuex from "vuex";

Vue.use(Vuex);

const allVuexStores = Object.assign({},
    // Add Vuex store store....
  );
  
  
  const createStore = () => {
    return new Vuex.Store({
      modules: allVuexStores
    })
  }
  
  export default createStore