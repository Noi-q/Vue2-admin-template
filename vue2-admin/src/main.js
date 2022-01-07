import Vue from 'vue'
import App from './App.vue'

// vuex
import store from './store'

// vue-router
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
  TableColumn,
  Form,
  FormItem,
  Select,
  Option,
  // Col,
  Switch,
  CheckboxGroup,
  Checkbox,
  Radio
 } from 'element-ui';


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
Vue.component(Form.name,Form)
Vue.component(FormItem.name,FormItem)
Vue.component(Select.name,Select)
Vue.component(Option.name,Option)
// Vue.component(Col.name,Col)
Vue.component(Switch.name,Switch)
Vue.component(CheckboxGroup.name,CheckboxGroup)
Vue.component(Checkbox.name,Checkbox)
Vue.component(RadioGroup.name,RadioGroup)
Vue.component(Radio.name,Radio)

new Vue({
  render: h => h(App),
  router:router,
  store:store
}).$mount('#app')
