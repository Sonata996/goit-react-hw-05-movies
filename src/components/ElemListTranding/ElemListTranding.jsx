// import { useState } from "react"
import { Img, LinkTranding, Paregraf, Li } from './ElemListTranding.styled';

export const ElemListTranding = ({
  element: { original_title, id, poster_path },
}) => {
  return (
    <Li>
      <LinkTranding to={`/movies/${id}`}>
        <Img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
        <Paregraf>{original_title}</Paregraf>
      </LinkTranding>
    </Li>
  );
};
