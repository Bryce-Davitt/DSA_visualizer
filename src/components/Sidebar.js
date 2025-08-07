import React, { useEffect, useState } from 'react';

function Sidebar({ onSelect, selectedType, selectedId }) {
  const [algorithms, setAlgorithms] = useState([]);
  const [datastructures, setDatastructures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const [algorithmsRes, datastructuresRes] = await Promise.all([
          fetch('http://localhost:5000/api/algorithms'),
          fetch('http://localhost:5000/api/datastructures')
        ]);

        if (!algorithmsRes.ok || !datastructuresRes.ok) {
          throw new Error('Failed to fetch data');
        }

        const [algorithmsData, datastructuresData] = await Promise.all([
          algorithmsRes.json(),
          datastructuresRes.json()
        ]);

        setAlgorithms(algorithmsData);
        setDatastructures(datastructuresData);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load data structures and algorithms');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div style={{ width: 250, background: '#f4f4f4', padding: 16, height: '100vh' }}>
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <div>Loading...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ width: 250, background: '#f4f4f4', padding: 16, height: '100vh' }}>
        <div style={{ color: 'red', textAlign: 'center', padding: '20px' }}>
          <div>{error}</div>
          <button 
            onClick={() => window.location.reload()} 
            style={{ marginTop: '10px', padding: '8px 16px' }}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ width: 250, background: '#f4f4f4', padding: 16, height: '100vh' }}>
      <h3>Data Structures</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {datastructures.map(ds => (
          <li key={ds.id}>
            <button
              style={{
                background: selectedType === 'ds' && selectedId === ds.id ? '#ddd' : 'white',
                border: 'none',
                width: '100%',
                textAlign: 'left',
                padding: 8,
                cursor: 'pointer',
                marginBottom: 4,
                borderRadius: 4,
                transition: 'background 0.2s'
              }}
              onClick={() => onSelect('ds', ds.id)}
            >
              {ds.name}
            </button>
          </li>
        ))}
      </ul>
      <h3>Algorithms</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {algorithms.map(algo => (
          <li key={algo.id}>
            <button
              style={{
                background: selectedType === 'algo' && selectedId === algo.id ? '#ddd' : 'white',
                border: 'none',
                width: '100%',
                textAlign: 'left',
                padding: 8,
                cursor: 'pointer',
                marginBottom: 4,
                borderRadius: 4,
                transition: 'background 0.2s'
              }}
              onClick={() => onSelect('algo', algo.id)}
            >
              {algo.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar; 