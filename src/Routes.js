import React from "react";
const Admin = React.lazy(() => import('./Admin/Admin'))
const Dashboard = React.lazy(() => import('./View/DemoComponent/Dashbord'))
const Product = React.lazy(() => import('./View/DemoComponent/Product'))
const Cateloge = React.lazy(() => import('./View/DemoComponent/Catelogue'))
const Order = React.lazy(() => import('./View/DemoComponent/Order'))
const Invoice = React.lazy(() => import('./View/DemoComponent/Invoice'))

export const Admin_Final = [
    {
        name:"Home",
        path:"/admin",
        component: Dashboard,
        exact: true
    },
    {
        name:"Dashbord",
        path:"/admin/dashboard",
        component: Dashboard,
        exact: true
    },
    {
        name:"Product",
        path:"/admin/product",
        component: Product,
        exact: true
    },
    {
        name:"Cateloge Upload",
        path:"/admin/product/new-product",
        component: Cateloge,
        exact: true
    },
    {
        name:"Order Details",
        path:"/admin/order-details",
        component: Order,
        exact: true
    },
    {
        name:"Invoice",
        path:"/admin/get-invoice",
        component: Invoice,
        exact: true
    },

]