import React from 'react';

export default function FilmList({ title, academy_award_nominations, box_office_total }) {
  return (
    <div>
      <h1>Title:{title}</h1>
      <h1>nominations:{academy_award_nominations}</h1>
      <h1>box offcie total:{box_office_total}</h1>
    </div>
  );
}
