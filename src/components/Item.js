import React from 'react';
import addToCart from '../assets/svgs/addToCart.svg';
import increment from '../assets/svgs/increment.svg';
import decrement from '../assets/svgs/decrement.svg';

function Item({ id, image, title, description, price, qnt, updateItemQuantity }) {
  const inCart = qnt > 0;

  const handleIncrement = () => {
    updateItemQuantity(id, 1);
  };

  const handleDecrement = () => {
    updateItemQuantity(id, -1);
  };

  return (
    <div className='mb-2'>
      <div className='relative mb-8 imageHolder'>
        <img src={image} alt={title} className='object-center object-cover rounded-lg h-full w-full'/>
        {inCart ? 
          <ChangeQuantity quantity={qnt} onIncrement={handleIncrement} onDecrement={handleDecrement} /> : 
          <AddItem onClick={handleIncrement} />
        }
      </div>
      <p className='text-base text-gray-500'>{title}</p>
      <p className='text-lg font-semibold'>{description}</p>
      <p className='text-lg font-semibold color-orange'>{'$' + price}</p>
    </div>
  );
}

function AddItem({ onClick }) {
  return (
    <div onClick={onClick} className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex justify-between items-center w-max h-4 md:h-8 aspect-ratio-4/1 bg-white p-6 rounded-full border border-gray-400 gap-4 cursor-pointer">
      <img src={addToCart} alt="Add to cart" className='h-6'/>
      <div className='font-bold text-base'>Add to cart</div>
    </div>
  );
}

function ChangeQuantity({ quantity, onIncrement, onDecrement }) {
  return (
    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex justify-between items-center w-max h-4 md:h-8 aspect-ratio-4/1 p-6 rounded-full border border-red-800 gap-12 bg-color-orange">
      <div onClick={onDecrement} className='flex justify-center items-center h-6 w-6 rounded-full border-2 border-white cursor-pointer'>
        <img src={decrement} alt="Decrement quantity" className='h-3 w-3'/>
      </div>
      <div className='font-bold text-base text-white'>{quantity}</div>
      <div onClick={onIncrement} className='flex justify-center items-center h-6 w-6 rounded-full border-2 border-white cursor-pointer'>
        <img src={increment} alt="Increment quantity" className='h-3 w-3'/>
      </div>
    </div>
  );
}

export default Item;
