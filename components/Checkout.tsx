"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { useCart } from "@/providers/use-cart";

export default function Checkout() {
  const { items } = useCart();
  const [loading, setIsLoading] = useState(false);

  const onCheckout = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "content-Type": "applictaion/json",
        },
        body: JSON.stringify({
          items,
        }),
      });

      const { sessionUrl } = await response.json();
      window.location.assign(sessionUrl);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-6 grid gap-4">
      <Button
        size="lg"
        className="w-full cursor-pointer"
        disabled={loading || items.length === 0}
        onClick={() => onCheckout()}
      >
        {loading ? "Processing..." : "Checkout"}
      </Button>
    </div>
  );
}
