import { ElemListTranding } from 'components/ElemListTranding/ElemListTranding';
import { LinkTranding } from './LinkTranding.styled';

export const ListLinkTranding = ({ movie }) => {
  console.log(movie);
  return (
    <LinkTranding>
      {movie.map(elem => (
        <ElemListTranding key={elem.id} element={elem} />
      ))}
    </LinkTranding>
  );
};
