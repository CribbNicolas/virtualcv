import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { MainStore } from './state';

const getters: GetterTree<MainStore, StateInterface> = {
  headerHeight ({ headerHeight }) {
    return headerHeight
  }
};

export default getters;
