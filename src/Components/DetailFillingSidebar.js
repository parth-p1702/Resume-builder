import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import FolderRoundedIcon from "@mui/icons-material/FolderRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import StarsRoundedIcon from "@mui/icons-material/StarsRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import WorkHistoryRoundedIcon from "@mui/icons-material/WorkHistoryRounded";
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "../Styles/DetailsFillingSideBar.css";

const ITEM_HEIGHT = 48;

const DetailFillingSidebar = ({ tab, setTab }) => {
  const getWindowSize = () => {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  useEffect(() => {
    const handleWindowResize = () => setWindowSize(getWindowSize());
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const tabsList = [
    { name: "Personal Info", icon: <AccountCircleOutlinedIcon /> },
    { name: "Work Experience", icon: <WorkHistoryRoundedIcon /> },
    { name: "Education", icon: <SchoolRoundedIcon /> },
    { name: "Key Skills", icon: <StarsRoundedIcon /> },
    { name: "Projects", icon: <FolderRoundedIcon /> },
    { name: "Achievements", icon: <EmojiEventsRoundedIcon /> },
    { name: "Languages", icon: <LanguageRoundedIcon /> },
    { name: "Certifications", icon: <VerifiedRoundedIcon /> },
  ];

  const renderTabItem = (item, index) => (
    <ListItem disablePadding key={index}>
      <ListItemButton
        component="a"
        sx={tab === index ? { borderLeft: "3px solid rgb(0,128,255)" } : null}
        onClick={() => setTab(index)}
      >
        {React.cloneElement(item.icon, { color: tab === index ? "info" : "disabled" })}
        <ListItemText
          className="IcoSpace"
          primary={item.name}
          sx={tab === index ? { color: "rgb(0,128,255)", paddingLeft: "8px" } : null}
        />
      </ListItemButton>
    </ListItem>
  );

  return (
    <div>
      {windowSize.innerWidth > 850 ? (
        <Box
          sx={{
            width: "100%",
            maxWidth: 360,
            boxShadow: "0px 0px 4px 0px rgb(228,228,228)",
            height: "fit-content",
          }}
        >
          <List disablePadding>
            {tabsList.map(renderTabItem).reduce((acc, curr, idx) => {
              // add Divider between items except last
              if (idx < tabsList.length - 1) {
                return [...acc, curr, <Divider key={"div-" + idx} />];
              } else return [...acc, curr];
            }, [])}
          </List>
        </Box>
      ) : (
        <div>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{ "aria-labelledby": "long-button" }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{ style: { maxHeight: ITEM_HEIGHT * 4.5, width: "20ch" } }}
          >
            {tabsList.map((item, index) => (
              <div key={index}>
                <MenuItem
                  sx={tab === index ? { color: "rgb(0,128,255)" } : null}
                  onClick={() => {
                    setTab(index);
                    handleClose();
                  }}
                >
                  {React.cloneElement(item.icon, { color: tab === index ? "info" : "disabled" })}
                  <ListItemText
                    className="IcoSpace"
                    primary={item.name}
                    sx={tab === index ? { color: "rgb(0,128,255)", paddingLeft: "8px" } : null}
                  />
                </MenuItem>
                {index < tabsList.length - 1 && <Divider />}
              </div>
            ))}
          </Menu>
        </div>
      )}
    </div>
  );
};

export default DetailFillingSidebar;
