'use client';
import { useCart } from '../../context/CartContext';

export default function Checkout() {
  const { cart, total, removeFromCart } = useCart();

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Tvoja Korpa</h1>
      {cart.length === 0 ? (
        <p>Korpa je prazna.</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between items-center border-b pb-2">
              <div>
                {item.name} × {item.quantity}
              </div>
              <div>
                {item.price * item.quantity} RSD
                <button
                  className="ml-4 text-red-600"
                  onClick={() => removeFromCart(item.id)}
                >
                  Ukloni
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-6 font-semibold">Ukupno: {total} RSD</div>
    </div>
  );
}
