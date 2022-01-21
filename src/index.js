import components from'./components'
console.log(components);
const plugin = {
  install (Vue) {
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        console.log(prop);
        const component = components[prop]
        console.log(component);
        Vue.component(component.name, component)
      }
    }
  }
}

export default plugin