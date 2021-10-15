import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
} from "@ant-design/icons";
import icon from "../images/cryptocurrency.png";

const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">CryptoWorld</Link>
        </Typography.Title>
        {/* <Button className="menu-control-container"></Button> */}
      </div>
      <Menu theme="dark">
        <Menu.Item Icon={HomeOutlined}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item Icon={FundOutlined}>
          <Link to="/cryptocurrencies">CryptoCurrencies</Link>
        </Menu.Item>
        <Menu.Item Icon={MoneyCollectOutlined}>
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>
        <Menu.Item Icon={BulbOutlined}>
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default NavBar;
