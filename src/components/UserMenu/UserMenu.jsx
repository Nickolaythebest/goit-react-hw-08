import { Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from "../../redux/contacts/operations";
import { selectUser } from "../../redux/auth/selectors";


function UserMenu() {
    const user = useSelector(selectUser);
    
    const dispatch = useDispatch();
    return (
        <Box sx={{ 
            marginTop: 2,
            display: 'flex', 
            flexDirection: 'column',  // Элементы располагаются вертикально
            alignItems: 'center',     // Центрирование по горизонтали
            gap: 1                    // Отступ между элементами
        }}>
            <Typography variant="h6" color='success' sx={{ mr: 2 }}>
                Welcome, {user.name}
            </Typography>
            
        <Button 
        fullWidth 
        variant="contained" 
        color="info" 
        sx={{ mt: 2, color: 'black',                // Цвет текста по умолчанию
            backgroundColor: '#e0e0e0',    // Цвет фона кнопки
            '&:hover': {
                backgroundColor: '#1976d2', // Цвет фона при наведении (синий)
                color: 'white', }}} 
        component={Link} to='/'
        onClick={() => dispatch(logoutThunk())}>Logout</Button>
        </Box>

    );
}
export default UserMenu;