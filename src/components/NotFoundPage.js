import { Navigate, useParams } from 'react-router-dom';

export default function NotFoundPage() {
  let params = useParams()
  if (params !== 'movies') {
     return <Navigate to='/'/>
  }
}
