import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";

const ProductDisplay = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/products") // products ke API call
            .then((res) => setProducts(res.data))
            .catch((err) => console.error(err));
    }, []);

    // Group products by category
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
                                <Card className="product-card shadow-sm border-0 rounded-4 overflow-hidden h-100">
                                    <div className="image-wrapper">
                                        <Card.Img
                                            variant="top"
                                            src={product.image || "https://via.placeholder.com/300x200"}
                                            alt={product.name}
                                            className="img-fluid product-image"
                                        />
                                    </div>
                                    <Card.Body className="p-3 d-flex flex-column">
                                        <Card.Title className="fw-bold text-dark mb-2">{product.name}</Card.Title>
                                        <Card.Text className="text-muted small mb-3 flex-grow-1">
                                            {product.description}
                                        </Card.Text>
                                        <Card.Text className="fw-semibold text-primary fs-5 mb-3">
                                            Rs.{product.price}.00
                                        </Card.Text>
                                        <Button variant="dark" className="w-100 rounded-pill mt-auto">
                                            Add to Cart
                                        </Button>
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
