import UInput from './UInput.vue';
import UImg from './UImg.vue';
import URadio from './URadio.vue';
import UButton from './UButton.vue';

const components = [
  {name: 'UInput', component: UInput},
  {name: 'UImg', component: UImg},
  {name: 'URadio', component: URadio},
  {name: 'UButton', component: UButton}
]
export default {
  install(app) {
    components.forEach(({name, component}) => {
      app.component(name, component)
    })
  }
}
