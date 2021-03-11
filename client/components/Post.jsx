import React from 'react';

export default function Post({ title, body, styling }) {
  // console.log(styling);
  return (
    <div className={`Post ${styling}`}>
      <div className={`PostAlign ${styling}Align`}>
        <h4>{title}</h4>
        <p>{body}</p>
      </div>
    </div>
  );
}
