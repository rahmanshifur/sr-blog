import React, { useEffect, useState } from "react";
import {
  IconHome,
  IconSquarePlus,
  IconCropPortrait,
  IconUsersGroup,
  IconBrandBlogger,
  IconMenu2,
} from "@tabler/icons-react";
import {
  Avatar,
  Box,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
  Toolbar,
  AppBar,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import bgImg from "../assets/image/bg-img.jpg";

const navData = [
  {
    title: "Dashboard",
    icon: <IconHome />,
    href: "/dashboard",
  },
  {
    title: "Blogs",
    icon: <IconBrandBlogger />,
    children: [
      {
        title: "Add Post",
        href: "/dashboard/add-post",
        icon: <IconSquarePlus />,
      },
      {
        title: "All Post",
        href: "/dashboard/all-posts",
        icon: <IconCropPortrait />,
      },
    ],
  },
  {
    title: "Users",
    href: "/dashboard/users",
    icon: <IconUsersGroup />,
  },
];

const drawerWidth = 250;

function Sidebar() {
  const location = useLocation();
  const [openIndex, setOpenIndex] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const activeParentIndex = navData.findIndex((item) =>
      item.children?.some((child) => child.href === location.pathname)
    );
    if (activeParentIndex !== -1) {
      setOpenIndex(activeParentIndex);
    }
  }, [location.pathname]);

  const drawerContent = (
    <Box sx={{ backgroundColor: "#0f323d", height: "100%", color: "#FFF" }}>
      <Box sx={{ textAlign: "center", mt: 3 }}>
        <Avatar src={bgImg} sx={{ width: 106, height: 106, mx: "auto", mb: 1 }} />
        <Typography sx={{ fontSize: 18, fontWeight: 400 }}>name</Typography>
        <Typography sx={{ fontSize: 12, color: "#6fd0ed" }}>rahman@gmail.com</Typography>
      </Box>
      <Divider sx={{ my: 2, borderColor: "#4f5b62" }} />
      <List>
        {navData.map((item, index) => {
          const isOpen = openIndex === index;
          const isActive = location.pathname === item.href;

          return (
            <Box key={index}>
              <ListItem disablePadding>
                <ListItemButton
                  component={item.children ? "button" : Link}
                  to={!item.children ? item.href : undefined}
                  onClick={() => item.children && handleToggle(index)}
                  sx={{
                    color: "#FFF",
                    backgroundColor: isActive ? "#1565c0" : "transparent",
                    "&:hover": {
                      backgroundColor: "#1e88e5",
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: "#FFF", minWidth: 40 }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                  {item.children && (isOpen ? <ExpandLess /> : <ExpandMore />)}
                </ListItemButton>
              </ListItem>
              {item.children && (
                <Collapse in={isOpen} timeout="auto" unmountOnExit>
                  <List disablePadding>
                    {item.children.map((child, idx) => {
                      const isChildActive = location.pathname === child.href;
                      return (
                        <ListItemButton
                          key={idx}
                          component={Link}
                          to={child.href}
                          sx={{
                            pl: 5,
                            color: "#FFF",
                            backgroundColor: isChildActive ? "#1976d2" : "transparent",
                            "&:hover": {
                              backgroundColor: "#2196f3",
                            },
                          }}
                        >
                          <ListItemIcon sx={{ color: "#FFF", minWidth: 38 }}>
                            {child.icon}
                          </ListItemIcon>
                          <ListItemText primary={child.title} />
                        </ListItemButton>
                      );
                    })}
                  </List>
                </Collapse>
              )}
            </Box>
          );
        })}
      </List>
    </Box>
  );

  return (
    <>
      {isMobile && (
        <AppBar position="fixed" sx={{ backgroundColor: "#0f323d" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <IconMenu2 />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
      )}

      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="sidebar"
      >
        {/* Mobile Drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          {drawerContent}
        </Drawer>

        {/* Desktop Drawer */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: "#0f323d",
              color: "#FFF",
            },
          }}
          open
        >
          {drawerContent}
        </Drawer>
      </Box>
    </>
  );
}

export default Sidebar;
