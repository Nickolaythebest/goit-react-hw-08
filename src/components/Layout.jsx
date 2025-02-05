import { Outlet } from 'react-router-dom';
import AppBar from './AppBar/AppBar.jsx';
import { Suspense } from 'react';

function Layout(){
    return (
      <Suspense>
        <div>
       <AppBar />
       <Outlet/>
       </div>
       </Suspense>
       
    );
  }
  export default Layout;