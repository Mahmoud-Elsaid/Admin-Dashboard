


import { Box, useTheme } from '@mui/material'
import React from 'react'
import { ResponsivePie } from '@nivo/pie'
import SectionHeader from '../Components/SectionHeader';


export default function PieCharts({isDashboard}) {

    const theme = useTheme();

    let data = [
                {
                    "id": "c",
                    "label": "c",
                    "value": 314,
                    "color": "hsl(358, 70%, 50%)"
                },
                {
                    "id": "erlang",
                    "label": "erlang",
                    "value": 172,
                    "color": "hsl(255, 70%, 50%)"
                },
                {
                    "id": "stylus",
                    "label": "stylus",
                    "value": 130,
                    "color": "hsl(15, 70%, 50%)"
                },
                {
                    "id": "python",
                    "label": "python",
                    "value": 265,
                    "color": "hsl(98, 70%, 50%)"
                },
                {
                    "id": "haskell",
                    "label": "haskell",
                    "value": 181,
                    "color": "hsl(82, 70%, 50%)"
                }
            ]

    return (

        <>
            {isDashboard ? "" :<SectionHeader heading={"Pie Chart"} desc={"Simple Pie Chart"} />}

            <Box sx={{height:" 75vh" , border:`2px solid ${theme.palette.divider}`, borderRadius:2 , padding:1}}>
                <ResponsivePie 
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
                                            "stroke": "#dddddd",
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
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                padAngle={0.6}
                cornerRadius={2}
                activeOuterRadiusOffset={8}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor= {theme.palette.text.primary}
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: 'color' }}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
                legends={[
                    {
                        anchor: 'bottom',
                        direction: 'row',
                        translateY: 56,
                        itemWidth: 100,
                        itemHeight: 18,
                        symbolShape: 'circle'
                    }
                ]}
            />
            
            </Box>
                </>

    )
}
