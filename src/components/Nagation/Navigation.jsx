import { NavigateLink, Nav } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Nav>
      <NavigateLink to="/">Home</NavigateLink>
      <NavigateLink to="/movies">Movies</NavigateLink>
    </Nav>
  );
};
