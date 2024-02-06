import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import AddCategory from '../views/Category/AddCategory.vue'
import EditCategory from '../views/Category/EditCategory.vue'
import Category from '../views/Category/Category.vue'
import Admin from '../views/AdminPage.vue'
import Product from '../views/product/ProductPage.vue'
import AddProduct from '../views/product/AddProduct.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
  path: '/admin/category/add',
  name: 'AddCategory',
  component: AddCategory
  },
  {
    path: '/admin/category',
    name: 'Category',
    component: Category
  },
  {
    //path: 'admin/category/:id',
    path: 'admin/category/EditCategory',
    name: 'EditCategory',
    component: EditCategory
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/admin/product',
    name: 'AdminProduct',
    component: Product
  },
  {
    path: '/admin/product/add',
    name: 'AddProduct',
    component: AddProduct
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
