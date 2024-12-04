import React, { useEffect, useState } from "react";
import productContext from "./ProductContext";
import { products } from '../assets/assets';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ProductState = ({ children }) => {
    const currency = '$';
    const delivery_fee = 10;

    const [Search, setSearch] = useState();
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItem] = useState({});
    const navigate = useNavigate();

    const addToCart = async (itemId, size) => {
        let cartData = structuredClone(cartItems);

        if (!size) {
            toast.error('Select Product Size');
            return;
        }

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItem(cartData);
    };

    const getCartCount = () => {
        let totalCount = 0; // Initialize totalCount here
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        }
        return totalCount;
    };

    const updateQuantity = (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);
    
        if (quantity > 0) {
            cartData[itemId][size] = quantity;
        } else {
            delete cartData[itemId][size];
            if (Object.keys(cartData[itemId]).length === 0) {
                delete cartData[itemId];
            }
        }
    
        setCartItem(cartData);
    };

    
    const getCartAmout = () =>{
        let cartAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items)
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        cartAmount += itemInfo.price * cartItems[items][item];
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        }
        return cartAmount;
    }

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    // Return the provider here
    return (
        <productContext.Provider
            value={{
                products,
                currency,
                delivery_fee,
                Search,
                setSearch,
                showSearch,
                setShowSearch,
                cartItems,
                addToCart,
                getCartCount,
                updateQuantity,
                getCartAmout,
                navigate
            }}
        >
            {children}
        </productContext.Provider>
    );
};

export default ProductState;
