import { useSearchParams } from "react-router-dom"



export const useSearch = () => {
    const [params, setParams] = useSearchParams();
    const query = params.get('query') ?? '';


    const changeSearch = (evt) => {
      if (query !== evt) {
        
      }
      params.set('query', evt);
      setParams(params);
    };
    
      return{
        query,
        changeSearch
      }
}