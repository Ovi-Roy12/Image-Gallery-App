import React, { useState } from 'react';

const SearchField = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const inputHandler = (event) => {
    setSearchQuery(event.target.value);
  };

  const searchHandler = () => {
    onSearch(searchQuery);
    setSearchQuery('')
  };
  return (
    <div className="flex items-center">
      <input
        value={searchQuery}
        onChange={inputHandler}
        type="text"
        placeholder="Search..."
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2 ml-5 mb-5 mt-5"
      />
      <button onClick={searchHandler} className="ml-2 px-4 py-2 mr-5 bg-blue-500 text-white rounded-md hover:bg-blue-600">Search</button>
      
    </div>
  );
};

export default SearchField;
