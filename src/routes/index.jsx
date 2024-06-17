import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "../App.jsx";
import HomePage from "../pages/HomePage";
import HomeCustomer from "../pages/customerPage/HomeCustomer";
import { ToastContainer } from "react-toastify";
import DashboardAdmin from "../pages/adminPage/DashboardAdmin";
import ProtectedRoutes from "./ProtectedRoute";
import DashboardAdminLayout from "../Layout/DashboardAdminLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Produk from "../pages/adminPage/produk/Produk";
import CreateProduk from "../pages/adminPage/produk/CreateProduk";
import EditProduk from "../pages/adminPage/produk/EditProduk";
import DashboardManagerLayout from "../Layout/DashboardManagerLayout";
import DashboardManager from "../pages/managerPage/DashboardManager";
import Karyawan from "../pages/managerPage/karyawan/Karyawan";
import CreateKaryawan from "../pages/managerPage/karyawan/CreateKaryawan";
import EditKaryawan from "../pages/managerPage/karyawan/EditKaryawan";
import DashboardOwnerLayout from "../Layout/DashboardOwnerLayout";
import Gaji from "../pages/ownerPage/gaji/Gaji";
import Penitip from "../pages/managerPage/penitip/Penitip";
import CreatePenitip from "../pages/managerPage/penitip/CreatePenitip";
import EditPenitip from "../pages/managerPage/penitip/EditPenitip";
import ProdukPenitip from "../pages/adminPage/produkPenitip/ProdukPenitip";
import CreateProdukPenitip from "../pages/adminPage/produkPenitip/CreateProdukPenitip";
import BahanBaku from "../pages/adminPage/bahanbaku/BahanBaku";
import CreateBahanBaku from "../pages/adminPage/bahanbaku/CreateBahanBaku";
import EditBahanBaku from "../pages/adminPage/bahanbaku/EditBahanBaku";
import EditProdukPenitip from "../pages/adminPage/produkPenitip/EditProdukPenitip";
import Hampers from "../pages/adminPage/hampers/Hampers";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import CreatePasswordPage from "../pages/CreatePasswordPage";
import CreateHampers from "../pages/adminPage/hampers/CreateHampers";
import EditHampers from "../pages/adminPage/hampers/EditHampers";
import AddProdukHampers from "../pages/adminPage/hampers/AddProdukHampers";
import Resep from "../pages/adminPage/resep/Resep";
import CreateResep from "../pages/adminPage/resep/CreateResep";
import EditResep from "../pages/adminPage/resep/EditResep";
import JarakPengiriman from "../pages/adminPage/jarakPengiriman/JarakPengiriman";
import EditJarakPengiriman from "../pages/adminPage/jarakPengiriman/EditJarakPengiriman";
import KonfirmasiPembayaran from "../pages/adminPage/konfirmasiPembayaran/KonfirmasiPembayaran";
import EditKonfirmasiPembayaran from "../pages/adminPage/konfirmasiPembayaran/EditKonfirmasiPembayaran";
import Status from "../pages/adminPage/status/Status";
import EditStatus from "../pages/adminPage/status/EditStatus";
import EditProfilePage from "../pages/customerPage/EditProfilePage";
import HistoryPage from "../pages/customerPage/HistoryPage";
import OurMenuPage from "../pages/OurMenuPage";
import TampilProdukPage from "../pages/customerPage/TampilProdukPage";
import CartPage from "../pages/customerPage/CartPage";
import Checkout from "../pages/customerPage/Checkout";
import Contact from "../pages/Contact.jsx";
import PembelianBahanBaku from "../pages/managerPage/pembelianBahanBaku/PembelianBahanBaku.jsx";
import CreatePembelianBahanBaku from "../pages/managerPage/pembelianBahanBaku/CreatePembelianBahanBaku.jsx";
import EditPembelianBahanBaku from "../pages/managerPage/pembelianBahanBaku/EditPembelianBahanBaku.jsx";
import PengeluaranLain from "../pages/managerPage/pengeluaranlain/PengeluaranLain.jsx";
import EditGaji from "../pages/ownerPage/gaji/EditGaji.jsx";
import Transaksi from "../pages/Transaksi.jsx";
import LaporanPage from "../pages/managerPage/laporan/LaporanPage.jsx";
import LaporanPageOwner from "../pages/ownerPage/laporan/LaporanPageOwner.jsx";
import PemrosesanPesanan from "../pages/managerPage/pesanan/PemrosesanPesanan.jsx";
import BatalPesanan from "../pages/adminPage/batalPesanan/BatalPesanan.jsx";
import LaporanPageOwner from "../pages/ownerPage/LaporanPageOwner.jsx";

