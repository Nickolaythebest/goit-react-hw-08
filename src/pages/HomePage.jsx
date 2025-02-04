import { Typography, Container, Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function HomePage() {
    return (
        <Container maxWidth="md">
            <Box 
                sx={{ 
                    mt: 5, p: 4, borderRadius: 2, boxShadow: 3, bgcolor: "background.paper",
                    textAlign: "center"
                }}
            >
               

                {/* Описание */}
                <Typography variant="body1" sx={{ color: "black", mb: 3 }}>
                    Your simple and efficient solution for managing contacts. Easily add, edit, delete, and filter your contacts.
                </Typography>

                {/* Ключевые особенности */}
                <Box sx={{ textAlign: "left", display: "inline-block" }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", color: "black", mb: 1 }}>
                        Key Features:
                    </Typography>

                    <Typography variant="body1" sx={{ display: "flex", color: "black", alignItems: "center", mb: 1 }}>
                        <CheckCircleIcon color="success" sx={{ mr: 1 }} />
                        Store and manage contacts securely
                    </Typography>

                    <Typography variant="body1" sx={{ display: "flex", color: "black", alignItems: "center", mb: 1 }}>
                        <CheckCircleIcon color="success" sx={{ mr: 1 }} />
                        Search and filter contacts effortlessly
                    </Typography>

                    <Typography variant="body1" sx={{ display: "flex", color: "black", alignItems: "center", mb: 2 }}>
                        <CheckCircleIcon color="success" sx={{ mr: 1 }} />
                        Real-time updates with a user-friendly interface
                    </Typography>
                </Box>

                {/* Заключение */}
                <Typography variant="h6" sx={{ fontWeight: "bold",  color: "black" }}>
                    Start organizing your contacts today!
                </Typography>
            </Box>
        </Container>
    );
}

export default HomePage;
