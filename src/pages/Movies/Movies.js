import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { serviceAPISearch } from 'service/serviceApi';
import { useSearch } from 'hook/useSearch';
import { ListSearch } from 'components/ListSearch/ListSearch';
import {
  FormConteiner,
  Forma,
  Input,
  SearchIcon,
  ButtonSearch,
} from './Movies.styled';

// const savedLocalStorage = localStorage.getItem('thisSearch')

export default function Movies() {
  const { changeSearch, query } = useSearch();
  const [searchValue, setSearchValue] = useState([]);
  const [value, setValue] = useState('');
  const location = useLocation();

  useEffect(() => {
    async function getApiSearchValue() {
      try {
        const getApi = await serviceAPISearch(query ?? value);
        setSearchValue(getApi);
      } catch {}
    }
    getApiSearchValue();
  }, [value, query]);

  return (
    <FormConteiner>
      <Formik
        initialValues={{
          value: '',
        }}
        onSubmit={values => {
          setValue(values.value);
          changeSearch(values.value);
        }}
      >
        {({ errors, touched }) => (
          <Forma>
            <Input name="value" />
            {errors.value && touched.value ? <div>{errors.value}</div> : null}
            <ButtonSearch type="submit">
              <SearchIcon />
            </ButtonSearch>
          </Forma>
        )}
      </Formik>
      {query && searchValue.length !== 0 && (
        <ListSearch searchValue={searchValue} location={location} />
      )}
    </FormConteiner>
  );
}
