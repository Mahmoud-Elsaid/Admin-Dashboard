import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Dashboard from "../Pages/dashboard";
import Contacts from './../Pages/Contacts';
import Invoices from './../Pages/Invoices';
import ProfileForm from './../Pages/ProfileForm';
import Calender from './../Pages/Calender';
import FAQ from './../Pages/FAQ';
import PieCharts from './../Pages/PieCharts';
import LineCharts from './../Pages/LineCharts';
import GeographyCharts from './../Pages/GeographyCharts';
import BarCharts from './../Pages/BarCharts';
import Team from './../Pages/Team/Team';

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <div>Error Page</div>,
        children: [
            { index: true, element: <Dashboard /> },
            { path: "dashboard", element: <Dashboard /> },
            { path: "team", element: <Team /> },
            { path: "contacts", element: <Contacts /> },
            { path: "invoices", element: <Invoices /> },
            { path: "profileForm", element: <ProfileForm /> },
            { path: "calender", element: <Calender /> },
            { path: "faq", element: <FAQ/> },
            { path: "barCharts", element: <BarCharts/> },
            { path: "pieCharts", element: <PieCharts /> },
            { path: "lineCharts", element: <LineCharts /> },
            { path: "geographyCharts", element: <GeographyCharts /> },
        ]
    }
]);

export default routes;