import { Formik, Field, Form } from "formik";
import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams} from "react-router-dom";
import { serviceAPISearch } from "service/serviceApi";




export default function Movies(){
  const [params, setParams] = useSearchParams()
  const search = params.get('value') ?? ''
const [searchValue, setSearchValue] = useState([])
const [value, setValue] = useState('')

const location = useLocation();

useEffect(() =>{
async function getApiSearchValue() {
  try{
    const getApi = await serviceAPISearch(value)
    setSearchValue(getApi)
  }catch{

  }
}
getApiSearchValue()
},[value, search])


    return(
    <div>
        <Formik
          initialValues={{
            value: ''
          }}
          onSubmit={values => {
            setValue(values.value)
            setParams({value: values.value})
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field name="value" />
              {errors.value && touched.value ? (
                <div>{errors.value}</div>
              ) : null}
              <button type="submit">Search</button>
            </Form>
          )}
        </Formik>
        {value && 
        <ul>
          {searchValue.results.map(elem => 
          <li key={elem.id}>
            <Link to={`${elem.id}`} 
            state={{from:location}}>{elem.title}
            </Link>
          </li>
          )}
          </ul>}
      </div>
      )
}