import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

function AddToCart() {
  const { cart, removeFromCart, clearCart } = useCart();

  const getTotal = () => {
    return cart.reduce((sum, item) => {
      const price = parseInt(item.price.replace(/[^0-9]/g, "")) || 0;
      return sum + price * item.qty;
    }, 0);
  };

  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>

      {cart.length > 0 ? (
        <div className="space-y-4 max-w-3xl mx-auto">
          {cart.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between border p-3 rounded-lg shadow"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">
                    {item.price} × {item.qty}
                  </p>
                </div>
              </div>
              <Button
                className="bg-red-600"
                onClick={() => removeFromCart(item.name)}
              >
                Remove
              </Button>
            </div>
          ))}

          <div className="text-right font-bold text-xl mt-4">
            Total: ₹{getTotal()}
          </div>

          <div className="flex justify-between mt-4">
            <Button className="bg-gray-500" onClick={clearCart}>
              Clear Cart
            </Button>
            <Button className="bg-blue-600">Proceed to Checkout</Button>
          </div>
        </div>
      ) : (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      )}
    </section>
  );
}

export default AddToCart;
