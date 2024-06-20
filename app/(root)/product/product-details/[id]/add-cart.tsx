"use client";
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { addItem, cartItem } from '@/store/cartSlice';
import { Product } from '@/typing';
import React from 'react'
import { useDispatch } from 'react-redux';

const AddToCart = ({product}:{product:Product}) => {
  const dispatch = useDispatch();
  const {toast} = useToast();
  const addCartHandler = () => {
    toast({
      description:"Item Add to the cart",
      variant:'success',
    })
    dispatch(addItem(product))};
  return (
    <div>
        <Button onClick={()=>{addCartHandler()}} className='mt-6'>Add to Cart</Button>
    </div>
  )
}

export default AddToCart;