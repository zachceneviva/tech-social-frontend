import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import People from "../pages/People";
import Profile from "../pages/Profile";
import AllGroups from "../pages/AllGroups";
import AllMeetups from "../pages/AllMeetups";
import Signup from "../pages/Signup";
import Login from "../pages/Login"
import { useRecoilValue } from "recoil";
import { loggedInState } from "../recoil/selector";
import Navigation from "../components/Navbar";
import CreateGroup from "../pages/CreateGroup";
import GroupShow from "../pages/GroupShow";
import CreateMeetup from "../pages/CreateMeetup";
import MeetupShow from "../pages/MeetupShow";


export default function AppRoutes () {

    const loggedIn = useRecoilValue(loggedInState)

    return (
        <BrowserRouter>
            <Navigation/>
            <Routes>
                <Route path='register' element={<Signup/>} />
                <Route path='login' element={<Login/>} />
            </Routes>
                {loggedIn ?
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='profile/:id' element={<Profile />} />
                <Route path='people' element={<People />} />
                <Route path='meetups/create' element={<CreateMeetup/>} />
                <Route path='meetup/:id' element={<MeetupShow />} />
                <Route path='meetups' element={<AllMeetups />} />
                <Route path='group/create' element={<CreateGroup />} />
                <Route path='groups/:id' element={<GroupShow/>} />
                <Route path='groups' element={<AllGroups/>} />
            </Routes>
                : null}
        </BrowserRouter>
    )
}