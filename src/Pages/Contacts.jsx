import  { useState, useEffect } from "react";
import clsx from "clsx";
import {
  DataGrid,
  Toolbar,
  ToolbarButton,
  ColumnsPanelTrigger,
  FilterPanelTrigger,
  ExportCsv,
  ExportPrint,
  QuickFilter,
  QuickFilterControl,
  QuickFilterTrigger,
} from "@mui/x-data-grid";
import { TailwindDemoContainer } from "@mui/x-data-grid/internals";
import SearchIcon from "@mui/icons-material/Search";
import { Box, useTheme, Input, Button as MuiButton } from "@mui/material";

import { db } from "../Firebase/Firebase"; 
import { collection, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import SectionHeader from "../Components/SectionHeader";

function Button(props) {
  return (
    <button
      type="button"
      {...props}
      className={clsx(
        "flex w-auto h-10 items-center justify-center rounded border border-neutral-200 cursor-pointer dark:border-neutral-700 px-20 text-sm font-bold text-neutral-700 dark:text-neutral-200 whitespace-nowrap select-none hover:bg-neutral-100 dark:hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-blue-600 active:bg-neutral-100 dark:active:bg-neutral-700",
        props.className
      )}
    />
  );
}

function TextInput(props) {
  return (
    <input
      {...props}
      className={clsx(
        "h-9 w-full rounded border border-neutral-200 dark:border-neutral-700 dark:bg-neutral-100 px-2.5 text-base text-neutral-900 dark:text-neutral-200 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 p-5",
        props.className
      )}
    />
  );
}

function CustomToolbar() {
  const appTheme = useTheme();
  const buttonStyle = {
    textTransform: "none",
    borderRadius: "8px",
    fontWeight: 500,
    height: 36,
    minWidth: 90,
    color: "#fff",
    marginInline: "5px",
    backgroundColor: appTheme.palette.info.main,
    "&:hover": {
      backgroundColor: appTheme.palette.info.dark,
    },
  };
  const inputStyle = {
    width: "100%",
    padding: "0 12px",
    fontSize: "14px",
    color: appTheme.palette.primary.main,
    backgroundColor: appTheme.palette.background.paper,
    border: "none",
    borderRadius: "8px",
    outline: "none",
    "&:focus": {
      border: "none",
    },
  };
  return (
    <Toolbar style={{ display: "flex", justifyContent: "flex-start" }}>
      <ColumnsPanelTrigger
        render={
          <ToolbarButton render={<MuiButton sx={buttonStyle}>Columns</MuiButton>} />
        }
      />
      <FilterPanelTrigger
        render={<ToolbarButton render={<MuiButton sx={buttonStyle}>Filter</MuiButton>} />}
      />
      <ExportCsv render={<ToolbarButton render={<MuiButton sx={buttonStyle}>Export</MuiButton>} />} />
      <ExportPrint render={<ToolbarButton render={<MuiButton sx={buttonStyle}>Print</MuiButton>} />} />
      <QuickFilter
        render={() => (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <QuickFilterTrigger
              render={
                <ToolbarButton
                  render={
                    <MuiButton aria-label="Search">
                      <SearchIcon sx={{ marginRight: "-40px" }} fontSize="small" />
                    </MuiButton>
                  }
                />
              }
            />
            <div>
              <QuickFilterControl
                aria-label="Search"
                placeholder="Search"
                render={() => <Input type="search" placeholder="Search.." sx={inputStyle} />}
              />
            </div>
          </Box>
        )}
      />
    </Toolbar>
  );
}



export default function Contacts() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "users"), (snapshot) => {
      const contacts = snapshot.docs.map((doc) => ({
        id: doc.id,
        registerId: doc.data().registerId || "",
        name: doc.data().name || "",
        age: doc.data().age || "",
        phone: doc.data().phone || "",
        email: doc.data().email || "",
        address: doc.data().address || "",
        city: doc.data().city || "",
        zipCode: doc.data().zipCode || "",
      }));
      setRows(contacts);
    });

    return () => unsub();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      await deleteDoc(doc(db, "contacts", id));
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 60 },
    { field: "registerId", headerName: "Register ID", width: 140 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "age", headerName: "Age", width: 60 },
    { field: "phone", headerName: "Phone", width: 160 },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      renderCell: (params) => (
        <a href={`mailto:${params.value}`} style={{ color: "#1976d2" }}>
          {params.value}
        </a>
      ),
    },
    { field: "address", headerName: "Address", flex: 1 },
    { field: "city", headerName: "City", width: 130 },
    { field: "zipCode", headerName: "Zip Code", width: 120 },
    {
      field: "actions",
      headerName: "Actions",
      width: 120,
      renderCell: (params) => (
        <Button
          onClick={() => handleDelete(params.id)}
          className="bg-red-500 text-white hover:bg-red-600"
        >
          Delete
        </Button>
      ),
    },
  ];

  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto", p: 1 }}>
            <SectionHeader heading={"Contacts"} desc={"List of contacts for future reference"} />
      
      <TailwindDemoContainer>
        <DataGrid rows={rows} columns={columns} slots={{ toolbar: CustomToolbar }} showToolbar />
      </TailwindDemoContainer>
    </Box>
  );
}
