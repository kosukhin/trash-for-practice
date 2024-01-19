import Vue2 from 'vue2App/vue2';
import {defineCustomElement,h} from 'vue'

function bindSlotContext(target = {}, context) {
  return Object.keys(target).map(key => {
    const vnode = target[key];
    vnode.context = context;
    return vnode;
  });
}

/*
 * Transform vue2 components to DOM.
 */
export function vue2ToVue3(WrapperComponent, wrapperId, stylesModule) {

  if (customElements.get(wrapperId)) {
    return;
  }

  let vm;
  const customElement = defineCustomElement({
    props: WrapperComponent.props,
    mounted() {
      console.log('styles module', stylesModule)
      console.log('nw root', this.$el.parentNode)
      //stylesModule.__inject__(this.$el.parentNode)
      const slots = bindSlotContext(this.$slots, this.__self);
      vm = new Vue2({ render: createElement => {
        const element = createElement(
          WrapperComponent,
          {
            on: this.$attrs,
            attrs: this.$attrs,
            props: this.$props,
            scopedSlots: this.$scopedSlots,
          },
          slots,
        );
        return element;
      }});
      vm.$options.shadowRoot = this.$el.parentNode
      vm.$mount(this.$refs[wrapperId]);
      vm && vm.$forceUpdate();
      setTimeout(() => {
        console.log('vm', vm)
      }, 3000)
    },
    beforeDestroy() {
      vm && (vm = undefined);
    },
    render() {
      return h('div', {}, [
        h('div', { ref: wrapperId }),
      ]);
    },
  });

  console.log(customElement);
  customElements.define(wrapperId, customElement);
}
