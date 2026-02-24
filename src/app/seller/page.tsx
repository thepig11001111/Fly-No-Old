"use client";

import { useState } from "react";

const itemOptions = [
  { name: "Wooden Pallets", price: "£6.00", unit: "Per unit" },
  { name: "Plastic Bags", price: "£0.20", unit: "Per kg" },
  { name: "Sofa", price: "£25.00", unit: "Per unit" },
  { name: "Fridge", price: "£10.00", unit: "Per unit" },
];

interface Listing {
  id: number;
  item: string;
  quantity: number;
  price: string;
}

export default function SellerPage() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [selectedItem, setSelectedItem] = useState(itemOptions[0].name);
  const [quantity, setQuantity] = useState(1);

  function addListing() {
    if (quantity < 1) return;
    const option = itemOptions.find((i) => i.name === selectedItem)!;
    setListings((prev) => [
      ...prev,
      {
        id: Date.now(),
        item: option.name,
        quantity,
        price: option.price,
      },
    ]);
    setQuantity(1);
  }

  function removeListing(id: number) {
    setListings((prev) => prev.filter((l) => l.id !== id));
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900">Seller Portal</h1>
      <p className="mt-2 text-slate-600">
        List items you have available for sale.
      </p>

      <section className="mt-8 bg-white border border-slate-200 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">
          Create a Listing
        </h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Item
            </label>
            <select
              value={selectedItem}
              onChange={(e) => setSelectedItem(e.target.value)}
              className="w-full border border-slate-300 rounded-md px-3 py-2 text-slate-900 bg-white"
            >
              {itemOptions.map((opt) => (
                <option key={opt.name} value={opt.name}>
                  {opt.name} — {opt.price} {opt.unit.toLowerCase()}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Quantity
            </label>
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full border border-slate-300 rounded-md px-3 py-2 text-slate-900"
            />
          </div>
          <div className="flex items-end">
            <button
              onClick={addListing}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-2.5 rounded-md transition-colors cursor-pointer"
            >
              List Item
            </button>
          </div>
        </div>
      </section>

      {listings.length > 0 && (
        <section className="mt-8 bg-white border border-slate-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">
            Your Listings
          </h2>
          <ul className="divide-y divide-slate-100">
            {listings.map((listing) => (
              <li
                key={listing.id}
                className="py-3 flex items-center justify-between"
              >
                <div>
                  <span className="font-medium text-slate-900">
                    {listing.item}
                  </span>
                  <span className="text-slate-500 ml-2">
                    x{listing.quantity}
                  </span>
                  <span className="text-slate-400 ml-2">
                    @ {listing.price}
                  </span>
                </div>
                <button
                  onClick={() => removeListing(listing.id)}
                  className="text-red-500 hover:text-red-700 text-sm cursor-pointer"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
