import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { MainStore } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const main: Module<MainStore, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default main;
