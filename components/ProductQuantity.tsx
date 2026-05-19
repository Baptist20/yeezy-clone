"use client";

import { useCart } from "@/providers/use-cart";
import React from "react";

type Props = {
  product: any;
};

export default function ProductQuantity({ product }: Props) {
  const {
    items,
    addItem,
    removeItem,
    updateQuantity,
    cartTotal,
    isOpen,
    setIsOpen,
  } = useCart();

  const currProductQuantity =
    items.find((item) => item.id === product.id)?.quantity || 0;

  const handleProduct = (quantity: number) => {
    const findProduct = items.find((item) => item.id === product.id);
    if (findProduct) {
      updateQuantity(product.id, quantity);
    } else {
      addItem(product);
    }
  };

  return (
    <div className="flex items-center space-x-6 justify-center">
      {[...Array(10)].map((_, i) => (
        <span
          key={i + 1}
          className={`cursor-pointer items-center justify-center px-1 text-lg font-medium rounded-md hover:bg-gray-100 ${currProductQuantity === i + 1 ? "bg-gray-100" : ""}`}
          onClick={() => handleProduct(i + 1)}
        >
          {i + 1}
        </span>
      ))}
    </div>
  );
}
