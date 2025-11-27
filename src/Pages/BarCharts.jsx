



import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { Box, useTheme } from '@mui/material';
import SectionHeader from '../Components/SectionHeader';

export default function BarCharts() {


    const data = [
            {
            country: "Germany",
            wage: 2000,
            housing: 700,
            food: 400,
            transport: 300,
            },
            {
            country: "France",
            wage: 1900,
            housing: 650,
            food: 380,
            transport: 250,
            },
            {
            country: "Spain",
            wage: 1600,
            housing: 550,
            food: 320,
            transport: 200,
            },

            {
            country: "england",
            wage: 2000,
            housing: 700,
            food: 400,
            transport: 300,
            },
            {
            country: "Egypt",
            wage: 1900,
            housing: 650,
            food: 380,
            transport: 250,
            },
            {
            country: "Italia",
            wage: 1600,
            housing: 550,
            food: 320,
            transport: 200,
            }, 
  ];


    const theme = useTheme()


    return (

        <>
                        <SectionHeader heading={"Bar Chart"} desc={"The minimum wage in Germany, France and Spain (EUR/month)"} />

        <Box sx={{height:" 85vh" , border:`2px solid ${theme.palette.divider}`, borderRadius:2 , padding:1}}>
            <ResponsiveBar 
                    data={data}
                    theme={{

                            "text": {
                                "fontSize": 11,
                                "fill": theme.palette.text.primary,
                                "outlineWidth": 0,
                                "outlineColor": "#ffffff"
                            },
                            "axis": 
                            {
                                "domain": {
                                    "line": {
                                        "stroke": "#777777",
                                        "strokeWidth": 1
                                    }
                                },
                                "legend": {
                                    "text": {
                                        "fontSize": 18,
                                        "fill": theme.palette.text.primary,
                                        "outlineWidth": 0,
                                        "outlineColor": "#ffffff"
                                    }
                                },
                                "ticks": {
                                    "line": {
                                        "stroke": "#777777",
                                        "strokeWidth": 1
                                    },
                                    "text": {
                                        "fontSize": 11,
                                        "fill": theme.palette.text.primary,
                                        "outlineWidth": 0,
                                        "outlineColor": "#ffffff"
                                    }
                                }
                            },

                            "grid": {
                                "line": {
                                    "stroke": theme.palette.divider,
                                    "strokeWidth": 1
                                }
                            },
                            "legends": 
                            {
                                "title": {
                                    "text": {
                                        "fontSize": 11,
                                        "fill": theme.palette.text.primary,
                                        "outlineWidth": 0,
                                        "outlineColor": "#ffffff"
                                    }
                                },
                                "text": {
                                    "fontSize": 11,
                                    "fill": theme.palette.text.primary,
                                    "outlineWidth": 0,
                                    "outlineColor": "#ffffff"
                                },
                                "ticks": {
                                    "line": {},
                                    "text": {
                                        "fontSize": 10,
                                        "fill": theme.palette.text.primary,
                                        "outlineWidth": 0,
                                        "outlineColor": "#ffffff"
                                    }
                                }
                            },
                            "annotations": 
                            {
                                "text": {
                                    "fontSize": 13,
                                    "fill": theme.palette.text.primary,
                                    "outlineWidth": 2,
                                    "outlineColor": "#ffffff",
                                    "outlineOpacity": 1
                                },
                                "link": {
                                    "stroke": "#000000",
                                    "strokeWidth": 1,
                                    "outlineWidth": 2,
                                    "outlineColor": "#ffffff",
                                    "outlineOpacity": 1
                                },
                                "outline": {
                                    "stroke": "#000000",
                                    "strokeWidth": 2,
                                    "outlineWidth": 2,
                                    "outlineColor": "#ffffff",
                                    "outlineOpacity": 1
                                },
                                "symbol": {
                                    "fill": "#000000",
                                    "outlineWidth": 2,
                                    "outlineColor": "#ffffff",
                                    "outlineOpacity": 1
                                }
                            },
                            "tooltip": 
                            {
                                "wrapper": {},
                                "container": {
                                    "background": theme.palette.background.paper,
                                    "color": theme.palette.text.primary,
                                    "fontSize": 12
                                },
                                "basic": {},
                                "chip": {},
                                "table": {},
                                "tableCell": {},
                                "tableCellValue": {}
                            }
                        }
                    }
                    keys={["wage", "housing", "food", "transport"]}
                    indexBy="country"
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    legends={[
                        {
                            dataFrom: 'keys',
                            anchor: 'bottom-right',
                            direction: 'column',
                            translateX: 120,
                            itemsSpacing: 3,
                            itemWidth: 100,
                            itemHeight: 16,
                            
                        }
                    ]}
                    axisBottom={{ legend: 'country (indexBy)', legendOffset: 32 }}
                    axisLeft={{ legend: 'food', legendOffset: -55 }}
                    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            />
        </Box>
        </>
    )
}
