export const CART_REMOVE = 'CART_REMOVE'
export const CART_CLEAR = 'CART_CLEAR'
export const CART_ADD = 'CART_ADD'
export const CART_SELECT  = 'CART_SELECT'

export const cartAdd = (value) =>({
    type: CART_ADD,
    value
})

export const cartClear = ()=> ({
    type: CART_CLEAR
})

export const cartRemove = (value)=> ({
    type: CART_REMOVE,
    value
})
export const cartSelect = ()=> ({
    type: CART_SELECT
})