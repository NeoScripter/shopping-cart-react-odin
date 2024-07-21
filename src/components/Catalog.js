import React from "react";
import data from "./Data";
import Item from "./Item";
import { useCart } from "../hooks/CartContext";

function Catalog() {
    const { cart, updateItemQuantity } = useCart();

    return (
        <div>
            <h1 className="font-bold text-3xl mb-4 sm:text-4xl md:mb-8" style={{ fontFamily: "Bold" }}>
                Desserts
            </h1>
            <div className="grid sm:grid-cols-2 tablet:grid-cols-3 gap-4">
                {cart.map((dessert) => (
                    <Item
                        key={dessert.id}
                        image={dessert.image}
                        title={dessert.title}
                        description={dessert.description}
                        price={dessert.price}
                    />
                ))}
            </div>
        </div>
    );
}

export default Catalog;
