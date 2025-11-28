


import Stack from "@mui/material/Stack";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ReuseableCard from "./ReuseableCard";
import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import TrafficOutlinedIcon from "@mui/icons-material/TrafficOutlined";
import { useTheme } from "@mui/material/styles";

const Row1 = () => {
  const appTheme = useTheme();

   
  return (
    <>
      <Stack
        direction={"row"}
        gap={2}
        flexWrap={"wrap"}
        alignItems={"center"}
        justifyContent={{ xs: "center", md: "space-between" }}
      >
        <ReuseableCard
          icon={
            <EmailOutlinedIcon
              sx={{ color: appTheme.palette.secondary.main, fontSize: "30px" }}
            />
          }
          text1={"12,361"}
          subtitle="Emails sent"
          chartTitle="+ 14 %"
          scheme="category10"
        />
        <ReuseableCard
          icon={
            <PersonAddAlt1OutlinedIcon
              sx={{ color: appTheme.palette.secondary.main, fontSize: "30px" }}
            />
          }
          text1={"431,225"}
          subtitle="Status Obtained"
          chartTitle="+ 22 %"
          scheme="accent"
        />
        <ReuseableCard
          icon={
            <PointOfSaleOutlinedIcon
              sx={{ color: appTheme.palette.secondary.main, fontSize: "30px" }}
            />
          }
          text1={"22,441"}
          subtitle="New Clients"
          chartTitle="+ 5 %"
          scheme="set1"
        />
        <ReuseableCard
          icon={
            <TrafficOutlinedIcon
              sx={{ color: appTheme.palette.secondary.main, fontSize: "35px" }}
            />
          }
          text1={"1,325"}
          subtitle="Traffic Recieved"
          chartTitle="+ 44 %"
          scheme="brown_blueGreen"
        />
      </Stack>
    </>
  );
};

export default Row1;
