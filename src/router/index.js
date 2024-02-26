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
import SignUp from '../views/SignUp.vue'
import SignIn from '../views/SignIn.vue'
import Help from '../views/HelpView.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/help',
    name: 'Help',
    component: Help
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
  {
    path: '/user/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/user/signin',
    name: 'SignIn',
    component: SignIn
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
