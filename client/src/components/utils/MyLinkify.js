import React from "react";
import Linkify from "react-linkify";

export const MyLinkify = ({ text }) => {
  return (
    <Linkify
      componentDecorator={(decoratedHref, decoratedText, key) => (
        <a target="blank" href={decoratedHref} key={key}>
          {decoratedText}
        </a>
      )}
    >
      {text}
    </Linkify>
  );
};
