import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { MainStore } from './state';

const actions: ActionTree<MainStore, StateInterface> = {
  setHeaderHeight ({ commit }, newHeight) {
    commit('SET_HEADER_HEIGHT',  newHeight)
  }
};

export default actions;
