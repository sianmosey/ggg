export default {
    name: 'ErrorPage',

    created() {
        console.log('hit a route that does not exist');
        
        //tell this function what the Vue instance is 

        let vm = this;

        setTimeout(function() {
            vm.redirectUser();
        }, 3000);
    },

    methods: {
        redirectUser() {
            this.$router.push({ name: 'home' });
        }
    },

    template: `<h1>That page doesn't exist!</h1>`
}