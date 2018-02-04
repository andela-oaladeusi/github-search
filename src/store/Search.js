import { types, flow } from 'mobx-state-tree';
import axios from 'axios';

const Search = types.model('Search', {
  result: types.frozen,
  state: types.enumeration('State', ['pending', 'done', 'error', 'inactive'])
}).views(self => ({
  get getResult() {
    return {
      result: self.result,
      state: self.state
    };
  }
})).actions(self => ({
  searchGitHub: flow(function* searchGitHub() {
    self.state = 'pending';
    try {
      const res = yield axios.get('search/users?q=tom');
      self.result = res.data;
      self.state = 'done';
    } catch(error) {
      console.error("Failed to fetch projects", error)
      self.state = 'error';
    }
  })
}))

export default Search;
