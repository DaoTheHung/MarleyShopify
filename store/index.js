import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import { loadingImage } from '../src/components/common/Loading/Loading'
import axios from 'axios'
import configApi from '../config/config'

// Reducer Thunk Product
export const getProducts = createAsyncThunk('products/productsFetched', async () => {
    const res = await axios.get(configApi.API_PRODUCTS)
    return res.data.data
})

export const updateProductsData = createAsyncThunk('products/productsUpdated', async (newProduct) => {
    await axios.put('http://localhost:3080/api/products/update',
        newProduct,
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(res => res.data)
})
//

// Reducer Thunk Cart
export const getCart = createAsyncThunk('products/cartFetched', async () => {
    const res = await axios.get('https://64100ce3864814e5b645d8c5.mockapi.io/api/v1/cart')
    return res.data
})

// Add new product in cart
export const addProduct = createAsyncThunk('products/productAdded', async (newProduct) => {
    await axios.post('https://64100ce3864814e5b645d8c5.mockapi.io/api/v1/cart',
        newProduct,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            return res.data
        })
})

//Update product in cart
export const updateProduct = createAsyncThunk('products/productUpdated', async (id, name, price, quantity, image) => {

})

// Delete product in cart
export const removeProduct = createAsyncThunk('products/productDeleted', async (id) => {
    await axios.delete(`https://64100ce3864814e5b645d8c5.mockapi.io/api/v1/cart/${id}`)
    return id
})
//

// Reducer Thunk Comment
export const getComment = createAsyncThunk('products/commentFetched', async () => {
    const res = await axios.get(`https://64100ce3864814e5b645d8c5.mockapi.io/api/v1/comment`)
    return res.data
})

export const addComments = createAsyncThunk('products/commentAdded', async (newComment) => {
    await axios.post('https://64100ce3864814e5b645d8c5.mockapi.io/api/v1/comment    ',
        newComment,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            return res.data
        })
})


const productSlice = createSlice({
    name: "products",
    initialState: {
        dataCheckout: {},
        allProducts: [],
        cart: [],
        comments: [],
        isDataProduct: false,
    },

    reducers: {
        isData: (state, action) => {
            state.isDataProduct = action.payload
        },
        isCheckout: (state, action) => {
            state.dataCheckout = action.payload
        },

    },
    extraReducers: {
        // Get products
        [getProducts.fulfilled]: (state, action) => {
            state.allProducts = action.payload
        },
        [getProducts.rejected]: (state, action) => {
        },

        // Get cart
        [getCart.fulfilled]: (state, action) => {
            state.cart = action.payload
        },
        [getCart.rejected]: (state, action) => {
        },

        // Add new product in cart
        [addProduct.fulfilled]: (state, action) => {
            state.cart = action.payload
        },
        [addProduct.rejected]: (state, action) => {
        },

        // Update product in cart
        [updateProduct.fulfilled]: (state, action) => {
            state.cart = action.payload
        },
        [updateProduct.rejected]: (state, action) => {
        },

        // Delete product in cart
        [removeProduct.fulfilled]: (state, action) => {
            const id = action.payload
            state.cart = state.cart.filter(product => product.id !== action.payload)
        },

        // Get commtent

        [getComment.fulfilled]: (state, action) => {
            state.comments = action.payload
        },
        [getComment.rejected]: (state, action) => {
        },
        // Add comments

        [addComments.fulfilled]: (state, action) => {
            state.comments = action.payload
        },
        [addComments.rejected]: (state, action) => {
        },

    },

})

// reducer
const product = productSlice.reducer

// Store
const store = configureStore({
    reducer: {
        product,
    }
})

// Selector
export const cartSelector = state => state.product.cart
export const productSelector = state => state.product.allProducts
export const commentsSelector = state => state.product.comments
export const dtCheckoutSelector = state => state.product.dataCheckout
export const isDataSelector = state => state.product.isDataProduct



// Action export
export const { isData } = productSlice.actions
export const { isCheckout } = productSlice.actions


export default store 