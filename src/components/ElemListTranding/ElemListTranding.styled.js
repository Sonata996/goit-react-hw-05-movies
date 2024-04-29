import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Li = styled.li`
  box-shadow: 10px 5px 5px #7c7665;
`;

export const LinkTranding = styled(Link)`
  color: #e0dfdc;
  text-decoration: none;
  &:hover {
    color: #a8a8a8;
  }
`;

export const Img = styled.img`
  width: 200px;
`;

export const Paregraf = styled.p`
  max-width: 200px;
`;
