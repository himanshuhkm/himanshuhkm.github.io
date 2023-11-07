import React from 'react';
import content from '../contents/home.md';
export default function Home() {
  let {
    attributes: { title },
  } = content;
  return (
   <>{title}</>
  );
};