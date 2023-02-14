// imports always go at the top
import LogInPage from './modules/LoginPage.js';
import HomePage from './modules/HomePage.js';
import ErrorPage from './modules/ErrorPage.js';

const { createApp } = Vue;
// import the createApp method from the Vue library

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        // the vue router will try to match these routes
        // this is what you put in the location bar in the browser

        // 2=>when you get a match, vue will render the specified component 
        // into the router view tag in index.html
        { 
            path: '/', // browser location bar looks like this
            name: 'login', // for programmatic navigation
            component: LogInPage // the component to render
        },
        { 
            path: '/home', // brower location bar looks like this
            name: 'home', // for programmatic navigation
            component: HomePage // the component to render
        },
        // put a catch all for broken routes at the very bottom of your routes stack
        // if Vue Router can't match a give route , it will display a generic error component
        {
            path: '/:pathMatch(.*)*', 
            name: 'error', 
            component: ErrorPage 
        }
        
    ]
  })
  
  // 5. Create and mount the root instance.
  const app = Vue.createApp({
    methods: {
        tryRouterPush(){
            // programatic routing
            this.$router.push({
                name: 'home'
            })
        }
    }
  });
  // Make sure to _use_ the router instance to make the
  // whole app router-aware.
  app.use(router);
  
  app.mount('#app');
  