import { Formik, Field, Form } from "formik";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { serviceAPISearch } from "service/serviceApi";




export const Movies = () =>{
  const [searchValue, setSearchValue] = useState([])
const [value, setValue] = useState('')


useEffect(() =>{
async function getApiSearchValue() {
  try{
    const getApi = await serviceAPISearch(value)
    setSearchValue(getApi)
  }catch{

  }
}
getApiSearchValue()
},[value])



    return(
    <div>
        <Formik
          initialValues={{
            value: ''
          }}
          onSubmit={values => {
            setValue(values.value)
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
            <Link to={`${elem.id}?query=${elem.title}`}>{elem.title}</Link>
          </li>
          )}
          </ul>}
      </div>
      )
}