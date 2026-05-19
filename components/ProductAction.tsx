"use client";

import { useCart } from "@/providers/use-cart";
import React from "react";
import Checkout from "./Checkout";

export default function ProductAction() {
  const { items, cartTotal } = useCart();

  return (
    <div className="rounded-lg bg-[#F4F4F5] p-6 sticky top-20 flex flex-col h-[88vh]">
      <div>
        <div className="grid grid-cols-3 gap-4 pb-2 border-b text-base font-medium">
          <div>Product</div>
          <div className="text-center">Q</div>
          <div className="text-right">Price</div>
        </div>

        {/* CART IETMS */}
        {items.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-3 gap-4 text-base font-normal py-4"
          >
            <div>{item.name}</div>
            <div>{item.quantity}</div>
            <div>₦{item.price * item.quantity}</div>
          </div>
        ))}
      </div>
      {/* SUBTOTAL */}
      <div className="mt-auto">
        <div className="flex items-center justify-between">
          <div>Subtotal</div>
          <div className="text-right">₦{cartTotal || 0}</div>
        </div>
      </div>
      <Checkout />
    </div>
  );
}
