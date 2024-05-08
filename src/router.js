
import {createRouter, createWebHistory} from "vue-router";
import theHomeComponent from "./components/the-home.component.vue";
import theDrinkwareComponent from "./components/the-drinkware.component.vue";
import theAccessoriesComponent from "./components/the-accessories.component.vue";
import theSidebarComponent from "./components/the-sidebar.component.vue";
import PageNotFoundComponent from "./components/page-not-found.component.vue";

const router=createRouter({

    history: createWebHistory(),
    routes: [
        {path:'/', component:theHomeComponent},
        {path:'/the-sidebar', component:theSidebarComponent},
        {path:'/the-drinkware', component:theDrinkwareComponent},
        {path:'/the-accessories', component:theAccessoriesComponent},

        { path: '/:catchAll(.*)', component: PageNotFoundComponent } // Page Not Found route


    ]


})

export default router;