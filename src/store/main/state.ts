export interface MainStore {
  headerHeight: number;
}

function state(): MainStore {
  return {
    headerHeight: 0
  }
};

export default state;
