


import { Paper, Typography, useTheme } from "@mui/material";
import Stack from "@mui/material/Stack";
import Pie from "../../Pages/PieCharts";
import BarChart from "../../Pages/BarCharts";
import Geography from "../../Pages/GeographyCharts";
import { Link } from "react-router-dom";

const Row3 = () => {
  const appTheme = useTheme();
  return (
    <>
      <Stack
        direction={"row"}
        alignItems={"center"}
        gap={2}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
      >
        <Paper
            component={Link}          
            to="/pieCharts"
              
          sx={{
          textDecoration: "none", 

            flexGrow: 1,
            p: 2,
            minWidth: {
              xs: "100%",
              md: "30%",
            },
          }}
        >
          <Typography
            variant="h5"
            color={appTheme.palette.secondary.main}
            fontWeight={"bold"}
          >
            Campaign
          </Typography>
          <Pie isDashboard={true} />
        </Paper>


        <Paper
            component={Link}          
            to="/barCharts"
            sx={{ textDecoration: "none"  , flexGrow: 1, p: 2, minWidth: {sm:"100%" , md:"33%"} }}>
          <Typography
            variant="h5"
            color={appTheme.palette.secondary.main}
            fontWeight={"bold"}
          >
            Sales Quantity
          </Typography>
          <BarChart isDashboard={true} />
        </Paper>


        <Paper  
              component={Link}          
              to="/geographyCharts"
              sx={{
                flexGrow: 1,
                p: 2,
                minWidth: "33%",
                textDecoration: "none", 
                color: "inherit",       
                "&:hover": {
                  boxShadow: 6,         
                },
              }}>

              <Typography
                variant="h5"
                marginBottom={2}
                color={appTheme.palette.secondary.main}
                fontWeight={"bold"}
                sx={{ textDecoration: "none", color: appTheme.palette.secondary.main }} 
                >
                  Geography Based Quantity
                </Typography>

                <Geography isDashboard={true} />


        </Paper>


      </Stack>
    </>
  );
};

export default Row3;
