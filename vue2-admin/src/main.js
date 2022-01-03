import Vue from 'vue'
import App from './App.vue'

// vue-router
import VueRouter from 'vue-router';
import router from './router'

// element-ui
import { 
  Card,
  Button,
  Input,
  RadioGroup,
  RadioButton,
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Table,
  TableColumn
 } from 'element-ui';


Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.component(Button.name,Button)
Vue.component(Card.name,Card)
Vue.component(Input.name,Input)
Vue.component(RadioGroup.name,RadioGroup)
Vue.component(RadioButton.name,RadioButton)
Vue.component(Menu.name,Menu)
Vue.component(Submenu.name,Submenu)
Vue.component(MenuItemGroup.name,MenuItemGroup)
Vue.component(MenuItem.name,MenuItem)
Vue.component(Breadcrumb.name,Breadcrumb)
Vue.component(BreadcrumbItem.name,BreadcrumbItem)
Vue.component(Row.name,Row)
Vue.component(Table.name,Table)
Vue.component(TableColumn.name,TableColumn)

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
