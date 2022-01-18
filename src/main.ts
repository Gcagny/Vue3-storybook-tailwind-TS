import { createApp } from 'vue';
import App from './App.vue';

import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

import ripple from './directives/ripple';
const app = createApp(App);

app.directive("ripple", ripple);
app.mount('#app');


