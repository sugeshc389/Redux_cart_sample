import { useSelector } from "react-redux";
import AfterCart from "./AfterCart";
import BeforeCart from "./BeforeCart";


const CartButtons = ({ product }) => {
    const { cartList } = useSelector((state) => state.cart)
    const cartCount = cartList?.find((item) => item?.id === product?.id)?.count;

    console.log('cartCount:', cartList);
    return (
        <>
            {
                cartCount > 0 ?
                    <AfterCart productID={product?.id} cartCount={cartCount} />
                    :
                    <BeforeCart product={product} />
            }
        </>
    )
}

export default CartButtons;