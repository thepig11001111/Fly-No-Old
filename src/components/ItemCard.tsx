interface ItemCardProps {
  name: string;
  price: string;
  unit: string;
  onAction?: () => void;
  actionLabel: string;
  accentColor: string;
}

export default function ItemCard({
  name,
  price,
  unit,
  onAction,
  actionLabel,
  accentColor,
}: ItemCardProps) {
  return (
    <div className="bg-white rounded-lg border border-slate-200 p-6 flex flex-col gap-4 hover:shadow-md transition-shadow">
      <div>
        <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
        <p className="text-slate-500 text-sm mt-1">{unit}</p>
      </div>
      <p className="text-2xl font-bold text-slate-900">{price}</p>
      <button
        onClick={onAction}
        className="mt-auto w-full py-2.5 px-4 rounded-md text-white font-medium transition-opacity hover:opacity-90 cursor-pointer"
        style={{ backgroundColor: accentColor }}
      >
        {actionLabel}
      </button>
    </div>
  );
}
