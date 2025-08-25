import { Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import WhyChooseUs from "./component/WhyChooseUs";
import ExploreMenu from "./component/ExploreMenu";
import DeliveryPayment from "./component/DeliveryPayment";
import HealthyFood from "./component/HealthyFood";
import ThankingCustomers from "./component/ThankingCustomers";
import FollowUs from "./component/FollowUs";
import Footer from "./component/Footer";

import MenuPage from "./component/pages/MenuPage";
import AddToCart from "./component/pages/CartPage"; // ✅ make sure this exists
import CartPage from "./component/pages/CartPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <ExploreMenu /> 
              <WhyChooseUs />
              <HealthyFood />
              <DeliveryPayment />
              <ThankingCustomers />
              <FollowUs />
              <Footer />
            </>
          }
        />
        <Route path="/menu/:category" element={<MenuPage />} />
        <Route path="/exploreMenu" element={<ExploreMenu />} />
        <Route path="/payment-delivery" element={<DeliveryPayment />} />
        <Route path="/cart" element={<CartPage />} /> 
      </Routes>
    </>
  );
}

export default App;
