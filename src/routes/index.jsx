import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { ToastContainer } from "react-toastify";
import DashboardAdmin from "../pages/adminPage/DashboardAdmin";
import ProtectedRoutes from "./ProtectedRoute";
import DashboardAdminLayout from "../Layout/DashboardAdminLayout";
import Produk from "../pages/adminPage/produk/Produk";
import LoginPage from "../pages/LoginPage";
import CreateProduk from "../pages/adminPage/produk/CreateProduk";
import EditProduk from "../pages/adminPage/produk/EditProduk";
import DashboardManagerLayout from "../Layout/DashboardManagerLayout";
import DashboardManager from "../pages/managerPage/DashboardManager";
import Karyawan from "../pages/managerPage/karyawan/Karyawan";
import CreateKaryawan from "../pages/managerPage/karyawan/CreateKaryawan";
import EditKaryawan from "../pages/managerPage/karyawan/EditKaryawan";
import DashboardOwnerLayout from "../Layout/DashboardOwnerLayout";
import Gaji from "../pages/ownerPage/gaji/Gaji";

const router = createBrowserRouter([
  {
    path: "*",
    element: <div>404 Not Found !</div>,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
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
    ],
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
