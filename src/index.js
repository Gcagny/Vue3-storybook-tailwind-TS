import components from'./components/components';
import directives from './directives.directives'

const plugin = {
  install (Vue) {
    for (const propComponent in components) {
      if (components.hasOwnProperty(propComponent)) {
        const component = components[propComponent]
        Vue.component(component.name, component)
      }
    }
    for (const propDirective in directives) {
      console.log(propDirective);
      if (directives.hasOwnProperty(propDirective)) {
        const directive = directives[propDirective]
        console.log(directive);
        Vue.directive(propDirective, ripple);      }
    }
  }
}

export default plugin