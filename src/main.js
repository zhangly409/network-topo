import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import '@/style/index.scss'
import _ from 'lodash'

// Element UI 按需引入
import {
  Table,
  TableColumn,
  Breadcrumb,
  BreadcrumbItem,
  Container,
  Header,
  Footer,
  Aside,
  Main,
  Menu,
  Submenu,
  MenuItem,
  Link,
  Message,
} from 'element-ui'
Vue.prototype._ = _
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 }
Vue.prototype.$message = Message
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Container)
Vue.use(Header)
Vue.use(Footer)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Link)
new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
