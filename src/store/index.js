import NameStore from './Name';
import SearchStore from './Search';

class Store {
  constructor() {
    this.nameStore = null;
    this.searchStore = null;
  }

  static initilize() {
    this.nameStore =  NameStore.create({ name: 'olawale', status: true });
    this.searchStore = SearchStore.create({state: 'inactive'});
  }

  static getAll() {
    return {
      name: this.nameStore,
      search: this.searchStore,
    }
  }

}

export default Store;

