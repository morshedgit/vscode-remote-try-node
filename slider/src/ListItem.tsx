import React from "react";
// import Swipeable from "react-swipeable";

const ListItem: React.FC<{ item: string }> = ({ item }) => {
  const handleSwipeLeft = () => {
    // You would need to implement the logic for removing the item here
  };

  const handleSwipeRight = () => {
    // You would need to implement the logic for archiving the item here
  };

  return (
    // <Swipeable onSwipedLeft={handleSwipeLeft} onSwipedRight={handleSwipeRight}>
    <li className="list-item">
      <span className="list-item-text">{item}</span>
    </li>
  );
};

export default ListItem;
