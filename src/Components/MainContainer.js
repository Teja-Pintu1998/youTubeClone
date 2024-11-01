import React from 'react';
import ButtonList from './ButtonList';
import VideosContainer from './VideosContainer';

const MainContainer = () => {
  return (
    <div className='shadow-lg'>
      <ButtonList/>
      <VideosContainer/>
    </div>
  )
}

export default MainContainer
