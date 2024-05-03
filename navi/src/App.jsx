import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/navbar";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/User/Home/HomePage";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import PublicLayout from "./components/PublicLayout/PublicLayout";
import Shops from "./pages/User/Shops/Shops";
import AdminLayout from './pages/Admin/components/AdminLayout/AdminLayout';
import AdminDashboard from './pages/Admin/pages/AdminDashboard/AdminDashboard';
import GameCenter from './pages/Admin/pages/GameCenter/GameCenter';
import ErrorPage from "./components/404/ErrorPage";
import QRcodePage from "./pages/User/QRcode/QRcodePage";
import GamingRoomBookings from "./pages/Admin/pages/GamingRoomBookings/GamingRoomBookings";
import GamingRoomMain from "./pages/User/GamingRoom/GamingRoomMain";
import PublicLayoutDark from './components/PublicLayout/PublicLayoutDark';

import BeautyShop from "./pages/User/Shops/BeautyShop";
import Bookshop from "./pages/User/Shops/Bookshop";
import Clothshop from "./pages/User/Shops/Clothshop";
import Createshop from "./pages/User/Shops/Createshop";
import UpdatebookShop from "./pages/User/Shops/UpdatebookShop";
import CreateClothshop from "./pages/User/Shops/CreateClothshop";
import UpdateClothshop from "./pages/User/Shops/UpdateClothshop";
import CreateBeutyshop from "./pages/User/Shops/CreateBeutyshop";
import UpdateBeautyshop from "./pages/User/Shops/UpdateBeautyshop";
import ProductList from "./pages/User/Shops/ProductList";
import CreateProduct from "./pages/User/Shops/CreateProduct";
import Updateproduct from "./pages/User/Shops/Updateproduct";

function App() {
  return (
    <>
      <Router>
        <div className="">
          <Routes>
            {/* Public routes */}
            <Route
              path="/*"
              element={
                <PublicLayout>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/shops" element={<Shops />} />
                    <Route path="/BeautyShop" element={<BeautyShop />} />
                    <Route path="/BookShop" element={<Bookshop />} />
                    <Route path="/ClothShop" element={<Clothshop />} />
                    <Route path="/Createshop" element={<Createshop />} />
                    <Route path="/update-Bookshope/:updateId" element={<UpdatebookShop />} />
                    <Route path="/crateclothshop" element={<CreateClothshop />} />
                    <Route path="/update-clothshope/:updateCId" element={<UpdateClothshop />} />
                    <Route path="/createBeauty" element={<CreateBeutyshop />} />
                    <Route path="/update-beautyshope/:updateBId" element={<UpdateBeautyshop />} />
                    <Route path="/product/:productId" element={<ProductList />} />
                    <Route path="/createproduct/:creatId" element={<CreateProduct />} />
                    <Route path="/updateproduct/:updatePId" element={<Updateproduct />} />


                    {/* Auth routes */}
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />

                    <Route path="/qr-scan" element={<QRcodePage />} />
                    {/* <Route path="/gaming-room" element={<GamingRoomMain />} /> */}

                    <Route path="*" element={<ErrorPage />} />

                  </Routes>
                </PublicLayout>
              }
            />

            <Route path="/gaming-room" element={<PublicLayoutDark><GamingRoomMain /></PublicLayoutDark>} />

            {/* Admin routes */}
            <Route
              path="/admin/*"
              element={
                <AdminLayout>
                  <Routes>
                    <Route path="/" element={<Navigate to="dashboard" />} />
                    <Route path="/dashboard" element={<AdminDashboard />} />
                    <Route path="game-center" element={<GameCenter />} />
                    <Route path="gaming-room-bookings" element={<GamingRoomBookings />} />
                    <Route path="*" element={<ErrorPage />} />
                  </Routes>
                </AdminLayout>
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
