/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from "react";
import { Drawer, List, Avatar } from "antd";

const CartDrawer = ({ onClose, onOpen, selectedMovies }) => {
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
      </Drawer>
    </>
  );
};

export default CartDrawer;
