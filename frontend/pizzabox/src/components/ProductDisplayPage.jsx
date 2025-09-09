import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import ProductImage from '../assets/images/product-placeholder.png'; // ✅ fix
import { CiHeart } from "react-icons/ci";

const ProductDisplay = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get("http://localhost:5000/api/products")
            .then((res) => setProducts(res.data))
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, []);
    const addToCart = async (productId) => {
        try {
            const userId = "68abc12345..."; // TODO: Replace with logged-in user ID
            await axios.post("http://localhost:5000/api/cart/add", {
                userId,
                productId,
                quantity: 1,
            });
            toast.success("✅ Added to Cart!");
        } catch (err) {
            console.error(err);
            toast.error("❌ Failed to add to cart");
        }
    };
    const groupedProducts = products.reduce((acc, product) => {
        const categoryName = product.category?.name || "Uncategorized";
        if (!acc[categoryName]) {
            acc[categoryName] = [];
        }
        acc[categoryName].push(product);
        return acc;
    }, {});

    return (
        <div className="container mt-4">
            {Object.keys(groupedProducts).map((category, index) => (
                <div key={index} className="mb-5">
                    <h3 className="mb-3">{category}</h3>
                    <div className="row">
                        {groupedProducts[category].map((product) => (
                            <div className="col-md-3 mb-3" key={product._id}>
                                <Card className="product-card shadow-sm border-0 rounded-4 overflow-hidden h-100 d-flex justify-content-between">
                                    <div className="image-wrapper">
                                        <Card.Img
                                            variant="top"
                                            src={
                                                product.image
                                                    ? `http://localhost:5000${product.image}`
                                                    : ProductImage
                                            }
                                            alt={product.name}
                                            className="img-fluid product-image"
                                        />
                                    </div>
                                    <Card.Body className="p-3 d-flex flex-column">
                                        <Card.Text className="fw-bold text-dark mb-1 d-flex justify-content-center">
                                            {product.name}
                                        </Card.Text>
                                        <Card.Text className="text-muted small mb-3 flex-grow-1 d-flex justify-content-center">
                                            {product.description}
                                        </Card.Text>
                                        <Card.Text className="fw-semibold text-black fs-5 mb-3 rounded-3 px-3 d-inline-block ms-auto">
                                            Rs.{product.price}.00
                                        </Card.Text>

                                        <div className="d-flex justify-content-between align-items-center mt-auto">
                                            {/* Add to Cart (left) */}
                                            <Button
                                                variant="dark"
                                                className="rounded-2 shadow-sm d-flex align-items-center"
                                                onClick={() => addToCart(product._id)}
                                            >
                                                Add to Cart
                                            </Button>

                                            {/* Heart Icon (right) */}
                                            <CiHeart className="heart-icon ms-3" size={24} />
                                        </div>


                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductDisplay;
