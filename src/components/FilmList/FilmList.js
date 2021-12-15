import React from 'react';

export default function FilmList({ title, academy_award_nominations, box_office_total }) {
  return (
    <div>
      <h1>Title: {title}</h1>
      <div>nominations:{academy_award_nominations}</div>
      <div>box offcie total:{box_office_total}</div>
    </div>
  );
}
