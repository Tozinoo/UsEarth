import React from "react";
import "./ProductScreen.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { getProductDetails } from "../../../actions/productActions";
import { addToCart } from "../../../actions/cartAction";

const ProductScreen = ({ match, history }) => {
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();
    const productDetails = useSelector((state) => state.getProductDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        if (product && match.params.id !== product._id) {
            dispatch(getProductDetails(match.params.id));
        }
    }, [dispatch, match, product]);
    const user = useSelector((state) => state.user);
    console.log(user);

    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty));
        history.push(`/mypage`);
    };

    return (
        <div className="productscreen">
            {loading ? (
                <h2>Loading...</h2>
            ) : error ? (
                <h2>{error}</h2>
            ) : (
                <>
                    <div className="productscreen_left">
                        <div className="left_image">
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                            ></img>
                        </div>
                    </div>
                    <div className="left_info">
                        <p className="left_name">{product.name}</p>
                        <p>가격: {product.price}</p>
                        <p>
                            상품 설명:
                            <p className="product_description">
                                {" "}
                                {product.description}
                            </p>
                        </p>
                    </div>
                    <div className="productscreen_right">
                        <div></div>
                    </div>
                    <div className="right_info">
                        <p>
                            가격:<span>{product.price}</span>
                        </p>
                        <p>
                            상태:
                            <span>
                                {product.countInStock > 0
                                    ? "구매가능"
                                    : "구매불가능"}
                            </span>
                        </p>
                        <p>
                            수량
                            <select
                                value={qty}
                                onChange={(e) => setQty(e.target.value)}
                            >
                                {[...Array(product.countInStock).keys()].map(
                                    (x) => (
                                        <option key={x + 1} value={x + 1}>
                                            {x + 1}
                                        </option>
                                    )
                                )}
                            </select>
                        </p>
                        <p>
                            <button type="button" onClick={addToCartHandler}>
                                장바구니 넣기
                            </button>
                        </p>
                    </div>
                </>
            )}
        </div>
    );
};

export default withRouter(ProductScreen);
