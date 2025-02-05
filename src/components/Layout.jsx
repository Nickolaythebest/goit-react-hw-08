import { Outlet } from 'react-router-dom';
import AppBar from './AppBar/AppBar.jsx';
import { Suspense } from 'react';

function Layout(){
    return (
      
        <div>
       <AppBar />
       <Suspense fallback={null}>
       <Outlet/>
       </Suspense>
       </div>
       

    );
  }
  export default Layout;