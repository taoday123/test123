// src/RouterCustom.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/user/homePage';
import ProfilePage from './pages/user/profilePage';
import Lienlac from './pages/user/lienLac/lienlac';
import Att from './pages/user/att/Att';
import MasterLayout from './pages/user/theme/masterLayout';
import NotFoundPage from './pages/user/NotFoundPage'; // Import trang lỗi 404
import { ROUTERS } from './utils/router';
import TinTuc from './pages/user/tinTuc/Tintuc';


const renderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            Component: <HomePage />
        },
        {
            path: ROUTERS.USER.PROFILEPAGE,
            Component: <ProfilePage />
        },
        {
            path: ROUTERS.USER.LIENLAC,
            Component: <Lienlac />
        },
        {
            path: ROUTERS.USER.ATT,
            Component: <Att />
        },
        {
            path: ROUTERS.USER.TINTUC,
            Component: <TinTuc/>
        },
        // Thêm route cho trang quản trị
        
    ];

    return (
        <MasterLayout>
            <Routes>
                {userRouters.map((item, key) => (
                    <Route key={key} path={item.path} element={item.Component} />
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
