import { MutationTree } from 'vuex';
import { MainStore } from './state';

const mutation: MutationTree<MainStore> = {
  SET_HEADER_HEIGHT ( state: MainStore, payload: number) {
    state.headerHeight = payload
  }
};

export default mutation;
