import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Row1 from "../Components/Row1/Row1";
import Row2 from "../Components/Row2/Row2";
import Row3 from "../Components/Row3/Row3";
import DownloadIcon from "@mui/icons-material/Download";
import { Typography, useTheme } from "@mui/material";

const Dashboard = () => {
  const appTheme = useTheme();
  return (
    <>
      <Grid container spacing={2}>
        <Typography variant="h5" fontWeight={"bold"} color={appTheme.palette.secondary.main}>
          Welcome  To Your Dashboard
        </Typography>
       
        <Button sx={{ marginLeft: "auto" }} variant="contained">
          <DownloadIcon sx={{ marginRight: 1 }} />
          Download Reports
        </Button>
        <Grid size={{ xs: 12 }}>
          <Row1 />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Row2 />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Row3 />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
