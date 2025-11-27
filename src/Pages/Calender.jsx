// src/Pages/Calendar.jsx
import React, { useState, useRef, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { collection, setDoc, updateDoc, deleteDoc, doc, onSnapshot, addDoc} from "firebase/firestore";
import { db } from "../Firebase/Firebase.js";
import { Box, Card, CardContent, Typography, Button, Checkbox, FormControlLabel, List, ListItem, ListItemText, Divider, useTheme, Dialog, DialogTitle, DialogContent, DialogActions, TextField,} from "@mui/material";

const Calendar = () => {
    const [weekendsVisible, setWeekendsVisible] = useState(true);
    const [currentEvents, setCurrentEvents] = useState([]);
    const [openAddDialog, setOpenAddDialog] = useState(false);
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [newTitle, setNewTitle] = useState("");
    const [newDate, setNewDate] = useState("");
    const [newColor, setNewColor] = useState("#1976d2");
    const [editTitle, setEditTitle] = useState("");
    const [editDate, setEditDate] = useState("");
    const [editColor, setEditColor] = useState("#1976d2");
    const theme = useTheme();
    const calendarRef = useRef();

  // Fetch events realtime
    useEffect(() => {
        const unsub = onSnapshot(collection(db, "events"), (snapshot) => {
        const events = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setCurrentEvents(events);

        // Sync with FullCalendar
        const calendarApi = calendarRef.current.getApi();
        calendarApi.removeAllEvents();
        events.forEach((e) => {
            calendarApi.addEvent({
            id: e.id,
            title: e.title,
            start: e.start,
            backgroundColor: e.color,
            borderColor: e.color,
            allDay: true,
            });
        });
        });

        return () => unsub();
    }, []);

  // Toggle weekends
    const handleWeekendsToggle = () => setWeekendsVisible(!weekendsVisible);

    // Open/Close Add Dialog
    const handleOpenAdd = () => setOpenAddDialog(true);
    const handleCloseAdd = () => {
        setOpenAddDialog(false);
        setNewTitle("");
        setNewDate("");
        setNewColor("#1976d2");
    };

  // Save new event
    const handleSaveEvent = async () => {
        if (!newTitle || !newDate) return alert("Please fill all fields!");

        const eventId = Date.now().toString(); // ID ثابت لكل Event
        const docRef = doc(db, "events", eventId);

        await setDoc(docRef, {
        title: newTitle,
        start: newDate,
        color: newColor,
        });

        handleCloseAdd();
    };

  // Click event → open Edit Dialog
    const handleEventClick = (clickInfo) => {
        setSelectedEvent(clickInfo.event);
        setEditTitle(clickInfo.event.title);
        setEditDate(clickInfo.event.startStr);
        setEditColor(clickInfo.event.backgroundColor || "#1976d2");
        setOpenEditDialog(true);
    };

    const handleCloseEdit = () => {
        setOpenEditDialog(false);
        setSelectedEvent(null);
    };

  // Update event
    const handleUpdateEvent = async () => {
        if (!selectedEvent) return;
        const docRef = doc(db, "events", selectedEvent.id);
        await updateDoc(docRef, {
        title: editTitle,
        start: editDate,
        color: editColor,
        });
        handleCloseEdit();
    };

  // Delete event
    const handleDeleteEvent = async () => {
        if (!selectedEvent) return;
        const docRef = doc(db, "events", selectedEvent.id);
        await deleteDoc(docRef);
        handleCloseEdit();
    };

    return (
        <Box sx={{ display: "flex", p: 3, gap: 3 }}>
        {/* Sidebar */}
        <Card sx={{ width: 300, height: "80vh", p: 2, borderRadius: 3 }}>
            <CardContent>
            <Typography variant="h6" mb={2} fontWeight={600}>
                Calendar Menu
            </Typography>

            <Button
                fullWidth
                variant="contained"
                onClick={handleOpenAdd}
                sx={{ mb: 2 }}
            >
                + Add Event
            </Button>

            <Typography variant="body2" mb={1}>
                - Click event to edit/delete
            </Typography>

            <Divider sx={{ my: 2 }} />

            <FormControlLabel
                control={
                <Checkbox checked={weekendsVisible} onChange={handleWeekendsToggle} />
                }
                label="Show Weekends"
            />

            <Divider sx={{ my: 2 }} />

            <Typography variant="subtitle1" fontWeight={600} mb={1}>
                All Events ({currentEvents.length})
            </Typography>

            <List dense sx={{ maxHeight: 280, overflowY: "auto" }}>
                {currentEvents.map((event) => (
                <ListItem key={event.id}>
                    <ListItemText
                    primary={event.title}
                    secondary={new Date(event.start).toLocaleDateString()}
                    />
                </ListItem>
                ))}
            </List>
            </CardContent>
        </Card>

        {/* Calendar */}
        <Card sx={{ flex: 1, p: 2, borderRadius: 3 }}>
            <CardContent>
            <FullCalendar
                ref={calendarRef}
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay",
                }}
                initialView="dayGridMonth"
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                weekends={weekendsVisible}
                eventClick={handleEventClick}
            />
            </CardContent>
        </Card>

        {/* Add Event Dialog */}
        <Dialog open={openAddDialog} onClose={handleCloseAdd}>
            <DialogTitle>Add New Event</DialogTitle>
            <DialogContent
            sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}
            >
            <TextField
                label="Title"
                fullWidth
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
            />
            <TextField
                label="Date"
                type="datetime-local"
                fullWidth
                value={newDate}
                onChange={(e) => setNewDate(e.target.value)}
            />
            <TextField
                type="color"
                fullWidth
                value={newColor}
                onChange={(e) => setNewColor(e.target.value)}
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleCloseAdd}>Cancel</Button>
            <Button variant="contained" onClick={handleSaveEvent}>
                Save
            </Button>
            </DialogActions>
        </Dialog>

        {/* Edit Event Dialog */}
        <Dialog open={openEditDialog} onClose={handleCloseEdit}>
            <DialogTitle>Edit Event</DialogTitle>
            <DialogContent
            sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}
            >
            <TextField
                label="Title"
                fullWidth
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
            />
            <TextField
                label="Date"
                type="datetime-local"
                fullWidth
                value={editDate}
                onChange={(e) => setEditDate(e.target.value)}
            />
            <TextField
                type="color"
                fullWidth
                value={editColor}
                onChange={(e) => setEditColor(e.target.value)}
            />
            </DialogContent>
            <DialogActions>
            <Button color="error" onClick={handleDeleteEvent}>
                Delete
            </Button>
            <Button variant="contained" onClick={handleUpdateEvent}>
                Update
            </Button>
            </DialogActions>
        </Dialog>
        </Box>
    );
};

export default Calendar;
