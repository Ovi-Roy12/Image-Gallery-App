import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import axios from 'axios';
import SearchField from './searchField'; 
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';

const Home = () => {
  const [apiData, setApiData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      let url = 'https://api.unsplash.com/photos';
      let apiKey = 'gdbk1TF4iCws2TYZ9xHAmmgHbGAwkhiyf21Wbn-c_bk';

      // If searchQuery is provided, update URL to include the search query
      if (searchQuery) {
        url = `https://api.unsplash.com/search/photos`;
      }

      try {
        const response = await axios.get(url, {
          params: {
            client_id: apiKey,
            query: searchQuery // Pass searchQuery as a parameter if it exists
          }
        });

        if (searchQuery) {
          // If searchQuery exists, update apiData with the search results
          setApiData(response.data.results);
        } else {
          // If searchQuery doesn't exist, update apiData with the regular photos
          setApiData(response.data);
        }

        console.log(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetchData function
  }, [searchQuery]); // Trigger useEffect whenever searchQuery changes

  const handleSearch = (query) => {
    // Update searchQuery state with the provided query
    setSearchQuery(query);
  };

  return (
    <div>
      <Navbar />
      <h1 className='text-5xl font-bold mb-3'>Choose Your Favorite Images</h1>
      <SearchField onSearch={handleSearch} />
      <h1 className='text-4xl font-bold m-2 mb-3 text-left'>{searchQuery ? `You Searched for: ${searchQuery.charAt(0).toUpperCase() + searchQuery.slice(1)}` : ''}</h1>
      <ImageList cols={3} gap={8}>
        {apiData.map(item => (
          <ImageListItem key={item.id}>
            <img src={item.urls.regular} alt={item.alt_description} />
            <ImageListItemBar title={item.alt_description} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default Home;


