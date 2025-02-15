import {
    createStore
} from 'vuex';

import productModule from './modules/products.js'
import cartModule from './modules/carts.js'

const store = createStore({
    modules: {
        prods: productModule,
        cart: cartModule
    }
});


export default store;