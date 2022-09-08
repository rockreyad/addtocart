import React, { useState } from "react";

import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Menu from "@mui/material/Menu";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <nav class="bg-white shadow">
        <div class="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
          <div class="flex justify-between items-center">
            <div>
              <a
                class="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700"
                href="#"
              >
                Brand
              </a>
            </div>
            <div class="flex md:hidden">
              <button
                type="button"
                class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                aria-label="toggle menu"
              >
                <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                  <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div class="md:flex items-center">
            <div class="flex flex-col md:flex-row md:mx-6">
              <a
                class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0"
                href="#"
              >
                Home
              </a>
              <a
                class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0"
                href="#"
              >
                Shop
              </a>
              <a
                class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0"
                href="#"
              >
                Contact
              </a>
              <a
                class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0"
                href="#"
              >
                About
              </a>
            </div>

            <div class="flex justify-center md:block">
              <IconButton
                aria-label="cart"
                variant="contained"
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <StyledBadge badgeContent={4} color="primary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <p className="p-2"> Your Cart is Empty!</p>
              </Menu>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
