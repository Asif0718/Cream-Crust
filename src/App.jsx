import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import WhyChooseUs from "./component/WhyChooseUs";
import ExploreMenu from "./component/ExploreMenu";
import DeliveryPayment from "./component/DeliveryPayment";
import HealthyFood from "./component/HealthyFood";
import ThankingCustomers from "./component/ThankingCustomers";
import FollowUs from "./component/FollowUs";
import Footer from "./component/Footer";

import MenuPage from "./component/pages/MenuPage"; // <-- new page for ExploreMenu clicks

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Home page (all sections together) */}
        <Route
          path="/"
          element={
            <>
              <Banner />
             {/* <ExploreMenu />*/}
              <WhyChooseUs />
              <HealthyFood />
              <DeliveryPayment />
              <ThankingCustomers />
              <FollowUs />
              <Footer />
            </>
          }
        />

        {/* Dynamic route for ExploreMenu */}
        <Route path="/menu/:category" element={<MenuPage />} />
        <Route path="/exploreMenu" element={<ExploreMenu/>}/>
        <Route path="/payment-delivery" element={<DeliveryPayment/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
