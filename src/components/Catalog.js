import React, { useState, useEffect  } from "react";
import Item from "./Item";
import { useCart } from "../hooks/CartContext";

function Catalog() {
    const { cart, updateItemQuantity } = useCart();
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [itemsToShow, setItemsToShow] = useState(2);

    const loadMoreItems = () => {
        setItemsToShow((prevItemsToShow) => prevItemsToShow + 2);
    };

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setScreenWidth(width);
            width < 540 ? setItemsToShow(2) : setItemsToShow(20);
        };
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
        <div>
            <h1 className="font-bold text-3xl mb-4 sm:text-4xl md:mb-8" style={{ fontFamily: "Bold" }}>
                Desserts
            </h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {cart.slice(0, itemsToShow).map((dessert) => (
                    <Item
                        key={dessert.id}
                        id={dessert.id}
                        image={dessert.image}
                        title={dessert.title}
                        description={dessert.description}
                        price={dessert.price}
                        qnt={dessert.quantity}
                        updateItemQuantity={updateItemQuantity}
                    />
                ))}
            </div>
            {itemsToShow < cart.length && screenWidth <= 640 && (
                <button
                    onClick={loadMoreItems}
                    className="flex justify-between items-center w-max h-4 md:h-8 aspect-ratio-4/1 p-6 mx-auto rounded-full border border-red-800 gap-8 bg-color-orange text-white font-bold border-0 mb-8"
                >
                    Load More
                </button>
            )}
        </div>
    );
}

export default Catalog;
