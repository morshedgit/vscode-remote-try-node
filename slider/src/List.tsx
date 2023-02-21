import React, { useState } from "react";
import ListItem from "./ListItem";

interface ListProps {
  items: string[];
}

const List: React.FC<ListProps> = ({ items }) => {
  const [currentItems, setCurrentItems] = useState(items);

  return (
    <ul className="list">
      {/* {currentItems.map((item, index) => (
        // <ListItem
        //   key={item}
        //   item={item}
        //   onSwipeLeft={() =>
        //     setCurrentItems(currentItems.filter((_, i) => i !== index))
        //   }
        //   onSwipeRight={() => {
        //     // You would need to implement the logic for archiving the item here
        //   }}
        // />
      ))} */}
    </ul>
  );
};

export default List;
