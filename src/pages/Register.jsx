import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import { red } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Select from "@mui/material/Select";
import { createTheme, styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const theme = createTheme();

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#0063cc",
  borderColor: "#0063cc",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(red[900]),
  backgroundColor: red[900],
  borderRadius: 25,
  maxWidth: 250,
  fontSize: 12,
  alignSelf: "center",
  "&:hover": {
    backgroundColor: red[500],
  },
}));

const ErrorText = styled(Typography)(({ theme }) => ({
  color: "#d32f2f",
}));

const required = [
  "firstname",
  "lata",
  "country",

  "tids_number",
  "fullname",

  "email",
  "mobile",

  "address",
  "city",
];

function Register() {
  const [success, setSuccess] = React.useState(false);
  const [form, setForm] = React.useState({ lata: "10",country:"india" });
  const [error, setError] = React.useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    let _error = {};
    required.forEach((element) => {
      let state_value = form[element];
      if (state_value == "" || state_value == null)
        _error[element] = element + " is Required";
    });
    setError({ ..._error });
    setSuccess(true)


  };

  const handleChange = (event) => {
    let {
      target: { name, value },
    } = event;
    let temp = form;
    temp[name] = value;
    setForm({ ...temp });
  };

  console.log(form, error);

  return (
    <div
      style={{
        background: "#f2f2f2",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CssBaseline />
      <Box
        sx={{
          maxWidth: "80vw",
          maxHeight: "auto",
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
          mt: 4,
          mb:4
        }}
        boxShadow="10"
      >
        <Card style={{ padding: 32 }}>
          <div style={{ paddingBottom: 8 }}>
            <Typography component="h3" variant="h3">
              Registration From
            </Typography>

            <p component="h5" variant="h6">
              Many desktop pulishing packages and webpage
            </p>
          </div>

          <Box component="form" noValidate onSubmit={handleSubmit}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={12}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Corporate"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Travel Agency"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Airline"
                  />
                </RadioGroup>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  autoComplete="given-name"
                  name="firstname"
                  required
                  fullWidth
                  id="firstName"
                  label="Company Name"
                  autoFocus
                  InputLabelProps={{
                    shrink: true,
                  }}
                  error={error?.firstname ? true : false}
                  onChange={handleChange}
                />

                <ErrorText variant="inherit" color="textPrimary">
                  {error?.firstname}
                </ErrorText>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    LATA / NLATA
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={form?.lata}
                    label="Age"
                    name="lata"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                  <ErrorText variant="inherit" color="textPrimary">
                    {error?.lata}
                  </ErrorText>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="TIDS Number"
                  name="tids_number"
                  autoComplete="family-name"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={handleChange}
                  error={error?.tids_number ? true : false}
                />
                <Typography variant="body2" color="textPrimary">
                  Unique identifier provided by TIDS
                </Typography>
                <ErrorText variant="inherit" color="textPrimary">
                  {error?.tids_number}
                </ErrorText>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Full Name"
                  name="fullname"
                  autoComplete="family-name"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={handleChange}
                  error={error?.fullname ? true : false}
                />
                <ErrorText variant="inherit" color="textPrimary">
                  {error?.fullname}
                </ErrorText>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Email Id"
                  name="email"
                  autoComplete="family-name"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={handleChange}
                  error={error?.email ? true : false}
                />
                <ErrorText variant="inherit" color="textPrimary">
                  {error?.email}
                </ErrorText>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  fullWidth
                  id="lastName"
                  label="Designation"
                  name="designation"
                  autoComplete="family-name"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  fullWidth
                  label="Contact Number"
                  id="outlined-start-adornment"
                  name="mobile"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">+971</InputAdornment>
                    ),
                  }}
                  onChange={handleChange}
                  error={error?.mobile ? true : false}
                />
                <ErrorText variant="inherit" color="textPrimary">
                  {error?.mobile}
                </ErrorText>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Company Address"
                  name="address"
                  autoComplete="family-name"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={handleChange}
                  error={error?.address ? true : false}
                />
                <ErrorText variant="inherit" color="textPrimary">
                  {error?.address}
                </ErrorText>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Country</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={form.country}
                    label="country"
                    name="country"
                    onChange={handleChange}
                  >
                    <MenuItem value={'India'}>India</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                  <ErrorText variant="inherit" color="textPrimary">
                    {error?.country}
                  </ErrorText>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  fullWidth
                  id="lastName"
                  label="State / province"
                  name="state"
                  autoComplete="family-name"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="City"
                  name="city"
                  autoComplete="family-name"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={handleChange}
                  error={error?.city ? true : false}
                />
                <ErrorText variant="inherit" color="textPrimary">
                  {error?.city}
                </ErrorText>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  fullWidth
                  id="lastName"
                  label="Enter zip code"
                  name="zipcode"
                  autoComplete="family-name"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>


            {
              success ? ( <Grid container  style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop:8
              }}><Alert onClose={() => {}}>Your registration was successfull</Alert></Grid>):(
                <Grid container>
                <Grid
                  item
                  md={4}
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Checkbox {...label} />
                  <span>
                    Agree to the{" "}
                    <a href="" style={{ color: "blue" }}>
                      {" "}
                      Terms of Service
                    </a>{" "}
                    to{" "}
                    <a href="" style={{ color: "blue" }}>
                      {" "}
                      privacy policy
                    </a>
                  </span>
                </Grid>
  
                <Grid
                  item
                  md={4}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <ColorButton
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, textAlign: "center" }}
                    size="large"
                  >
                    Proceed to Subscription
                  </ColorButton>
                </Grid>
  
                <Grid
                  item
                  md={4}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignSelf: "center",
                  }}
                >
                  Already have an account?{"     "}
                  <a href="" style={{ color: "blue" }}>
                    Login
                  </a>
                </Grid>
              </Grid>
              )
            }

           
          </Box>
        </Card>
      </Box>
    </div>
  );
}

export default Register;
