import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, useTheme } from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SecurityIcon from "@mui/icons-material/Security";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";

import { db } from "../../Firebase/Firebase"; 
import { collection, onSnapshot } from "firebase/firestore";
import SectionHeader from "../../Components/SectionHeader";

export default function Team() {
  const theme = useTheme();
  const [rows, setRows] = useState([]);

  // Fetch users from Firestore
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "users"), (snapshot) => {
      const users = snapshot.docs.map((doc) => ({
        id: doc.id, 
        name: doc.data().name || "",
        email: doc.data().email || "",
        age: doc.data().age || "",
        phone: doc.data().phone || "",
        accessLevel: doc.data().role || "user",
      }));
      setRows(users);
    });

    return () => unsub();
  }, []);

  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 180,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      width: 220,
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <a href={`mailto:${params.value}`} style={{ color: "#1976d2" }}>
          {params.value}
        </a>
      ),
    },
    {
      field: "age",
      headerName: "Age",
      width: 100,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      width: 150,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { accessLevel } }) => (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
            mt: "10px",
            color: "white",
            bgcolor:
              accessLevel === "admin"
                ? theme.palette.info.dark
                : accessLevel === "manager"
                ? theme.palette.secondary.dark
                : "#3da58a",
            p: "5px",
            borderRadius: "3px",
          }}
        >
          {accessLevel === "admin" ? (
            <AdminPanelSettingsIcon fontSize="small" />
          ) : accessLevel === "user" ? (
            <LockOpenOutlinedIcon fontSize="small" />
          ) : (
            <SecurityIcon fontSize="small" />
          )}
          <Typography sx={{ fontSize: 12 }}>{accessLevel}</Typography>
        </Box>
      ),
    },
  ];

  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto", p: 1 ,  }}>
      <SectionHeader heading={"Team"} desc={"Meeting The Team Members"} />
      <DataGrid
      sx={{border:`4px solid ${theme.palette.divider}`}}
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </Box>
  );
}
