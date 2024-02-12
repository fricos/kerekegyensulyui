import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import AddCategory from '../views/Category/AddCategory.vue'
import EditCategory from '../views/Category/EditCategory.vue'
import Category from '../views/Category/Category.vue'
import Admin from '../views/AdminPage.vue'
import Product from '../views/product/ProductPage.vue'
import AddProduct from '../views/product/AddProduct.vue'
import EditProduct from '../views/product/EditProduct.vue'
import ShowDetails from '../views/product/ShowDetails.vue'
import ListProducts from '../views/Category/ListProducts.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
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
  },
  {
    //path: 'admin/category/:id',
    path: '/admin/category/EditCategory',
    name: 'EditCategory',
    component: EditCategory
  },
  {
    //path: 'admin/product/:id',
    path: '/admin/product/EditProduct',
    name: 'EditProduct',
    component: EditProduct
  },
  {
    //path: '/product/show/:id'
    path: '/product/show/details',
    name: 'ShowDetails',
    component: ShowDetails
  },
  {
    //path: '/category/show/:id'
    path: '/category/show/details',
    name: 'ListProducts',
    component: ListProducts
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
