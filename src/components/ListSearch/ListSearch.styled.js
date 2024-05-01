import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 15px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Img = styled.img`
  width: 200px;
`;

export const Paragraf = styled.p`
  max-width: 200px;
`;

export const LinkTranding = styled(Link)`
  color: #e0dfdc;
  text-decoration: none;
  &:hover {
    color: #a8a8a8;
  }
`;
