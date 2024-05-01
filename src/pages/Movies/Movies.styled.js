import { Field, Form } from 'formik';
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';

export const FormConteiner = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Forma = styled(Form)`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  position: relative;
  max-width: 216px;
`;

export const Input = styled(Field)`
  border-radius: 4px;
  width: 200px;
  height: 28px;
  padding-left: 10px;
`;

export const ButtonSearch = styled.button`
  position: absolute;
  height: 100%;
  width: 30px;
  right: 1px;
  background: rgba(0, 0, 0, 0);
  border: none;
  padding: 0;
`;

export const SearchIcon = styled(FaSearch)`
  width: 24px;
`;