const router = createBrowserRouter([
  {
    path: "*",
    element: <div>404 Not Found !</div>,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  // {
  //   path: "/homeCustomer",
  //   element: <HomeCustomer />,
  // },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPasswordPage />,
  },
  {
    path: "/customers/verify/:token",
    element: <CreatePasswordPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "ourmenu",
    element: <OurMenuPage />,
  },
  {
    path: "/dashboard-admin",
    element: (
      <ProtectedRoutes>
        <DashboardAdminLayout />
      </ProtectedRoutes>
    ),
    children: [
      {
        path: "/dashboard-admin",
        element: <DashboardAdmin />,
      },
      {
        path: "/dashboard-admin/produk",
        element: <Produk />,
      },
      {
        path: "/dashboard-admin/produk/create",
        element: <CreateProduk />,
      },
      {
        path: "/dashboard-admin/produk/edit/:id",
        element: <EditProduk />,
      },
      {
        path: "/dashboard-admin/produk-penitip",
        element: <ProdukPenitip />,
      },
      {
        path: "/dashboard-admin/produk-penitip/create",
        element: <CreateProdukPenitip />,
      },
      {
        path: "/dashboard-admin/produk-penitip/edit/:id",
        element: <EditProdukPenitip />,
      },
      {
        path: "/dashboard-admin/bahanbaku",
        element: <BahanBaku />,
      },
      {
        path: "/dashboard-admin/bahanbaku/create",
        element: <CreateBahanBaku />,
      },
      {
        path: "/dashboard-admin/bahanbaku/edit/:id",
        element: <EditBahanBaku />,
      },
      {
        path: "/dashboard-admin/hampers",
        element: <Hampers />,
      },
      {
        path: "/dashboard-admin/hampers/create",
        element: <CreateHampers />,
      },
      {
        path: "/dashboard-admin/hampers/edit/:id",
        element: <EditHampers />,
      },
      {
        path: "/dashboard-admin/hampers/createproduk/:id",
        element: <AddProdukHampers />,
      },
      {
        path: "/dashboard-admin/resep",
        element: <Resep />,
      },
      {
        path: "/dashboard-admin/resep/create",
        element: <CreateResep />,
      },
      {
        path: "/dashboard-admin/resep/edit/:id",
        element: <EditResep />,
      },
      {
        path: "/dashboard-admin/hampers",
        element: <Hampers />,
      },
      {
        path: "/dashboard-admin/resep",
        element: <Resep />,
      },
      {
        path: "/dashboard-admin/resep/create",
        element: <CreateResep />,
      },
      {
        path: "/dashboard-admin/resep/edit/:id",
        element: <EditResep />,
      },
      {
        path: "/dashboard-admin/jarak-pengiriman",
        element: <JarakPengiriman />,
      },
      {
        path: "/dashboard-admin/jarak-pengiriman/edit/:id",
        element: <EditJarakPengiriman />,
      },
      {
        path: "/dashboard-admin/konfirmasi-pembayaran",
        element: <KonfirmasiPembayaran />,
      },
      {
        path: "/dashboard-admin/konfirmasi-pembayaran/edit/:id",
        element: <EditKonfirmasiPembayaran />,
      },
      {
        path: "/dashboard-admin/status",
        element: <Status />,
      },
      {
        path: "/dashboard-admin/status/edit/:id",
        element: <EditStatus />,
      },
      {
        path: "/dashboard-admin/pembatalan-pesanan",
        element: <BatalPesanan />,
      },
    ],
  },
  {
    path: "/dashboard-manager",
    element: (
      <ProtectedRoutes>
        <DashboardManagerLayout />
      </ProtectedRoutes>
    ),
    children: [
      {
        path: "/dashboard-manager/pemrosesanpesanan",
        element: <PemrosesanPesanan />,
      },
      {
        path: "/dashboard-manager/laporan",
        element: <LaporanPage />,
      },
      {
        path: "/dashboard-manager",
        element: <DashboardManager />,
      },
      {
        path: "/dashboard-manager/karyawan",
        element: <Karyawan />,
      },
      {
        path: "/dashboard-manager/karyawan/create",
        element: <CreateKaryawan />,
      },
      {
        path: "/dashboard-manager/karyawan/edit/:id",
        element: <EditKaryawan />,
      },
      {
        path: "/dashboard-manager/penitip",
        element: <Penitip />,
      },
      {
        path: "/dashboard-manager/penitip/create",
        element: <CreatePenitip />,
      },
      {
        path: "/dashboard-manager/penitip/edit/:id",
        element: <EditPenitip />,
      },
      {
        path: "/dashboard-manager/pembelian-bahan-baku",
        element: <PembelianBahanBaku />,
      },
      {
        path: "/dashboard-manager/pembelian-bahan-baku/create",
        element: <CreatePembelianBahanBaku />,
      },
      {
        path: "/dashboard-manager/pembelian-bahan-baku/edit/:id",
        element: <EditPembelianBahanBaku />,
      },
      {
        path: "/dashboard-manager/pengeluaranlain",
        element: <PengeluaranLain />,
      },
    ],
  },
  {
    path: "/dashboard-owner",
    element: (
      <ProtectedRoutes>
        <DashboardOwnerLayout />
      </ProtectedRoutes>
    ),
    children: [
      {
        path: "/dashboard-owner",
        element: <div>Dashboard Owner</div>,
      },
      {
        path: "/dashboard-owner/gaji",
        element: <Gaji />,
      },
      {
        path: "/dashboard-owner/laporan",
        element: <LaporanPageOwner />,
      },
      // {
      //   path: "/dashboard-owner/gaji/create",
      //   element: <CreateGaji />,
      // },
      {
        path: "/dashboard-owner/laporan",
        element: <LaporanPageOwner />,
      },
      {
        path: "/dashboard-owner/gaji/edit/:id",
        element: <EditGaji />,
      },
    ],
  },
  // Customer
  {
    path: "/detail-produk/:id",
    element: (
      <ProtectedRoutes>
        <TampilProdukPage />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/cart",
    element: (
      <ProtectedRoutes>
        <CartPage />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/transaksi",
    element: (
      <ProtectedRoutes>
        <Transaksi />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/checkout",
    element: (
      <ProtectedRoutes>
        <Checkout />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/home",
    element: (
      <ProtectedRoutes>
        <HomeCustomer />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/customers/profile/edit/:id",
    element: (
      <ProtectedRoutes>
        <EditProfilePage />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/customers/history",
    element: (
      <ProtectedRoutes>
        <HistoryPage />
      </ProtectedRoutes>
    ),
  },
]);

const AppRouter = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <RouterProvider router={router} />
    </>
  );
};

export default AppRouter;
