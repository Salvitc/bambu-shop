import React from 'react'
import { useSelector } from 'react-redux';

const CartTotals = () => {
  const { total } = useSelector((state) => state.cart);
  const tax = total * 0.21;
  const shipping = 5.99;
  return (
    <div className='card bg-base-200'>
      <div className='card-body'>
        <p className='flex justify-between text-xs border-b border-base-300 pb-2 text-accent-content'>
          <span>Subtotal</span>
          <span className='font-medium'>{ Math.round(total) } €</span>
        </p>
        <p className='flex justify-between text-xs border-b border-base-300 pb-2 text-accent-content'>
          <span>Gastos de envío</span>
          <span className='font-medium'>{ shipping } €</span>
        </p>
        <p className='flex justify-between text-xs border-b border-base-300 pb-2 text-accent-content'>
          <span>Tax 21%</span>
          <span className='font-medium'>{Math.round(tax)} €</span>
        </p>
        <p className='flex justify-between text-sm mt-4 pb-2 text-accent-content'>
          <span>Order Total</span>
          <span className='font-medium'>{ Math.round(total + shipping + tax) } €</span>
        </p>
      </div>
    </div>
  )
}

export default CartTotals
