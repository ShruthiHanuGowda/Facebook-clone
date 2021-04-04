import React from "react";
import "./SidebarRow.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";

function Sidebar() {
  return (
    <div className="sibebar">
      <SidebarRow
        src="https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228__340.jpg"
        title="Shruthi"
      />
      <SidebarRow Icon={LocalHospitalIcon} title="COVID 19 info" />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="MarketPlace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreIcon} title="MarketPlace" />
    </div>
  );
}

export default Sidebar;
