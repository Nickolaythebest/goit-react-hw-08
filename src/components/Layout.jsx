import { Outlet } from 'react-router-dom';
import AppBar from './AppBar/AppBar.jsx';
function Layout(){
    
  
    return (
      <div>
       <AppBar />
       <Outlet/>
      </div>
    );
  }
  export default Layout;