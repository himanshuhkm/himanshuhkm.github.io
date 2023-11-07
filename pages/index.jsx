import React from 'react';
import content from '../contents/home.md';
import { chunk } from 'lodash';
export default function Home() {
  let {
    attributes: { title,member },
  } = content;
  member = chunk(member);
  return (
   <>{title}
   
   {member.map(o =>
        o.map(({ Name, Registration}) => (
            <ul>
              <li>{Name}</li>
              <li>{Registration}</li>
            </ul>
        ))
      )}
   </>
   
  );
};