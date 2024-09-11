import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/user/homePage';
import ProfilePage from './pages/user/profilePage';
import Lienlac from './pages/user/lienLac/lienlac';
import Att from './pages/user/att/Att';
import MasterLayout from './pages/user/theme/masterLayout';
import NotFoundPage from './pages/user/NotFoundPage';
import TinTuc from './pages/user/tinTuc/Tintuc';
import AboutUs from './pages/user/AboutUs/AboutUs';
import ContactUs from './pages/user/ContactUs/ContactUs';
import ProductDetail from './pages/user/ProductDetail/ProductDetail'; // Import trang chi tiết sản phẩm
import Box1 from './pages/user/Box/Box1';
import Box2 from './pages/user/Box/Box2';
import Box3 from './pages/user/Box/Box3';
import Box4 from './pages/user/Box/Box4';
import Box5 from './pages/user/Box/Box5';
import Box6 from './pages/user/Box/Box6';
import Box7 from './pages/user/Box/Box7';
import Box8 from './pages/user/Box/Box8';
import Box9 from './pages/user/Box/Box9';
import Box10 from './pages/user/Box/Box10';
import Box11 from './pages/user/Box/Box11';
import Box12 from './pages/user/Box/Box12';
import Box13 from './pages/user/Box/Box13';
import Box14 from './pages/user/Box/Box14';
import Box15 from './pages/user/Box/Box15';
import Box16 from './pages/user/Box/Box16';
import Box17 from './pages/user/Box/Box17';
import Box18 from './pages/user/Box/Box18'; // Import thêm Box component khác
import { ROUTERS } from './utils/router';

const renderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage />
        },
        {
            path: ROUTERS.USER.PROFILEPAGE,
            component: <ProfilePage />
        },
        {
            path: ROUTERS.USER.LIENLAC,
            component: <Lienlac />
        },
        {
            path: ROUTERS.USER.ATT,
            component: <Att />
        },
        {
            path: ROUTERS.USER.TINTUC,
            component: <TinTuc />
        },
        {
            path: ROUTERS.USER.ABOUTUS,
            component: <AboutUs />
        },
        {
            path: ROUTERS.USER.CONTACTUS,
            component: <ContactUs />
        },
        {
            path: ROUTERS.USER.BOX1,
            component: <Box1 />
        },
        {
            path: ROUTERS.USER.BOX2,
            component: <Box2 />
        },
        {
            path: ROUTERS.USER.BOX3,
            component: <Box3 />
        },
        {
            path: ROUTERS.USER.BOX4,
            component: <Box4 />
        },
        {
            path: ROUTERS.USER.BOX5,
            component: <Box5 />
        },
        {
            path: ROUTERS.USER.BOX6,
            component: <Box6 />
        },
        {
            path: ROUTERS.USER.BOX7,
            component: <Box7 />
        },
        {
            path: ROUTERS.USER.BOX8,
            component: <Box8 />
        },
        {
            path: ROUTERS.USER.BOX9,
            component: <Box9 />
        },
        {
            path: ROUTERS.USER.BOX10,
            component: <Box10 />
        },
        {
            path: ROUTERS.USER.BOX11,
            component: <Box11 />
        },
        {
            path: ROUTERS.USER.BOX12,
            component: <Box12 />
        },
        {
            path: ROUTERS.USER.BOX13,
            component: <Box13 />
        },
        {
            path: ROUTERS.USER.BOX14,
            component: <Box14 />
        },
        {
            path: ROUTERS.USER.BOX15,
            component: <Box15 />
        },
        {
            path: ROUTERS.USER.BOX16,
            component: <Box16 />
        },
        {
            path: ROUTERS.USER.BOX17,
            component: <Box17 />
        },
        {
            path: ROUTERS.USER.BOX18,
            component: <Box18 />
        },
        {
            path: '/product/:id',
            component: <ProductDetail />
        }
    ];

    return (
        <MasterLayout>
            <Routes>
                {userRouters.map((item, key) => (
                    <Route key={key} path={item.path} element={item.component} />
                ))}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </MasterLayout>
    );
};

const RouterCustom = () => {
    return renderUserRouter();
};

export default RouterCustom;
