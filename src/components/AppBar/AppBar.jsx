import s from './AppBar.module.css';
import { Typography } from "@mui/material";
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import UserMenu from '../UserMenu/UserMenu';

function AppBar() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
   
  {/*email: "testuser123@example.com", password: "examplepwd12345"*/}
    return (
      <header>
      <div className={s.container}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "black", textAlign: "center", mb: 1 }}>
        Make your contacts.
</Typography>
{isLoggedIn ? <UserMenu /> : <AuthNav /> }
<Navigation />

       
      </div>
      </header>
    );
  }
  export default AppBar;