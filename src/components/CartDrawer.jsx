/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { Drawer, List, Avatar, Button, Modal } from "antd";
import qrcode from "../../public/img/qrcode.png";

const CartDrawer = ({ onClose, onOpen, selectedMovies, clearCart }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [counter, setCounter] = useState(60);
  const [timer, setIsTimer] = useState(false);

  useEffect(() => {
    if (timer && counter > 0) {
      const interval = setInterval(() => setCounter(counter - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [counter, timer]);

  const showModal = () => {
    setIsModalOpen(true);
    setIsTimer(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setIsTimer(false);
    setCounter(60);
  };
  return (
    <>
      <Drawer
        title="Market Cart"
        placement="right"
        onClose={onClose}
        open={onOpen}
        closable={false}
      >
        <List
          dataSource={selectedMovies}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={`https://image.tmdb.org/t/p/w92/${item.poster_path}`}
                  />
                }
                title={item.title}
              />
            </List.Item>
          )}
        />
        <div className="flex justify-end">
          <Button danger onClick={clearCart}>
            Clear Cart
          </Button>
          {Array.isArray(selectedMovies) &&
          selectedMovies.length === 0 ? null : (
            <Button onClick={showModal}>ชำระเงิน</Button>
          )}
        </div>
      </Drawer>
      <Modal
        title="ชำระเงิน"
        open={isModalOpen}
        closable={false}
        footer={[
          <Button key="1" danger onClick={handleCancel}>
            Cancel
          </Button>,
        ]}
      >
        <p>กรุณาชำระเงินภายในระยะเวลา : {counter} วินาที</p>
        <img src={qrcode} />
      </Modal>
    </>
  );
};

export default CartDrawer;
