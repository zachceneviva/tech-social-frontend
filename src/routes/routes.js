import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import People from "../pages/People";
import Profile from "../pages/Profile";
import AllGroups from "../pages/AllGroups";
import AllMeetups from "../pages/AllMeetups";

export default function AppRoutes () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='profile' element={<Profile />} />
                <Route path='people' element={<People />} />
                <Route path='groups' element={<AllGroups/>} />
                <Route path='meetups' element={<AllMeetups />} />
            </Routes>
        </BrowserRouter>
    )
}