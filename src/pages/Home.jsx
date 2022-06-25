import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import {Link} from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <div>
    <Container component="main" maxWidth="xs">
      <Box component="form" noValidate sx={{ mt: 3 }}>
        <ButtonGroup
          variant="outlined"
          aria-label="outlined primary button group"
        >
          {" "} 
          <Link to="Register">
            <Button> Register</Button>
          </Link>
          <Link to="Pricing">
            <Button  variant="contained" color="success">Pricing</Button>
          </Link>
        </ButtonGroup>
      </Box>
    </Container>
    </div>
  );
}
