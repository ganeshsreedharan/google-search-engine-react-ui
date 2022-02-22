import React, { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useStateContext } from '../contexts/SearchContextProvider';
import SearchAllComponent from '../pages/All';
import Images from '../pages/Images';
import News from '../pages/News';
import Videos from '../pages/Videos';
import { Loading } from './Loading';


export const SearchRoutes = () => {
  const { loading,getResults, searchTerm } = useStateContext();
  const location = useLocation();
  useEffect(() => {
    if (searchTerm !== '') {
      if (location.pathname === '/videos') {
        getResults(`/search/q=${searchTerm} videos`);
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=40`);
      }
    }
  }, [searchTerm, location.pathname]);

  if (loading) return <Loading />;

  return (
    <div className="p-4">
      <Routes>
        <Route exact path="/search" element={<SearchAllComponent />} />
        <Route exact path="/news" element={<News />} />
        <Route exact path="/images" element={<Images />} />
        <Route exact path="/videos" element={<Videos />} />
        <Route path="*" element={<Navigate to="/search" replace />} />
      </Routes>
    </div>
  )
}
