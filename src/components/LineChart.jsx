import React from "react";
import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";

const { Title, Text } = Typography;

const LineChart = ({ coinDetails, coinHistory, currentPrice, coinName }) => {
  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} Price Charts
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            {coinDetails.change} %
          </Title>
          <Title level={5} className="current-price">
            Current {coinName} price : ${currentPrice}
          </Title>
        </Col>
      </Row>
      {/* <Line data={data} options={options} /> */}
    </>
  );
};

export default LineChart;
