import { LinkTranding, Img, Paragraf, List } from './ListSearch.styled';

export const ListSearch = ({ searchValue, location }) => {
  return (
    <List>
      {searchValue.results.map(
        elem =>
          elem.poster_path && (
            <li key={elem.id}>
              <LinkTranding to={`${elem.id}`} state={{ from: location }}>
                <Img
                  src={`https://image.tmdb.org/t/p/w500/${elem.poster_path}`}
                  alt="Poster"
                />
                <Paragraf>{elem.title}</Paragraf>
              </LinkTranding>
            </li>
          )
      )}
    </List>
  );
};
