import { Button } from "@mui/material";
import { Link } from "react-router-dom";


function AuthNav() {
    return(
        <>
        <Button fullWidth 
        variant="contained" 
        color="info" 
        sx={{ mt: 2, color: 'black',                // Цвет текста по умолчанию
            backgroundColor: '#e0e0e0',    // Цвет фона кнопки
            '&:hover': {
                backgroundColor: '#1976d2', // Цвет фона при наведении (синий)
                color: 'white', }}} 
        component={Link} to='/login'>Login</Button>

        <Button fullWidth 
        variant="contained" 
        color="info" 
        sx={{ mt: 2, color: 'black',                // Цвет текста по умолчанию
            backgroundColor: '#e0e0e0',    // Цвет фона кнопки
            '&:hover': {
                backgroundColor: '#1976d2', // Цвет фона при наведении (синий)
                color: 'white', }}} 
        component={Link} to='/registration'>Registration</Button>
        </>
    )
    
}
export default AuthNav;