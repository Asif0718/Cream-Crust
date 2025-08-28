import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

function MenuPage() {
  const { category } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [addedItems, setAddedItems] = useState([]);

  // ✅ Menu items data (same as before)
  const menuItems = {
    // ... (menuItems object remains the same)
    cakes: [
      { name: "Chocolate Cake", price: "₹220/kg", img: "https://theobroma.in/cdn/shop/collections/Delicacies-01_grande.jpg?v=1711720002" },
      { name: "Vanilla Sponge Cake", price: "₹250/kg", img: "https://i.pinimg.com/1200x/77/6f/0b/776f0b9fbff296742a92b42baf0ecade.jpg" },
      { name: "Red Velvet Cake", price: "₹280/kg", img: "https://i.pinimg.com/1200x/24/4d/c4/244dc475967fa4f31649de4ab5c501cd.jpg" },
      { name: "Stracciatella Maqui Cheese Cake", price: "₹250/kg", img: "https://i.pinimg.com/1200x/e8/e1/44/e8e144f42650723569a092f7ca776fdd.jpg" },
      { name: "Fruit Cake", price: "₹300/kg", img: "https://i.pinimg.com/1200x/0a/27/ac/0a27acd372042e6642ea996214fb1ed8.jpg" },
    ],
    "biscuits-cookies-crackers": [
      { name: "Digestive Biscuits", price: "₹180", img: "https://i.pinimg.com/736x/e8/27/cb/e827cb019c0af03cda6990acabda5de1.jpg" },
      { name: "Shortbread Biscuits", price: "₹170", img: "https://i.pinimg.com/736x/4a/9b/6e/4a9b6e7e2deff1b5dccbafc88d8a23f8.jpg" },
      { name: "Double Chocolate Cookies", price: "₹190", img: "https://i.pinimg.com/736x/23/50/04/235004412a48d69202ff78edd1c29ae6.jpg" },
      { name: "vanilla Sugar Cookies", price: "₹170", img: "https://i.pinimg.com/736x/c8/60/29/c86029a9abfbe526dc21eed5537ce3e8.jpg" },
      { name: "Seeds &Cheese Crackers", price: "₹160", img: "https://i.pinimg.com/736x/30/d8/d4/30d8d4a21e3fc3b6f22d5683b71e740f.jpg" },
    ],
    brownies: [
      { name: "Classic Fudge Brownie", price: "₹120", img: "https://i.pinimg.com/736x/11/c0/b6/11c0b61369d9d68b94dc2722cffd0365.jpg" },
      { name: "Walnut Brownie", price: "₹140", img: "https://i.pinimg.com/736x/d8/7a/a2/d87aa2c3034e1e7b1fe99ccbb695bb05.jpg" },
      { name: "Oreo Brownie", price: "₹150", img: "https://i.pinimg.com/736x/9e/d3/8d/9ed38d9f2ec0707dbc6a552351e81c82.jpg" },
    ],
    "deserts-cupcakes": [
      { name: "Chocolate Cupcake", price: "₹200", img: "https://i.pinimg.com/736x/de/d6/87/ded6873b7cf02e02ced23866fc328024.jpg" },
      { name: "Vanilla Cupcake", price: "₹180", img: "https://i.pinimg.com/736x/2e/da/76/2eda76b2c23af921413a92d9de105bfc.jpg" },
      { name: "Red Velvet Cupcake", price: "₹150", img: "https://i.pinimg.com/736x/96/84/e7/9684e798782ddcf0bde649834f12af58.jpg" },
      { name: "Chocolate Mousse", price: "₹170", img: "https://i.pinimg.com/736x/d2/7e/09/d27e0956725cd5a7138649993611053a.jpg" },
      { name: "Fruit Tart", price: "₹120", img: "https://i.pinimg.com/736x/f0/10/cf/f010cf2f2ccaf635fe14805d86ec073d.jpg" },
      { name: "Banoffee Pie", price: "₹150", img: "https://i.pinimg.com/1200x/76/93/aa/7693aab71b3c73d92b509e3f41a3c0c8.jpg" },
    ],
    laddu: [
      { name: "Motichoor Laddu", price: "₹350", img: "https://i.pinimg.com/736x/be/fc/9e/befc9e6d8ad788ef0eea1ab08bea513d.jpg" },
      { name: "Coconut Laddu", price: "₹280", img: "https://i.pinimg.com/736x/19/87/e6/1987e6ed32e54949f0417226544a5e15.jpg" },
      { name: "Til (Sesame) Laddu", price: "₹280", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRps1k_9NSe2p4s-e37RnpEmfWBcS667DenkQ&s" },
      { name: "Besan Laddu", price: "₹280", img: "https://i.pinimg.com/736x/fa/be/c3/fabec367abd1716c9cdabba172490c34.jpg" },
    ],
    pastries: [
      { name: "Chocolate", price: "₹110", img: "https://i.pinimg.com/736x/a5/18/b9/a518b9540ee9ad9556080abbbb8cd036.jpg" },
      { name: "Strawberry", price: "₹90", img: "https://i.pinimg.com/736x/e9/82/d8/e982d8343d85c9c3c7f2200d8fcf9e98.jpg" },
      { name: "Pineapple", price: "₹100", img: "https://i.pinimg.com/736x/19/3a/87/193a87e2bb799f4e7a5b7f389e624d2d.jpg" },
      { name: "Red Velvet", price: "₹100", img: "https://i.pinimg.com/736x/99/54/1b/99541beba1106f6db075e0ee91a14b64.jpg" },
      { name: "Black Forest", price: "₹120", img: "https://i.pinimg.com/736x/d8/e4/22/d8e422f8a088ae914cc4786d2c25996d.jpg" },
    ],
  };


  const key = category.toLowerCase();
  const items = menuItems[key] || [];

  const handleAdd = (item) => {
    addToCart({
      name: item.name,
      img: item.img,
      price: parseInt(item.price.replace(/[^0-9]/g, "")),
    });
    setAddedItems((prev) => [...prev, item.name]);
  };

  return (
    <section className="p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl sm:text-3xl mt-12 text-center font-bold capitalize mb-6">
        {category} Menu
      </h1>

      {items.length > 0 ? (
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 px-2 sm:px-4">
          {items.map((item, idx) => {
            const isAdded = addedItems.includes(item.name);
            return (
              <div
                key={idx}
                className="p-3 sm:p-4 border rounded-lg shadow hover:shadow-lg transition hover:scale-105 bg-white flex flex-col items-center"
              >
                {item.img && (
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-32 sm:h-40 object-cover rounded-md mb-3"
                  />
                )}
                <h2 className="text-sm sm:text-lg font-semibold text-center">{item.name}</h2>
                <p className="text-xs sm:text-gray-600 text-center">{item.price}</p>

                <Button
                  disabled={isAdded}
                  className={`w-full mt-3 ${isAdded ? "bg-gray-400" : "bg-green-600"}`}
                  onClick={() => handleAdd(item)}
                >
                  {isAdded ? "Added" : "Add to Cart"}
                </Button>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-gray-500">No items found for this category.</p>
      )}

      <div className="flex justify-center pt-10">
        <Button
          className="bg-yellow-600"
          onClick={() => navigate("/")}
        >
          <ArrowLeft /> Back
        </Button>
      </div>
    </section>
  );
}

export default MenuPage;