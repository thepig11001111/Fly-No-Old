"use client";

import { useState } from "react";

const availableOrders = [
  {
    id: 1,
    item: "Wooden Pallets",
    from: "London",
    to: "Manchester",
    qty: 10,
    payout: "£18.00",
  },
  {
    id: 2,
    item: "Plastic Bags",
    from: "Birmingham",
    to: "Leeds",
    qty: 50,
    payout: "£12.00",
  },
  {
    id: 3,
    item: "Sofa",
    from: "Bristol",
    to: "Liverpool",
    qty: 2,
    payout: "£35.00",
  },
  {
    id: 4,
    item: "Fridge",
    from: "Edinburgh",
    to: "Glasgow",
    qty: 3,
    payout: "£22.00",
  },
];

export default function PartnerPage() {
  const [signedUp, setSignedUp] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [accepted, setAccepted] = useState<number[]>([]);

  function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    if (name.trim() && email.trim()) {
      setSignedUp(true);
    }
  }

  function acceptOrder(id: number) {
    setAccepted((prev) => [...prev, id]);
  }

  if (!signedUp) {
    return (
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Partner Portal</h1>
        <p className="mt-2 text-slate-600">
          Sign up as a transport partner to earn money fulfilling deliveries.
        </p>

        <form
          onSubmit={handleSignUp}
          className="mt-8 bg-white border border-slate-200 rounded-lg p-6 max-w-md"
        >
          <h2 className="text-xl font-semibold text-slate-900 mb-4">
            Partner Sign Up
          </h2>
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-slate-300 rounded-md px-3 py-2 text-slate-900"
                placeholder="John Smith"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-slate-300 rounded-md px-3 py-2 text-slate-900"
                placeholder="john@example.com"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-violet-600 hover:bg-violet-700 text-white font-medium py-2.5 rounded-md transition-colors cursor-pointer"
            >
              Sign Up as Partner
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900">Partner Portal</h1>
      <p className="mt-2 text-slate-600">
        Welcome, <span className="font-medium">{name}</span>. Browse available
        transport orders below.
      </p>

      <section className="mt-8 grid sm:grid-cols-2 gap-6">
        {availableOrders.map((order) => {
          const isAccepted = accepted.includes(order.id);
          return (
            <div
              key={order.id}
              className="bg-white border border-slate-200 rounded-lg p-6 flex flex-col gap-3"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold text-slate-900">
                  {order.item}
                </h3>
                <span className="text-xl font-bold text-violet-600">
                  {order.payout}
                </span>
              </div>
              <p className="text-sm text-slate-500">Quantity: {order.qty}</p>
              <p className="text-sm text-slate-600">
                <span className="font-medium">{order.from}</span> &rarr;{" "}
                <span className="font-medium">{order.to}</span>
              </p>
              {isAccepted ? (
                <span className="mt-auto text-center py-2.5 rounded-md bg-violet-100 text-violet-700 font-medium">
                  Accepted
                </span>
              ) : (
                <button
                  onClick={() => acceptOrder(order.id)}
                  className="mt-auto w-full bg-violet-600 hover:bg-violet-700 text-white font-medium py-2.5 rounded-md transition-colors cursor-pointer"
                >
                  Accept Order
                </button>
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
}
