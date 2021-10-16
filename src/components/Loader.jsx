import React from "react";
import { Spin, Alert } from "antd";

const Loader = () => {
  return (
    <Spin size="large" tip="Loading...">
      <Alert
        message="Please Wait "
        description="Loading cryptocurrencies  info for you ."
        type="info"
      />
    </Spin>
  );
};

export default Loader;
