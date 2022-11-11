export const PRODUCTS_REQUEST = 'PRODUCTS_REQUEST'
export const PRODUCTS_RESPONSE = 'PRODUCTS_RESPONSE'
export const PRODUCTS_SELECT = 'PRODUCTS_SELECT'

export const productsRequest = () =>({
    type: PRODUCTS_REQUEST
})

export const productsResponse = ()=> ({
    type: PRODUCTS_RESPONSE
})

export const productSelect = ()=> ({
    type: PRODUCTS_SELECT
})

