import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

export default function Skeleton() {
  return (
    <div className="skeleton">
      <p>Skeleton Content</p> 
    </div>
  );
}