



import { Typography, useTheme } from '@mui/material';

export default function SectionHeader({heading , desc }) {

    const theme = useTheme();

    return (
        <>
            <Typography variant="h5" color={theme.palette.primary.main} fontSize={30} fontWeight={900}>
                {heading}
            </Typography>
            <Typography
                variant="body2"
                mb={5}
                color={theme.palette.text.secondary}
            >
                {desc}
            </Typography>
        </>
    )
}
