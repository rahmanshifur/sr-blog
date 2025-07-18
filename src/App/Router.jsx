import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import PageNotFound from "../pages/404";
import Login from "../pages/Login";
import UserLayout from "../layouts/UserLayout";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import AddPost from "../pages/admin/AddPost";
import AllPost from "../pages/admin/AllPost";
import Users from "../pages/admin/Users";
import BlogSinglePage from "../pages/SinglePost";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="post/:id" element={<BlogSinglePage />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          <Route path="/dashboard" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="add-post" element={<AddPost />} />
            <Route path="all-posts" element={<AllPost />} />
            <Route path="users" element={<Users />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
