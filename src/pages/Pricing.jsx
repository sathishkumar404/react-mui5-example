import StarIcon from '@mui/icons-material/StarBorder';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { red } from '@mui/material/colors';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import GlobalStyles from '@mui/material/GlobalStyles';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import * as React from 'react';


const tiers = [
  {
    title: 'Free',
    price: '0',
    description: [
      '10 users included',
      '2 GB of storage',
      'Help center access',
      'Email support',
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Basic',
    subheader: 'Most popular',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Standard',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },

  {
    title: 'Premium',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
  
];


function PricingContent() {
  const [active,setActive]=React.useState(0)
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />

      {/* Hero unit */}
      <Container
        disableGutters
        maxWidth="md"
        component="main"
        sx={{
          pt: 8,
          pb: 6,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          component="h4"
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
          style={{ fontWeight: 700 }}
        >
          Plan and Pricing
        </Typography>

        <div
          style={{
            borderRadius: 25,
            borderColor: "red",
            borderWidth: 1,
            borderStyle: "solid",
            padding: 4,
            maxWidth: 400,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignSelf: "center",
            }}
          >
            <Button
              style={{
                backgroundColor: active == 0 ? red.A400 : "transparent",
                borderRadius: 25,
                color: active == 0 ? "white" : "black",
                fontSize: 12,
                paddingLeft: 12,
                paddingRight: 8,
                paddignVertical: 12,
                width: 200,
              }}
              onClick={() => setActive(0)}
            >
              Monthly Billing
            </Button>
            <Button
              onClick={() => setActive(1)}
              style={{
                backgroundColor: active == 1 ? red.A400 : "transparent",
                borderRadius: 25,
                color: active == 1 ? "white" : "black",
                fontSize: 12,
                paddingLeft: 12,
                paddingRight: 8,
                paddignVertical: 12,
                width: 200,
              }}
            >
              Annual Billing
            </Button>
          </div>
        </div>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="lg" component="main">
        <Grid container spacing={6} alignItems="flex-end">
          {tiers.map((tier) => (
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "Enterprise" ? 12 : 6}
              md={3}
              style={{ position: "relative" }}
            >

              {
                tier.title === "Standard" && (
                  <div
                  style={{
                    position: "absolute",
                    right: -28,
                    top: 80,
                    background: red.A400,
                    padding: 4,
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                    borderTopLeftRadius:4,
                    borderBottomLeftRadius:4
                  }}
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      color: "white",
                    }}
                  >
                    Most Popular
                  </Typography>
                </div>
                )
              }
           

              <Card
                sx={{
                  padding: 1,
                }}
              >
                <CardHeader
                  title={tier.title}
                  // subheader={tier.subheader}
                  titleTypographyProps={{ align: "start" }}
                  action={tier.title === "Pro" ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: "start",
                  }}
                  sx={
                    {
                      // backgroundColor: (theme) =>
                      //   theme.palette.mode === 'light'
                      //     ? theme.palette.grey[200]
                      //     : theme.palette.grey[700],
                    }
                  }
                />

                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "baseline",
                      mb: 2,
                      mt: 0,
                    }}
                  >
                    <Typography
                      component="h2"
                      variant="h3"
                      color="text.primary"
                    >
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    Validty : 10 Days
                  </Typography>

                  <Divider
                    sx={{
                      mt: 2,
                      mb: 4,
                    }}
                  />

                  <ul>
                    {tier.description.map((line) => (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignSelf: "center",
                        }}
                      >
                        <Typography
                          component="li"
                          variant="subtitle1"
                          align="start"
                          key={line}
                        >
                          {line}
                        </Typography>

                        <Typography
                          component="li"
                          variant="subtitle1"
                          align="start"
                          key={line}
                        >
                          10
                        </Typography>
                      </div>
                    ))}
                  </ul>
                </CardContent>
                <CardActions
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignSelf: "center",
                  }}
                >
                  <Button
                    size="large"
                    color="error"
                    variant={"outlined"}
                    style={{ borderRadius: 25 }}
                  >
                    Select
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      {/* End footer */}
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}