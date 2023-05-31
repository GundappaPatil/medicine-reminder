import React from "react";
import "./index.css";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, qty, image,time } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>Qty:{qty}</p>
              <p>time:{time}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;