import React from 'react'
import addToCart from '../assets/svgs/addToCart.svg'

function Item({ image, title, description, price }) {
  return (
    <div className='mb-2'>
        <div className='relative mb-8 md:mb-4 imageHolder'>
          <img src={image} alt={title} className='object-center object-cover rounded-lg h-full w-full'/>
          <AddItem />
        </div>
        <p className='text-base text-gray-500'>{title}</p>
        <p className='text-lg font-semibold'>{description}</p>
        <p className='text-lg font-semibold text-yellow-700'>{'$' + price}</p>
    </div>
  )
}

function AddItem() {
  return (
    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex justify-between items-center w-max h-4 md:h-8 aspect-ratio-4/1 bg-white p-6 rounded-full border border-gray-500 gap-4 cursor-pointer">
      <img src={addToCart} alt="Add to cart" className='h-6'/>
      <div className='font-bold text-base'>Add to cart</div>
    </div>
  )
}

export default Item