import { useState } from 'react';
import { serviceAPITrending } from 'service/serviceApi';
import { ListLinkTranding } from 'components/LinkTranding/LinkTranding';

export default function Home() {
  const [movie, setMovie] = useState([]);

  async function addTrendingList() {
    try {
      const listTranding = await serviceAPITrending();
      setMovie(listTranding.results);
    } catch {
    } finally {
    }
  }

  if (movie.length === 0) {
    addTrendingList();
  }

  return (
    <div>
      <h1>Trending today</h1>

      <ListLinkTranding movie={movie} />
    </div>
  );
}
