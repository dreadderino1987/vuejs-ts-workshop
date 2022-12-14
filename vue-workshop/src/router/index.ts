import {
  type RouteRecordRaw,
  createRouter,
  createWebHistory,
} from "vue-router";

import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import BookListDetails from "@/views/BookListDetails.vue";
import BookList from "@/components/BookList.vue";
import BookEdit from "@/views/BookEdit.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/books",
  },
  {
    path: "/books",
    name: "books",
    component: HomeView,
  },
  {
    path: "/bookslist",
    name: "bookslist",
    component: BookList,
  },
  {
    path: "/books/:isbn",
    name: "booksdetails",
    component: BookListDetails,
    props: true,
  },
  {
    path: "/books/:isbn",
    name: "bookedit",
    component: BookEdit,
    props: true,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
