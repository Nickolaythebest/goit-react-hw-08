import { Form, Formik } from "formik";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";  // Импортируем Link для навигации
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";

function LoginForm() {
    const initialValues = {
        email: '',
        password: '',
    };
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (values, options) => {
        console.log(values);
        dispatch(loginThunk(values))
        .unwrap()
        .then(() => navigate('/'));
        options.resetForm();
    };

    return (
        <Container maxWidth="xs">
            <Box 
                sx={{ mt: 5, p: 3, borderRadius: 2, boxShadow: 3, bgcolor: "background.paper" }}
            >
                <Typography variant="h5" align="center" color="primary" gutterBottom>
                    Go to Contacts!
                </Typography>

                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    {({ handleChange, values }) => (
                        <Form>
                            {/* Поле Email */}
                            <TextField
                                fullWidth
                                label="Email"
                                variant="outlined"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                margin="normal"
                                required
                                sx={{ mb: 2 }} // Добавление отступа снизу
                            />

                            {/* Поле Password */}
                            <TextField
                                fullWidth
                                label="Password"
                                type="password"
                                variant="outlined"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                margin="normal"
                                required
                                sx={{ mb: 2 }} // Добавление отступа снизу
                            />

                            {/* Кнопка Вход */}
                            <Button 
                                fullWidth 
                                type="submit" 
                                variant="contained" 
                                color="primary" 
                                sx={{ mt: 2 }}
                            >
                                Login
                            </Button>

                            {/* Текст с ссылкой для регистрации */}
                            <Typography 
                                variant="body2" // Используем body2 для текста
                                align="center"
                                color="textSecondary"
                                sx={{ mt: 2 }}
                            >
                                You do not have an account? 
                                <Link to='/register' style={{ color: '#1976d2', textDecoration: 'none' }}>
                                    Let's create one!
                                </Link>
                            </Typography>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Container>
    );
}

export default LoginForm;
