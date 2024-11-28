// pages/index.js
import HeaderMain from '@/components/HeaderMain';
import NavBar from '@/components/NavBar';
import React from 'react';

const MainPage = () => {
  return (
    <main>
      <HeaderMain/>
      <NavBar/>

      <div>
      <h1>Welcome to the Main Page</h1>
      <p>This is the main page of the Next.js app.</p>
    </div>
    </main>
   
  );
};

export default MainPage;
