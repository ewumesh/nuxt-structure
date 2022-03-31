import TestService from '@/services/main';
import {getField, updateField} from "vuex-map-fields";

const authModule = {

    namespaced: true,
  
    state: {
      // define property
      // test:true
    },
  
    getters: {
  
      getField,
  
    //   GET_TEST(state) {
    //     return state.test;
    //   }
  
    },
  
    mutations: {
  
      updateField,
  
    //   SET_TEST(state, payload) {
    //     state.test = payload;
    //   }
  
    },
  
    actions: {
  
      test({commit}, payload) {
  
        return new Promise((resolve, reject) => {
  
            TestService.test(payload).then((response) => {
  
            commit("TEST", response.data);
    
            resolve(response.data);
  
          }).catch(error => {
  
            reject(error);
  
          })
  
        });
  
      },
  
    }
  }
  
  export default testModule;
  