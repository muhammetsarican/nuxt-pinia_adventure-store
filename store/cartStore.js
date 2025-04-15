import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', {
    state: () => ({
        cart: [],
        baseUrl: "http://localhost:4000/cart"
    }),
    getters: {
        cartTotal() {
            return this.cart.reduce((total, product) => total + (product.price * product.quantity), 0);
        }
    },
    actions: {
        async getCart() {
            const data = await $fetch(this.baseUrl);
            this.cart = data;
            console.log(this.cart);
        },
        async deleteFromCart(product) {
            console.log(product);
            this.cart = this.cart.filter(cartItem => cartItem.id !== product.id);

            const res = await $fetch(`${this.baseUrl}/${product.id}`, {
                method: "DELETE"
            });

            if (res.error) console.log(res.err);
        },
        async incQuantity(id) {
            this.cart = this.cart.map(cartItem => {
                if (cartItem.id === id) cartItem.quantity += 1;
                return cartItem;
            });

            const res = await $fetch(`${this.baseUrl}/${id}`, {
                method: "put",
                body: JSON.stringify(this.cart.find(cartItem => cartItem.id === id))
            })

            if (res.error) console.log(res.err);
        },
        async decQuantity(id) {
            this.cart = this.cart.map(cartItem => {
                if (cartItem.id === id) cartItem.quantity -= 1;
                return cartItem;
            });

            const res = await $fetch(`${this.baseUrl}/${id}`, {
                method: "put",
                body: JSON.stringify(this.cart.find(cartItem => cartItem.id === id))
            })

            if (res.error) console.log(res.err);
        }
    }
})