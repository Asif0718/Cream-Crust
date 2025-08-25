// src/component/pages/CartPage.jsx
import { useState } from "react";
import { useCart } from "../../context/CartContext"; // adjust path if different
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Navigate, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function CartPage() {
  const { cart, removeFromCart, clearCart, decreaseQty, increaseQty } = useCart(); // ✅ added increaseQty
  const [open, setOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const navigate=useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleCheckout = () => {
    if (!name.trim() || !phone.trim() || !address.trim()) {
      alert("⚠️ Please fill in all details!");
      return;
    }
    alert(
      `✅ Order placed successfully!\n\nName: ${name}\nPhone: ${phone}\nAddress: ${address}\nTotal: ₹${total}`
    );
    setOpen(false);
    clearCart();
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center ">
        <p className="text-gray-600 text-center text-xl mt-8">Your cart is empty.</p>
        <Button className='mt-5' onClick={()=>navigate('/exploreMenu')}>Add Items</Button>
        </div>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center justify-between p-4 border rounded-lg shadow"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h2 className="font-semibold">{item.name}</h2>
                    <p className="text-gray-600">
                      ₹{item.price} × {item.qty} = <b>₹{item.price * item.qty}</b>
                    </p>
                  </div>
                </div>

                {/* ✅ Action buttons */}
                <div className="flex items-center gap-2">
                  <Button
                    className="bg-red-500 text-white px-3"
                    onClick={() => decreaseQty(item.name)}
                  >
                    −
                  </Button>
                  <span className="font-bold">{item.qty}</span>
                  <Button
                    className="bg-green-500 text-white px-3"
                    onClick={() => increaseQty(item.name)}
                  >
                    +
                  </Button>
                  <Button
                    className="bg-red-500 text-white"
                    onClick={() => removeFromCart(item.name)}
                  >
                    Remove
                  </Button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-between items-center">
            <h2 className="text-xl font-bold">Total: ₹{total}</h2>
            <div className="flex gap-3">
              <Button className="bg-gray-500" onClick={clearCart}>
                Clear Cart
              </Button>
              <Button className="bg-green-600" onClick={() => setOpen(true)}>
                Checkout
              </Button>
            </div>
          </div>
          <div className="text-left">
            <Button className='my-3 bg-green-600' onClick={()=>navigate('/')}><ArrowLeft/>Home</Button>
          </div>
        </>
      )}

      {/* ✅ Checkout Popup */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Enter Delivery Details</DialogTitle>
          </DialogHeader>

          <div className="space-y-4 mt-3">
            <Input
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="Phone Number"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Textarea
              placeholder="Enter your full delivery address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button className="bg-green-600" onClick={handleCheckout}>
              Place Order
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CartPage;
