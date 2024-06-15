import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import { loadingImage } from '../src/components/common/Loading/Loading'
import axios from 'axios'
import configApi from '../config/config'

// Reducer Thunk Product
export const getProducts = createAsyncThunk('products/productsFetched', async () => {
    const res = await axios.get(configApi.API_PRODUCTS)
    return res.data
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
    const res = await axios.get(configApi?.API_PRODUCTS)
    return res.data
})

// Add new product in cart
export const addProduct = createAsyncThunk('products/productAdded', async (newProduct) => {
    await axios.post(configApi?.API_PRODUCTS,
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
export const updateProduct = createAsyncThunk('products/productUpdated', async (newProduct) => {
    await axios.put(configApi?.API_PRODUCTS + '/' + newProduct.id,
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

// Delete product in cart

export const removeProduct = createAsyncThunk('products/productDeleted', async (id) => {
    await axios.delete(configApi?.API_PRODUCTS + '/' + id)
    return id
})
// export const removeProduct = createAsyncThunk('products/productDeleted', async (id) => {
//     await axios.delete(`https://64100ce3864814e5b645d8c5.mockapi.io/api/v1/cart/${id}`)
//     return id
// })
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


// login

export const getUsers = createAsyncThunk('accout/usersFetched', async () => {
    const res = await axios.get(configApi.API_USER)
    return res.data
})
export const registerAccount = createAsyncThunk('accout/login', async (dataLogin) => {
    await axios.post(configApi.API_USER,
        dataLogin,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            return res.data
        })
})

export const isLogin = createAsyncThunk('accout/isLogin', async (data) => {
    await axios.put(configApi.API_USER + '/' + data.id,
        {
            login: data.login
        },
        {
            headers: {
                'Content-Type': 'application/json'

            }
        })
        .then(res => res.data)


})

// detail user
export const getUser = createAsyncThunk('accout/usersDetail', async (id) => {
    const res = await axios.get(configApi.API_USER + '/' + id)
    return res.data
})


const productSlice = createSlice({
    name: "products",
    initialState: {
        dataCheckout: {},
        allProducts: [],
        cart: [],
        comments: [],
        login: [],
        isDataProduct: false,
        isUser: false,
        showCart: true,
    },

    reducers: {
        isData: (state, action) => {
            state.isDataProduct = action.payload
        },
        isCheckout: (state, action) => {
            state.dataCheckout = action.payload
        },
        isUser: (state, action) => {
            state.isUser = action.payload
        },
        showCart: (state, action) => {
            state.showCart = action.payload
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
            state.cart = state?.cart?.filter(product => product.id !== id)
        },

        [removeProduct.rejected]: (state, action) => {
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

        // Get users

        [getUsers.fulfilled]: (state, action) => {
            state.login = action.payload
        },
        [getUsers.rejected]: (state, action) => {
        },

        // register
        [registerAccount.fulfilled]: (state, action) => {
            state.login = action.payload
        },

        [registerAccount.rejected]: (state, action) => {
        },

        // isLogin
        [isLogin.fulfilled]: (state, action) => {
            state.login = action.payload
        },

        [isLogin.rejected]: (state, action) => {
        },

        // detail user
        [getUser.fulfilled]: (state, action) => {
            state.login = action.payload
        },

        [getUser.rejected]: (state, action) => {
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
export const loginSelector = state => state.product.login
export const dtCheckoutSelector = state => state.product.dataCheckout
export const isDataSelector = state => state.product.isDataProduct
export const isUserSelector = state => state.product.isUser
export const showCartSelector = state => state.product.showCart



// Action export
export const { isData } = productSlice.actions
export const { isCheckout } = productSlice.actions
export const { isUser } = productSlice.actions
export const { showCart } = productSlice.actions


export default store 