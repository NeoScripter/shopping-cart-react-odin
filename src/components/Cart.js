import React, { useState } from "react";
import emptyCart from "../assets/svgs/emptyCart.svg";
import removeItem from "../assets/svgs/removeItem.svg";
import carbonNeutral from "../assets/svgs/carbonNeutral.svg";
import orderConfirmed from "../assets/svgs/orderConfirmed.svg";
import { useCart } from "../hooks/CartContext";

export default function Cart() {
    const { extractAddedItems } = useCart();
    const [popupState, setPopupState] = useState(false);
    const [totalItems, addedItems] = extractAddedItems();
    const isEmpty = totalItems === 0;

    function showPopup() {
        setPopupState(true);
    }

    function hidePopup() {
        setPopupState(false);
    }

    return (
        <div className="bg-white rounded-xl p-6 pb-8 md:w-96 flex-shrink-0 mt-4">
            <h2 className="color-orange bold-red-head text-3xl pb-4">Your cart ({totalItems})</h2>
            {isEmpty ? <EmptyCart /> : <FullCart items={addedItems} showPopup={showPopup}/>}
            {popupState && <Popup items={addedItems} hidePopup={hidePopup} />}
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

function FullCart({ items, showPopup }) {
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
                    <div
                        onClick={() => removeItemFromCart(item.id)}
                        className="flex justify-center items-center h-5 w-5 rounded-full border-2 remove-item-color cursor-pointer"
                    >
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
            <button onClick={showPopup} className="bg-color-orange font-bold tracking-wide w-full text-white py-4 rounded-full cursor-pointer mt-4">
                Confirm Order
            </button>
        </>
    );
}

function Popup({ items, hidePopup }) {
    const { emptyCart } = useCart();
    let totalPrice = items.reduce((acc, item) => acc + item.quantity * item.price, 0);
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-2xl p-4 md:p-8 w-full max-w-lg">
                <img className="mb-4 mt-2" src={orderConfirmed} alt="green tick surrounded by green circle"/>
                <h4 className="bold-red-head text-4xl mb-2">Order confirmed</h4>
                <p className="text-gray-400 semi-bold-red-head mb-6">We hope you enjoy your food!</p>
                {items.map((item) => (
                    <div className="flex items-center justify-between w-full py-4 border-b border-gray-300 dark-white-bg-color px-4 rounded-t-md">
                        <img src={item.thumbnail} alt={item.description} className="size-16"/>
                        <div className="mr-auto ml-4  text-sm">
                            <h3 className="mb-1 semi-bold-red-head text-sm">{item.description}</h3>
                            <div className="flex gap-8 items-center font-bold">
                                <div className="color-orange font-bold">{item.quantity}x</div>
                                <div className="text-gray-400">@{item.price}</div>
                            </div>
                        </div>
                        <div className="text-black bold-red-head text-lg">${item.quantity * item.price}</div>
                    </div>
                ))}
                <div className="flex items-center justify-between w-full py-4 dark-white-bg-color px-4 rounded-b-md">
                    <div className="font-bold text-gray-500">Order Total:</div>
                    <div className="bold-red-head text-2xl">${totalPrice}</div>
                </div>
                <button onClick={() => {emptyCart(); hidePopup()}} className="bg-color-orange font-bold tracking-wide w-full text-white py-4 rounded-full cursor-pointer mt-8">
                    Start New Order
                </button>
            </div>
        </div>
    );
}
