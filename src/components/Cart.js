import React from "react";
import emptyCart from "../assets/svgs/emptyCart.svg";
import removeItem from "../assets/svgs/removeItem.svg";
import carbonNeutral from "../assets/svgs/carbonNeutral.svg";
import { useCart } from "../hooks/CartContext";

export default function Cart() {
    const { extractAddedItems } = useCart();
    const [totalItems, addedItems] = extractAddedItems();
    const isEmpty = totalItems === 0;

    return (
        <div className="bg-white rounded-xl p-6 pb-8 md:w-96 flex-shrink-0 mt-4">
            <h2 className="color-orange bold-red-head text-3xl pb-4">Your cart ({totalItems})</h2>
            {isEmpty ? <EmptyCart /> : <FullCart items={addedItems} />}
        </div>
    );
}

function EmptyCart() {
    return (
        <>
            <img className="w-1/2 mx-auto my-4" src={emptyCart} alt="A brown cake with a slice cut off" />
            <p className="font-semibold text-sm text-center cake-color">Your added items will appear here</p>
        </>
    );
}

function FullCart({ items }) {
    const { removeItemFromCart } = useCart();
    let totalPrice = items.reduce((acc, item) => acc + item.quantity * item.price, 0);

    return (
        <>
            {items.map((item) => (
                <div className="flex items-center justify-between w-full py-4 border-b border-gray">
                    <div>
                        <h3 className="mb-1 semi-bold-red-head">{item.description}</h3>
                        <div className="flex gap-4 items-center font-bold">
                            <div className="color-orange font-bold">{item.quantity}x</div>
                            <div className="text-gray-400">@{item.price}</div>
                            <div className="text-gray-500">${item.quantity * item.price}</div>
                        </div>
                    </div>
                    <div onClick={() => removeItemFromCart(item.id)} className="flex justify-center items-center h-5 w-5 rounded-full border-2 remove-item-color cursor-pointer">
                        <img src={removeItem} alt="gray close sign" />
                    </div>
                </div>
            ))}
            <div className="flex items-center justify-between w-full py-4">
                <div className="font-bold text-gray-500">Order Total:</div>
                <div className="bold-red-head text-2xl">${totalPrice}</div>
            </div>
            <div className="flex items-center justify-center gap-2 my-2 rounded-xl dark-white-bg-color py-4">
                <img src={carbonNeutral} alt="Green small cloud" />
                <div>
                    This is a <span className="font-bold text-sm">carbon-neutral</span> delivery
                </div>
            </div>
            <button className="bg-color-orange font-bold tracking-wide w-full text-white py-4 rounded-full cursor-pointer mt-4">
                Confirm Order
            </button>
        </>
    );
}
