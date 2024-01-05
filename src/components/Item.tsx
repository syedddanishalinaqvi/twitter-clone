import Image from "next/image";
import Link from "next/link";
import React, { ReactPropTypes } from "react";
import { IconType } from "react-icons";
import "../css/Item.css";

interface ItemProps {
  item: {
    name: string;
    href: string;
    icon: IconType;
  };
}

const Item = ({ item }: ItemProps) => {
  const { name, href, icon: IconComponent } = item;
  return (
    <Link
      href={href}
      as={typeof href === "string" ? href : undefined}
      className="item"
    >
      <div className="item-content">
        <div className="icon">
          <IconComponent />
        </div>
        <div className="icon-content">{name === "Twitter" ? "" : name}</div>
      </div>
    </Link>
  );
};
export default Item;
