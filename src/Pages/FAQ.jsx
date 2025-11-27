import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";

import { useState } from "react";
import Stack from "@mui/material/Stack";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SettingsIcon from "@mui/icons-material/Settings";
import EventIcon from "@mui/icons-material/Event";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import PaletteIcon from "@mui/icons-material/Palette";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import HistoryIcon from "@mui/icons-material/History";
import SectionHeader from "../Components/SectionHeader";
const Faq = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
    const accordions = [
    {
      id: "panel1",
      icon: <SettingsIcon color="primary" />,
      title: "Calendar Settings",
      subtitle: "Control how events appear",
      content:
        "Manage calendar view preferences such as default mode (month/week/day), start day of the week, and event color themes.",
    },
    {
      id: "panel2",
      icon: <EventIcon color="secondary" />,
      title: "Event Management",
      subtitle: "Add, edit, or delete events",
      content:
        "Configure event creation behavior, deletion confirmations, and recurring event settings.",
    },
    {
      id: "panel3",
      icon: <NotificationsActiveIcon color="warning" />,
      title: "Notifications",
      subtitle: "Stay updated on upcoming events",
      content:
        "Manage email and push notifications for upcoming events, updates, and calendar reminders.",
    },
    {
      id: "panel4",
      icon: <PeopleAltIcon color="info" />,
      title: "Users",
      subtitle: "Manage user accounts and roles",
      content:
        "Control who can access the calendar, assign roles such as admin, editor, or viewer, and manage user invitations.",
    },
    {
      id: "panel5",
      icon: <LockPersonIcon color="error" />,
      title: "Access Permissions",
      subtitle: "Control access levels",
      content:
        "Define which users or teams can create, edit, or view specific calendar events.",
    },
    {
      id: "panel6",
      icon: <PaletteIcon color="success" />,
      title: "Appearance",
      subtitle: "Customize calendar theme",
      content:
        "Adjust theme colors, dark/light mode preferences, and event label styles.",
    },
    {
      id: "panel7",
      icon: <IntegrationInstructionsIcon color="primary" />,
      title: "Integration",
      subtitle: "Connect with other tools",
      content:
        "Sync calendar data with Google Calendar, Outlook, or external APIs.",
    },
    {
      id: "panel8",
      icon: <HistoryIcon color="secondary" />,
      title: "System Logs",
      subtitle: "Track activity and changes",
      content:
        "View recent actions such as event creation, updates, and deletions for better tracking and auditing.",
    },
  ];
  return (
    <>
      
      <SectionHeader heading={"Accordion"} desc={"View and modify system options in the panels below"} />

      <Stack direction="column" gap={1} height={500}>
      {accordions.map((acc) => (
        <Accordion
          key={acc.id}
          expanded={expanded === acc.id}
          onChange={handleChange(acc.id)}
          sx={{
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 1,
            "&:before": { display: "none" },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${acc.id}-content`}
            id={`${acc.id}-header`}
            sx={{
              "& .MuiAccordionSummary-content": {
                alignItems: "center",
                gap: 2,
              },
            }}
          >
            {acc.icon}
            <Typography sx={{ width: "30%", flexShrink: 0, fontWeight: 600 }}>
              {acc.title}
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              {acc.subtitle}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "text.secondary" }}>{acc.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Stack>
    </>
  );
};

export default Faq;
