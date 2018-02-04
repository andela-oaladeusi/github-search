import { types } from 'mobx-state-tree';

const Name = types.model('Search', {
  name: types.string,
  status: false
}).views(self => ({
  get getName() {
    return `new name is ${self.name}`;
  }
})).actions(self => ({
  addName(name) {
    self.name=name;
    self.state=true;
  }
}))

export default Name;
