import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Box } from "@mui/material";

const AdminLayout = () => {
  return (
    <>
      <Box display={"flex"}>
        <Sidebar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 2,
            mt: { xs: "56px", md: 0 },
            background: "#e0e0e0",
            minHeight: '100vh'
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default AdminLayout;
