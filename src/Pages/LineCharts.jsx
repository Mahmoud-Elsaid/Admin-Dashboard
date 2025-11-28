


import { Box, useTheme } from '@mui/material'
import { ResponsiveLine } from '@nivo/line'

import React from 'react'
import SectionHeader from '../Components/SectionHeader';

export default function LineCharts({isDashboard}) {


    let data = [
  {
    "id": "japan",
    "data": [
      {
        "x": "plane",
        "y": 92
      },
      {
        "x": "helicopter",
        "y": 196
      },
      {
        "x": "boat",
        "y": 87
      },
      {
        "x": "train",
        "y": 292
      },
      {
        "x": "subway",
        "y": 31
      },
      {
        "x": "bus",
        "y": 39
      },
      {
        "x": "car",
        "y": 15
      },
      {
        "x": "moto",
        "y": 10
      },
      {
        "x": "bicycle",
        "y": 43
      },
      {
        "x": "horse",
        "y": 142
      },
      {
        "x": "skateboard",
        "y": 269
      },
      {
        "x": "others",
        "y": 113
      }
    ]
  },
  {
    "id": "france",
    "data": [
      {
        "x": "plane",
        "y": 260
      },
      {
        "x": "helicopter",
        "y": 89
      },
      {
        "x": "boat",
        "y": 227
      },
      {
        "x": "train",
        "y": 135
      },
      {
        "x": "subway",
        "y": 42
      },
      {
        "x": "bus",
        "y": 184
      },
      {
        "x": "car",
        "y": 25
      },
      {
        "x": "moto",
        "y": 75
      },
      {
        "x": "bicycle",
        "y": 268
      },
      {
        "x": "horse",
        "y": 252
      },
      {
        "x": "skateboard",
        "y": 74
      },
      {
        "x": "others",
        "y": 74
      }
    ]
  },
  {
    "id": "us",
    "data": [
      {
        "x": "plane",
        "y": 24
      },
      {
        "x": "helicopter",
        "y": 187
      },
      {
        "x": "boat",
        "y": 118
      },
      {
        "x": "train",
        "y": 127
      },
      {
        "x": "subway",
        "y": 216
      },
      {
        "x": "bus",
        "y": 280
      },
      {
        "x": "car",
        "y": 107
      },
      {
        "x": "moto",
        "y": 111
      },
      {
        "x": "bicycle",
        "y": 110
      },
      {
        "x": "horse",
        "y": 23
      },
      {
        "x": "skateboard",
        "y": 184
      },
      {
        "x": "others",
        "y": 151
      }
    ]
  },
  {
    "id": "germany",
    "data": [
      {
        "x": "plane",
        "y": 40
      },
      {
        "x": "helicopter",
        "y": 52
      },
      {
        "x": "boat",
        "y": 115
      },
      {
        "x": "train",
        "y": 150
      },
      {
        "x": "subway",
        "y": 232
      },
      {
        "x": "bus",
        "y": 219
      },
      {
        "x": "car",
        "y": 172
      },
      {
        "x": "moto",
        "y": 184
      },
      {
        "x": "bicycle",
        "y": 204
      },
      {
        "x": "horse",
        "y": 79
      },
      {
        "x": "skateboard",
        "y": 122
      },
      {
        "x": "others",
        "y": 107
      }
    ]
  },
  {
    "id": "norway",
    "data": [
      {
        "x": "plane",
        "y": 215
      },
      {
        "x": "helicopter",
        "y": 158
      },
      {
        "x": "boat",
        "y": 71
      },
      {
        "x": "train",
        "y": 136
      },
      {
        "x": "subway",
        "y": 20
      },
      {
        "x": "bus",
        "y": 54
      },
      {
        "x": "car",
        "y": 138
      },
      {
        "x": "moto",
        "y": 182
      },
      {
        "x": "bicycle",
        "y": 141
      },
      {
        "x": "horse",
        "y": 260
      },
      {
        "x": "skateboard",
        "y": 160
      },
      {
        "x": "others",
        "y": 62
      }
    ]
  }
]


    const theme = useTheme();


    return (
      <>
                      { isDashboard ? "" : <SectionHeader heading={"Line Chart"} desc={"Simple Line Chart Example"} />}

        <Box sx={{height:" 75vh" , border:`2px solid ${theme.palette.divider}`, borderRadius:2 , padding:1}}>
            <ResponsiveLine 
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
                                    "strokeWidth": 0
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
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        axisBottom={{ legend: 'transportation', legendOffset: 36 }}
        axisLeft={{ legend: 'count', legendOffset: -40 }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'seriesColor' }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                translateX: 100,
                itemWidth: 80,
                itemHeight: 22,
                symbolShape: 'circle'
            }
        ]}
    />
        </Box>

              </>

    )
}
