import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField, useTheme,} from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import Alert from "@mui/material/Alert";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase/Firebase"; 
import SectionHeader from "../Components/SectionHeader";

const ProfileForm = () => {
    const [open, setOpen] = useState(false);
    const [role, setRole] = useState("");

    const theme = useTheme();

    const phoneRegex = /^(02)?01[0125][0-9]{8}$/;

    const mySchema = yup.object({
        fName: yup.string().required("First Name is required").min(3).max(20),
        lName: yup.string().required("Last Name is required").min(3).max(20),
        email: yup.string().email().required(),
        phone: yup.string().matches(phoneRegex).required(),
    });

    const myFormik = useFormik({
        initialValues: {
            fName: "",
            lName: "",
            email: "",
            phone: "",
            age: "",
            address1: "",
            address2: "",
            city: "",
            zipCode: "",
        },
        validationSchema: mySchema,
        onSubmit: async (values) => {
    try {
        const newUser = {
        fName: values.fName,
        lName: values.lName,
        name: `${values.fName} ${values.lName}`,   

        email: values.email,
        phone: values.phone,
        age: Number(values.age) || 0,

        role: role,
        access: role.charAt(0).toUpperCase() + role.slice(1),

        registerId: Date.now().toString(), 

        address: values.address1 + " " + values.address2,
        address1: values.address1,
        address2: values.address2,
        city: values.city || "",
        zipCode: values.zipCode || "",

        createdAt: new Date().toISOString(),
        };

        await addDoc(collection(db, "users"), newUser);

        myFormik.resetForm();
        setRole("")


        setOpen(true);
        setTimeout(() => setOpen(false), 1500);
    } catch (error) {
        console.error("Error adding user: ", error);
    }
    }

    });




    return (
        <Box sx={{border:`2px solid ${theme.palette.divider}`, borderRadius:2 , padding:3}}>
        {open && (
            <Alert variant="outlined" severity="success" sx={{ width: "fit-content", margin: "auto" }}>
            User Created Successfully
            </Alert>
        )}

            <SectionHeader heading={"Create User"} desc={"Create a New User Profile"} />
                
        

        <Box
            onSubmit={myFormik.handleSubmit}
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: 3, marginBlock: 4 }}
        >
            <Stack direction="row" gap={2}>
            <TextField
                label="First Name"
                variant="filled"
                name="fName"
                value={myFormik.values.fName}
                onChange={myFormik.handleChange}
                onBlur={myFormik.handleBlur}
                error={myFormik.touched.fName && !!myFormik.errors.fName}
                helperText={myFormik.touched.fName && myFormik.errors.fName}
                sx={{ flex: 1 }}
            />

            <TextField
                label="Last Name"
                variant="filled"
                name="lName"
                value={myFormik.values.lName}
                onChange={myFormik.handleChange}
                onBlur={myFormik.handleBlur}
                error={myFormik.touched.lName && !!myFormik.errors.lName}
                helperText={myFormik.touched.lName && myFormik.errors.lName}
                sx={{ flex: 1 }}
            />
            </Stack>

            <TextField
            label="Email"
            name="email"
            variant="filled"
            type="email"
            value={myFormik.values.email}
            onChange={myFormik.handleChange}
            onBlur={myFormik.handleBlur}
            error={myFormik.touched.email && !!myFormik.errors.email}
            helperText={myFormik.touched.email && myFormik.errors.email}
            />

            <TextField
            label="Contact Number"
            name="phone"
            variant="filled"
            value={myFormik.values.phone}
            onChange={myFormik.handleChange}
            onBlur={myFormik.handleBlur}
            error={myFormik.touched.phone && !!myFormik.errors.phone}
            helperText={myFormik.touched.phone && myFormik.errors.phone}
            />

            <TextField
            label="Address 1"
            name="address1"
            variant="filled"
            value={myFormik.values.address1}
            onChange={myFormik.handleChange}
            />

            <TextField
            label="Address 2"
            name="address2"
            variant="filled"
            value={myFormik.values.address2}
            onChange={myFormik.handleChange}
            />

            <FormControl variant="filled">
            <InputLabel>Role</InputLabel>
            <Select value={role} onChange={(e) => setRole(e.target.value)}>
                <MenuItem value="user">User</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="manager">Manager</MenuItem>
            </Select>
            </FormControl>


            <TextField
    label="Age"
    name="age"
    variant="filled"
    type="number"
    value={myFormik.values.age}
    onChange={myFormik.handleChange}
    />

    <TextField
    label="City"
    name="city"
    variant="filled"
    value={myFormik.values.city}
    onChange={myFormik.handleChange}
    />

    <TextField
    label="Zip Code"
    name="zipCode"
    variant="filled"
    value={myFormik.values.zipCode}
    onChange={myFormik.handleChange}
    />


            <Button type="submit" variant="contained" sx={{ width: "fit-content", marginLeft: "auto" }}>
            Create New User
            </Button>
        </Box>
        </Box>
    );
};

export default ProfileForm;
