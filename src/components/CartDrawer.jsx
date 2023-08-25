/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from "react";
import { Drawer, List, Avatar, Button } from "antd";

const CartDrawer = ({ onClose, onOpen, selectedMovies, clearCart }) => {
  console.log(selectedMovies);
  return (
    <>
      <Drawer
        title="ตะกร้าสินค้า"
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
        <Button danger onClick={clearCart}>
          Clear Cart
        </Button>
      </Drawer>
    </>
  );
};

export default CartDrawer;
