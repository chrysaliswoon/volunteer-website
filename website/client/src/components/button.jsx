import React from "react";

export default function Button({ css, type, name, id, description }) {
  return (
    <button className={css} type={type} name={name} id={id}>
      {description}
    </button>
  );
}
