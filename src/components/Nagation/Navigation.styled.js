import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;
export const NavigateLink = styled(NavLink)`
  text-decoration: none;
  color: #e0dfdc;
  &:hover,
  &:active {
    color: #a8a8a8;
  }
`;
