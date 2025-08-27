import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Navigate, useNavigate } from "react-router-dom";

function ExploreMenu() {
  const navigate = useNavigate();

  const items = [
    {
      img: "https://www.flurys.com/cdn/shop/products/ChocolateCake_1.jpg?v=1676363155&width=840",
      title: "Cakes",
      path: "cakes",
    },
    {
      img: "https://theobroma.in/cdn/shop/collections/Delicacies-05_grande.jpg?v=1647258986",
      title: "Biscuits, Cookies & Crackers",
      path: "biscuits-cookies-crackers",
    },
    {
      img: "https://i.pinimg.com/1200x/29/98/5b/29985b40753fb070d958fe42324c741b.jpg",
      title: "Brownies",
      path: "brownies",
    },
    {
      img: "https://www.kuchpakrahahai.in/wp-content/uploads/2022/04/Eggless-Chocolate-Cupcake-Recipe.jpg",
      title: "Deserts & CupCakes",
      path: "deserts-cupcakes",
    },
    {
        img: "https://media.istockphoto.com/id/1463562412/photo/traditional-ball-shaped-indian-mithai-besan-ke-laddu-ladoo-or-laddoo-made-from-bengal-gram.jpg?s=612x612&w=0&k=20&c=sYRSNKtQWFpKcmpbpy9ea7OnYdQS6l_HfTS_aAjYtMs=",
        title: "Laddu's",
        path: "laddu",
      },
      {
        img: "https://theobroma.in/cdn/shop/collections/Delicacies-06_grande.jpg?v=1616513073",
        title: "Pastries",
        path: "pastries",
      },
  ];

  return (
    <div className="mx-8">
          <section
            id="exploreMenuSection"
            className="bg-gray-50 py-16 px-6 text-center"
          >
            <h1 className="text-3xl font-semibold mb-12 pt-3">Explore Menu</h1>
            <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 justify-center">
              {items.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => navigate(`/menu/${item.path}`)}
                  className="bg-white shadow rounded-xl overflow-hidden border cursor-pointer hover:shadow-lg hover:scale-105 transition"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-40 object-cover"
                  />
                  <h2 className="p-4 font-medium text-gray-800">{item.title}</h2>
                </div>
              ))}
            </div>
          </section>
          <div className="ml-7">
           {/* <Button className='bg-yellow-600' onClick={()=> navigate("/")}><ArrowLeft/>Back </Button>*/}
          </div>
    </div>
  );
}

export default ExploreMenu;
