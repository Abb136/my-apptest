'use client';

import { useEffect, useState } from 'react';
import MyMap from '../Project1/map';

export default function HomePage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,flags,region')
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(err => console.error('Error fetching countries:', err));
  }, []);

  return (
    <div>
      <h1>Country Map</h1>
      <MyMap countries={countries} />
    </div>
  );
};