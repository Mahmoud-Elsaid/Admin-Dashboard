import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { TailwindDemoContainer } from "@mui/x-data-grid/internals";
import { Box } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/Firebase"; // هنا ضع ملف إعدادات Firebase
import SectionHeader from "../Components/SectionHeader";

export default function Invoices() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setRows(data);
      } catch (error) {
        console.error("Error fetching invoices:", error);
      }
    };

    fetchInvoices();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 60 },
    { field: "registerId", headerName: "Register ID", width: 140 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "age", headerName: "Age", width: 60 },
    { field: "phone", headerName: "Phone", width: 160 },
    { field: "email", headerName: "Email", flex: 1, renderCell: (params) => <a href={`mailto:${params.value}`} style={{ color: "#1976d2" }}>{params.value}</a> },
    { field: "address", headerName: "Address", flex: 1 },
    { field: "city", headerName: "City", width: 130 },
    { field: "zipCode", headerName: "Zip Code", width: 120 }
  ];

  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto", p: 1 }}>
        <SectionHeader heading={"Invoices"} desc={"Invoices"} />

      <TailwindDemoContainer>
        <DataGrid
          checkboxSelection
          rows={rows}
          columns={columns}
          showToolbar
        />
      </TailwindDemoContainer>
    </Box>
  );
}
