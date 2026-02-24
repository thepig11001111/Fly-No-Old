"use client";

import { useState } from "react";
import ItemCard from "@/components/ItemCard";

const items = [
  { name: "Wooden Pallets", price: "£6.00", unit: "Per unit" },
  { name: "Plastic Bags", price: "£0.20", unit: "Per kg" },
  { name: "Sofa", price: "£25.00", unit: "Per unit" },
  { name: "Fridge", price: "£10.00", unit: "Per unit" },
];

interface CartItem {
  name: string;
  price: string;
  qty: number;
}

export default function BuyerPage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  function addToCart(name: string, price: string) {
    setCart((prev) => {
      const existing = prev.find((i) => i.name === name);
      if (existing) {
        return prev.map((i) =>
          i.name === name ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { name, price, qty: 1 }];
    });
  }

  function removeFromCart(name: string) {
    setCart((prev) =>
      prev
        .map((i) => (i.name === name ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0)
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900">Buyer Portal</h1>
      <p className="mt-2 text-slate-600">
        Browse available items and add them to your cart.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {items.map((item) => (
          <ItemCard
            key={item.name}
            name={item.name}
            price={item.price}
            unit={item.unit}
            actionLabel="Add to Cart"
            accentColor="#059669"
            onAction={() => addToCart(item.name, item.price)}
          />
        ))}
      </div>

      {cart.length > 0 && (
        <section className="mt-10 bg-white border border-slate-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">
            Your Cart
          </h2>
          <ul className="divide-y divide-slate-100">
            {cart.map((item) => (
              <li
                key={item.name}
                className="py-3 flex items-center justify-between"
              >
                <div>
                  <span className="font-medium text-slate-900">
                    {item.name}
                  </span>
                  <span className="text-slate-500 ml-2">x{item.qty}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-slate-700 font-medium">
                    {item.price}
                  </span>
                  <button
                    onClick={() => removeFromCart(item.name)}
                    className="text-red-500 hover:text-red-700 text-sm cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <button className="mt-6 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 rounded-md transition-colors cursor-pointer">
            Place Order
          </button>
        </section>
      )}
    </div>
  );
}
