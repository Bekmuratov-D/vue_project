
import { createRouter, createWebHistory } from "vue-router";
import NewsPage from "@/pages/NewsPage";
import MainPage from "@/pages/MainPage";
import DetailedPage from "@/pages/DetailedPage";
import PhotosPage from "@/pages/PhotosPage";
import LoginPage from "@/pages/LoginPage";
import ProfilePage from "@/pages/ProfilePage";


const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/news',
        component: NewsPage
    },
    {
        path: '/news/:id',
        component: DetailedPage
    },
    {
        path: '/photo',
        component: PhotosPage
    },
    {
        path: '/login',
        component: LoginPage
    },
    {
        path: '/user',
        component: ProfilePage
    }
]


const router = createRouter( {
    routes,
    history: createWebHistory()
})

export default router;
