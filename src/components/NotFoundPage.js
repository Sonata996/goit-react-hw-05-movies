import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div>
      Non-existent route. Follow this link to 
      <Link to="/">Home page</Link>.
    </div>
  );
}
