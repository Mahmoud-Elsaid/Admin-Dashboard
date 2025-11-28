import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { TailwindDemoContainer } from "@mui/x-data-grid/internals";
import { Box } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/Firebase"; 
import SectionHeader from "../Components/SectionHeader";

export default function Invoices() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Invoices"));
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
    { field: "id", headerName: "ID", width: 60 ,  headerAlign: "center", align: "center"},
    { field: "name", headerName: "Name", flex: 1 , headerAlign: "center", align: "center"},
    { field: "phoneNumber", headerName: "Phone", width: 160 , flex: 1 , headerAlign: "center", align: "center"},
    { field: "email", headerName: "Email", flex: 1, headerAlign: "center", align: "center" , renderCell: (params) => <a href={`mailto:${params.value}`} style={{ color: "#1976d2" }}>{params.value}</a> },
    {field: "cost" , headerName: "Cost" ,  flex: 1 ,headerAlign: "center", align: "center"},
    {field: "date" , headerName: "Date" , flex:1 , headerAlign: "center", align: "center"}
  ];

          {console.log(rows)}

  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto", p: 1 }}>
        <SectionHeader heading={"Invoices Balances"} desc={"Some of our Invoices Balances "} />

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
