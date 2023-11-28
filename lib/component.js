class Component {
  constructor(children = []) {
    this.children = children;
  }
  render() {
    throw new Error('Child class must implement a render() method.');
  }
};

module.exports = Component;
