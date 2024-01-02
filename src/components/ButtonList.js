import React from "react";
import Button from "./Button";

const list = [
  { id: 1, name: "All" },
  { id: 2, name: "Music" },
  { id: 3, name: "Tamil Cinema" },
  { id: 4, name: "Gaming" },
  { id: 5, name: "Songs" },
  { id: 6, name: "Live" },
  { id: 7, name: "Soccer" },
  { id: 8, name: "Cricket" },
  { id: 10, name: "Indian Premier League" },
  { id: 11, name: "Tamil Music" },
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((e) => (
        <Button key={e.id} name={e.name} />
      ))}
    </div>
  );
};

export default ButtonList;
