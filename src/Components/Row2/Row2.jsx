


import { Box, Button, Paper, Typography, useTheme } from "@mui/material";
import Stack from "@mui/material/Stack";
import LineChart from "../../Pages/LineCharts";
import { Link } from "react-router-dom";
const Row2 = () => {
  const appTheme = useTheme();
  return (
    <>
      <Stack
        direction={"row"}
        sx={{
          justifyContent: "space-between",
          gap: 2,
          padding: 1,
          flexWrap: "wrap",
        }}
      >
        <Paper
            component={Link}          
            to="/lineCharts"
          sx={{
              textDecoration: "none", 
            flexGrow: 1,
            p:1,
            minWidth: "500px",
        
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: appTheme.palette.secondary.main,
              fontWeight: "bold",
              mb: 1,
              fontSize: 26,
            }}
          >
            Revenue Generated
            <Typography
              variant="span"
              sx={{
                color: appTheme.palette.primary.main,
                ml: 1,
                fontSize: 14,
              }}
            >
              $75,342
            </Typography>
          </Typography>
          <LineChart  isDashboard={true}/>
        </Paper>
        <Box
          sx={{
            p: 0.5,
            flexGrow: 1,
            maxHeight: "500px",
            overflow: "auto",
          }}
        >
          <Paper>
            <Typography
              variant="h6"
              sx={{
                color: appTheme.palette.secondary.main,
                p: 1.2,
                fontWeight: "bold",
              }}
            >
              Recent Transactions
            </Typography>
          </Paper>
          <Paper sx={{ my: 1, p: 1 }}>
            <Stack
              direction={"row"}
              gap={2}
              sx={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <Stack direction={"column"}>
                <Typography variant="h6">01e4dsaewf</Typography>
                <Typography
                  variant="body2"
                  sx={{ color: appTheme.palette.text.secondary }}
                >
                  Johndoe
                </Typography>
              </Stack>
              <Box>
                <Typography variant="body1">2021-09-18</Typography>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: appTheme.palette.warning.dark }}
                >
                  $43,91
                </Button>
              </Box>
            </Stack>
          </Paper>
          <Paper sx={{ my: 1, p: 1 }}>
            <Stack
              direction={"row"}
              gap={2}
              sx={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <Stack direction={"column"}>
                <Typography variant="h6">09x8tyu21</Typography>
                <Typography
                  variant="body2"
                  sx={{ color: appTheme.palette.text.secondary }}
                >
                  SarahLee
                </Typography>
              </Stack>
              <Box>
                <Typography variant="body1">2022-04-11</Typography>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: appTheme.palette.warning.dark }}
                >
                  $58,30
                </Button>
              </Box>
            </Stack>
          </Paper>

          <Paper sx={{ my: 1, p: 1 }}>
            <Stack
              direction={"row"}
              gap={2}
              sx={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <Stack direction={"column"}>
                <Typography variant="h6">07b2kpl94</Typography>
                <Typography
                  variant="body2"
                  sx={{ color: appTheme.palette.text.secondary }}
                >
                  MichaelChan
                </Typography>
              </Stack>
              <Box>
                <Typography variant="body1">2023-07-25</Typography>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: appTheme.palette.warning.dark }}
                >
                  $76,45
                </Button>
              </Box>
            </Stack>
          </Paper>

          <Paper sx={{ my: 1, p: 1 }}>
            <Stack
              direction={"row"}
              gap={2}
              sx={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <Stack direction={"column"}>
                <Typography variant="h6">03z9mnq57</Typography>
                <Typography
                  variant="body2"
                  sx={{ color: appTheme.palette.text.secondary }}
                >
                  EmilyStone
                </Typography>
              </Stack>
              <Box>
                <Typography variant="body1">2024-01-09</Typography>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: appTheme.palette.warning.dark }}
                >
                  $92,10
                </Button>
              </Box>
            </Stack>
          </Paper>
          <Paper sx={{ my: 1, p: 1 }}>
            <Stack
              direction={"row"}
              gap={2}
              sx={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <Stack direction={"column"}>
                <Typography variant="h6">08r5plk42</Typography>
                <Typography
                  variant="body2"
                  sx={{ color: appTheme.palette.text.secondary }}
                >
                  DavidMiller
                </Typography>
              </Stack>
              <Box>
                <Typography variant="body1">2024-05-17</Typography>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: appTheme.palette.warning.dark }}
                >
                  $67,45
                </Button>
              </Box>
            </Stack>
          </Paper>

          <Paper sx={{ my: 1, p: 1 }}>
            <Stack
              direction={"row"}
              gap={2}
              sx={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <Stack direction={"column"}>
                <Typography variant="h6">12x3dte81</Typography>
                <Typography
                  variant="body2"
                  sx={{ color: appTheme.palette.text.secondary }}
                >
                  OliviaBrown
                </Typography>
              </Stack>
              <Box>
                <Typography variant="body1">2023-11-30</Typography>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: appTheme.palette.warning.dark }}
                >
                  $38,20
                </Button>
              </Box>
            </Stack>
          </Paper>

          <Paper sx={{ my: 1, p: 1 }}>
            <Stack
              direction={"row"}
              gap={2}
              sx={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <Stack direction={"column"}>
                <Typography variant="h6">15b7qwe63</Typography>
                <Typography
                  variant="body2"
                  sx={{ color: appTheme.palette.text.secondary }}
                >
                  NoahJohnson
                </Typography>
              </Stack>
              <Box>
                <Typography variant="body1">2025-03-08</Typography>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: appTheme.palette.warning.dark }}
                >
                  $125,90
                </Button>
              </Box>
            </Stack>
          </Paper>
        </Box>
      </Stack>
    </>
  );
};

export default Row2;
