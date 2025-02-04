"use client";

import { useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

const pages = ["booked", "contact", "about"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar position="fixed" sx={{ bgcolor: "#F5EEE6", color: "black" }}>
      <Container
        maxWidth="xl"
        sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        <Typography
          sx={{
            fontSize: "2rem",

            fontWeight: "bold",
            display: { xs: "none", md: "flex" },
          }}
        >
          <Link href={"/"} style={{ textDecoration: "none", color: "black" }}>
            <Typography
              component={"span"}
              sx={{ color: "#FF6A3D", fontSize: "2rem", fontWeight: "bold" }}
            >
              NEXT
            </Typography>{" "}
            TOUR
          </Link>
        </Typography>

        <Box
          sx={{
            display: { xs: "flex", md: "none" },
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Link href={`/${page}`}>
                  <Button key={page} onClick={handleCloseNavMenu} sx={{ color: "black" }}>
                    {page === "about" ? "about us" : page}
                  </Button>
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Typography
          sx={{ fontSize: "2rem", fontWeight: "bold", display: { xs: "flex", md: "none" } }}
        >
          <span style={{ color: "#FF6A3D" }}>NEXT</span> TOUR
        </Typography>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {pages.map((page) => (
            <Link key={page} href={`/${page}`}>
              <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: "black" }}>
                {page === "about" ? "about us" : page}
              </Button>
            </Link>
          ))}
        </Box>
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Link href={`#`} sx={{ textAlign: "center" }}>
                  {setting}
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Container>
    </AppBar>
  );
}
