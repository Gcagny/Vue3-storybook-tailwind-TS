import components from'./components/components.ts';
import directives from './directives/directives.ts'
// Here is the code called when you use App.use( ... )
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
        Vue.directive(propDirective, directive);
      }
    }
  }
}

export default plugin