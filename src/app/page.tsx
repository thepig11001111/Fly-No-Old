import Link from "next/link";

const portals = [
  {
    href: "/buyer",
    title: "Buyer Portal",
    description: "Browse and purchase available items at competitive prices.",
    color: "#059669",
    bg: "#d1fae5",
  },
  {
    href: "/seller",
    title: "Seller Portal",
    description: "List your items for sale and manage your inventory.",
    color: "#d97706",
    bg: "#fef3c7",
  },
  {
    href: "/partner",
    title: "Partner Portal",
    description:
      "Sign up to transport items between buyers and sellers and earn money.",
    color: "#7c3aed",
    bg: "#ede9fe",
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="text-center py-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">
          Fly-No Marketplace
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          The simple marketplace to buy, sell, and transport pallets, plastic
          bags, sofas, and fridges.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-6 mt-4">
        {portals.map((portal) => (
          <Link
            key={portal.href}
            href={portal.href}
            className="rounded-lg border border-slate-200 p-8 flex flex-col gap-4 hover:shadow-lg transition-shadow bg-white group"
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold"
              style={{ backgroundColor: portal.bg, color: portal.color }}
            >
              {portal.title[0]}
            </div>
            <h2 className="text-xl font-semibold text-slate-900 group-hover:underline">
              {portal.title}
            </h2>
            <p className="text-slate-600 text-sm">{portal.description}</p>
            <span
              className="mt-auto text-sm font-medium"
              style={{ color: portal.color }}
            >
              Enter portal &rarr;
            </span>
          </Link>
        ))}
      </section>
    </div>
  );
}
