import { useState, useEffect } from 'react';
import ContestCard from '../components/ContestCard';
import { fetchContests } from '../services/api';

const Home = () => {
  const [contests, setContests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContests = async () => {
      const data = await fetchContests();
      setContests(data);
      setLoading(false);
    };
    loadContests();
  }, []);

  return (
    <main className="main-content">
      <div className="container">
        <h2 className="section-title">Upcoming Contests</h2>
        
        {loading ? (
          <div className="loader">Loading contests...</div>
        ) : (
          <div className="contest-grid">
            {contests.map(contest => (
              <ContestCard key={`${contest.platform}-${contest.name}`} contest={contest} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;