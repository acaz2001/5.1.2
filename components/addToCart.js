'use client';
import { useCart } from '../context/CartContext';
import Link from 'next/link';

export default function AddToCart() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, total } = useCart();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Korpa</h2>
      {cartItems.length === 0 ? (
        <p>Korpa je prazna.</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between items-center border-b pb-2">
              <div>
                {item.name} × {item.quantity}
                <div className="flex space-x-2 mt-2">
                  <button onClick={() => decreaseQuantity(item.id)} className="px-2 bg-gray-300 rounded">-</button>
                  <button onClick={() => increaseQuantity(item.id)} className="px-2 bg-gray-300 rounded">+</button>
                </div>
              </div>
              <div>
                {item.price * item.quantity} RSD
                <button onClick={() => removeFromCart(item.id)} className="ml-4 text-red-600">Ukloni</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 font-bold">Ukupno: {total} RSD</div>

      <Link href="/cart">
        <button className="bg-green-500 text-white px-4 py-2 mt-4">Checkout</button>
      </Link>
    </div>
  );
}
