import React from "react";
import "./style.scss";
import logoWeb from "./img/logoWeb.svg";
import list from "./img/list.svg";
import search from "./img/search.svg";
import searchBlack from "./img/searchBlack.svg";
import circle from "./img/circle.svg";
import chat from "./img/chat.svg";
import add from "./img/add.svg";
import download from "./img/download.svg";
import downloadCloud from "./img/downloadCloud.svg";
import deleteIcon from "./img/delete.svg";

export enum ICON_SIZE {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
}

interface IconsProps {
  size?: ICON_SIZE;
  name: string;
  url?: string;
}

const Icons = ({ name, url, size }: IconsProps): JSX.Element => {
  let className = "Icon ";
  let scr;

  if (size === ICON_SIZE.SMALL) {
    className += "Icon_small ";
  } else if (size === ICON_SIZE.MEDIUM) {
    className += "Icon_medium ";
  } else if (size === ICON_SIZE.LARGE) {
    className += "Icon_large ";
  }

  switch (true) {
    case name == "list":
      scr = list;
      break;

    case name == "search":
      scr = search;
      break;

    case name == "searchBlack":
      scr = searchBlack;
      break;

    case name == "circle":
      scr = circle;
      break;

    case name == "logoWeb":
      scr = logoWeb;
      break;

    case name == "previewProject":
      scr = url;
      break;

    case name == "chat":
      scr = chat;
      break;

    case name == "add":
      scr = add;
      break;

    case name == "download":
      scr = download;
      break;

    case name == "delete":
      scr = deleteIcon;
      break;

    case name == "downloadCloud":
      scr = downloadCloud;
      break;
  }
  return <img src={scr} alt={name} className={className}></img>;
};

export { Icons };
