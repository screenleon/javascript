var eventBus = new Vue();

Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `
        <div class="product">
            <div class="product-image">
                <img :src="image" />
            </div>

            <div class="product-info">
                <h1>{{ product }}</h1>
                <p v-if="inStock">In Stock</p>
                <p v-else>Out of Stock</p>
                <p>Shipping: {{ shipping }}</p>
                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>
                <div v-for="(variant, index) in variants" :key="variant.variantId" class="color-box"
                    :style="{ backgroundColor: variant.variantColor }"
                    @mouseover="updateProduct(index)">
                </div>
                <button v-on:click="addToCart" :disabled="!inStock" 
                       :class="{ disabledButton: !inStock }">Add to cart</button>
            </div>

            <product-tabs :reviews="reviews"></product-tabs>


        </div>  
    `,
    data() {
        return {
            product: 'Socks',
            description: 'introduce to vue.js',
            selectVariantIndex: 0,
            amount: 8,
            details: ["80% cotton", "20% polyester", "Gender-neutral"],
            variants: [
                {
                    variantId: 2234,
                    variantColor: 'green',
                    variantImageUrl: './assets/vmSocks-green-onWhite.jpg',
                    variantQuantity: 50
                },
                {
                    variantId: 2235,
                    variantColor: "blue",
                    variantImageUrl: './assets/vmSocks-blue-onWhite.jpg',
                    variantQuantity: 0
                }
            ],
            reviews: []
        }
    },
    methods: {
        addToCart: function () {
            this.$emit('add-to-cart', this.variants[this.selectVariantIndex].variantId);
        },
        updateProduct: function (index) {
            this.selectVariantIndex = index;
            // this.imageUrl = this.variants[index].variantImageUrl;
        }
    },
    computed: {
        image() {
            return this.variants[this.selectVariantIndex].variantImageUrl;
        },
        inStock() {
            return !!this.variants[this.selectVariantIndex].variantQuantity;
        },
        shipping() {
            if (this.premium) {
                return "Free";
            } else {
                return 2.99;
            }
        }
    },
    mounted(){
        eventBus.$on('review-submitted', productReview => {
            this.reviews.push(productReview);
        })
    }
})

Vue.component('product-review', {
    template: `
        <form class="review-form" @submit.prevent="onSubmit">
            <p v-if="errors.length">
                <b>Please correct the following error(s): </b>
                <ul>
                    <li v-for="error in errors">{{ error }}</li>
                </ul>
            </p>

            <p>
                <label for="name">Name: </label>
                <input id="name" v-model="name">
            </p>

            <p>
                <label for="review">Review: </label>
                <textarea id="review" v-model="review"></textarea>
            </p>

            <p>
                <label for="rating">Rating: </label>
                <select id="rating" v-model="rating">
                    <option>5</option>
                    <option>4</option>
                    <option>3</option>
                    <option>2</option>
                    <option>1</option>
                </select>
            </p>

            <p>
                <input type="submit" value="submit">
            </p>
        </form>
    `,
    data() {
        return {
            name: null,
            review: null,
            rating: null,
            errors: []
        }
    },
    methods: {
        onSubmit: function () {
            this.errors = [];
            if (this.name && this.review && this.rating) {
                let productReview = {
                    name: this.name,
                    review: this.review,
                    rating: this.rating
                };

                eventBus.$emit('review-submitted', productReview);
                this.name = "";
                this.review = "";
                this.rating = "";
                return;
            } else {
                if (!this.name) this.errors.push('Name Required.');
                if (!this.review) this.errors.push('Review Required.');
                if (!this.rating) this.errors.push('Rating Required.');
            }

        }
    }
})

Vue.component('product-tabs', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template: `
        <div>
            <span class="tab" 
                  v-for="(tab, index) in tabs" 
                  :key="index" 
                  @click="selectedTab = tab" 
                  :class="{ activeTab: selectedTab === tab}">
                {{ tab }}
            </span>

            <div v-show="selectedTab === 'Reviews'">
                <h2>Reviews</h2>
                <p v-if="!reviews.length">There are no reviews yet.</p>
                <ul>
                    <li v-for="review in reviews">
                    <p>{{ review.name }}</p>
                    <p>Review: {{ review.review }}</p>
                    <p>Rating: {{ review.rating }}</p>
                    </li>
                </ul>
            </div>
            <product-review v-show="selectedTab === 'Make a Review'"></product-review>
        </div>
    `,
    data() {
        return {
            tabs: ['Reviews', 'Make a Review'],
            selectedTab: 'Reviews'
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        premium: true,
        cart: []
    },
    methods: {
        updateCart: function (_id) {
            this.cart.push(_id);
        }
    }
})
