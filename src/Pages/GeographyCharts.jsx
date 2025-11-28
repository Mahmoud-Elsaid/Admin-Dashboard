


import { Box, useTheme } from '@mui/material'
import { ResponsiveChoropleth } from '@nivo/geo'


import React from 'react'
import { geo } from './../Components/Geo';
import SectionHeader from '../Components/SectionHeader';

export default function GeographyCharts({isDashboard}) {



    let data = [
  {
    "id": "AFG",
    "value": 518042
  },
  {
    "id": "AGO",
    "value": 331512
  },
  {
    "id": "ALB",
    "value": 743188
  },
  {
    "id": "ARE",
    "value": 98781
  },
  {
    "id": "ARG",
    "value": 560230
  },
  {
    "id": "ARM",
    "value": 631544
  },
  {
    "id": "ATA",
    "value": 98442
  },
  {
    "id": "ATF",
    "value": 785342
  },
  {
    "id": "AUT",
    "value": 80960
  },
  {
    "id": "AZE",
    "value": 523541
  },
  {
    "id": "BDI",
    "value": 144733
  },
  {
    "id": "BEL",
    "value": 108699
  },
  {
    "id": "BEN",
    "value": 856076
  },
  {
    "id": "BFA",
    "value": 730813
  },
  {
    "id": "BGD",
    "value": 361126
  },
  {
    "id": "BGR",
    "value": 263754
  },
  {
    "id": "BHS",
    "value": 268219
  },
  {
    "id": "BIH",
    "value": 966424
  },
  {
    "id": "BLR",
    "value": 176041
  },
  {
    "id": "BLZ",
    "value": 907493
  },
  {
    "id": "BOL",
    "value": 763892
  },
  {
    "id": "BRN",
    "value": 141572
  },
  {
    "id": "BTN",
    "value": 995876
  },
  {
    "id": "BWA",
    "value": 917650
  },
  {
    "id": "CAF",
    "value": 193990
  },
  {
    "id": "CAN",
    "value": 543188
  },
  {
    "id": "CHE",
    "value": 794087
  },
  {
    "id": "CHL",
    "value": 662730
  },
  {
    "id": "CHN",
    "value": 24225
  },
  {
    "id": "CIV",
    "value": 820262
  },
  {
    "id": "CMR",
    "value": 726353
  },
  {
    "id": "COG",
    "value": 107828
  },
  {
    "id": "COL",
    "value": 356323
  },
  {
    "id": "CRI",
    "value": 125920
  },
  {
    "id": "CUB",
    "value": 83731
  },
  {
    "id": "-99",
    "value": 745126
  },
  {
    "id": "CYP",
    "value": 688583
  },
  {
    "id": "CZE",
    "value": 632661
  },
  {
    "id": "DEU",
    "value": 895357
  },
  {
    "id": "DJI",
    "value": 33029
  },
  {
    "id": "DNK",
    "value": 302878
  },
  {
    "id": "DOM",
    "value": 340482
  },
  {
    "id": "DZA",
    "value": 237830
  },
  {
    "id": "ECU",
    "value": 791217
  },
  {
    "id": "EGY",
    "value": 336211
  },
  {
    "id": "ERI",
    "value": 837758
  },
  {
    "id": "ESP",
    "value": 232630
  },
  {
    "id": "EST",
    "value": 824558
  },
  {
    "id": "ETH",
    "value": 209802
  },
  {
    "id": "FIN",
    "value": 634721
  },
  {
    "id": "FJI",
    "value": 182501
  },
  {
    "id": "FLK",
    "value": 812942
  },
  {
    "id": "FRA",
    "value": 578750
  },
  {
    "id": "GAB",
    "value": 497459
  },
  {
    "id": "GBR",
    "value": 364435
  },
  {
    "id": "GEO",
    "value": 128398
  },
  {
    "id": "GHA",
    "value": 962948
  },
  {
    "id": "GIN",
    "value": 540420
  },
  {
    "id": "GMB",
    "value": 888696
  },
  {
    "id": "GNB",
    "value": 868717
  },
  {
    "id": "GNQ",
    "value": 128016
  },
  {
    "id": "GRC",
    "value": 874387
  },
  {
    "id": "GTM",
    "value": 392264
  },
  {
    "id": "GUY",
    "value": 45858
  },
  {
    "id": "HND",
    "value": 932939
  },
  {
    "id": "HRV",
    "value": 97222
  },
  {
    "id": "HTI",
    "value": 897709
  },
  {
    "id": "HUN",
    "value": 520812
  },
  {
    "id": "IDN",
    "value": 753891
  },
  {
    "id": "IND",
    "value": 833692
  },
  {
    "id": "IRL",
    "value": 812078
  },
  {
    "id": "IRN",
    "value": 646831
  },
  {
    "id": "IRQ",
    "value": 693801
  },
  {
    "id": "ISL",
    "value": 326152
  },
  {
    "id": "ISR",
    "value": 358740
  },
  {
    "id": "ITA",
    "value": 637388
  },
  {
    "id": "JAM",
    "value": 249042
  },
  {
    "id": "JOR",
    "value": 516313
  },
  {
    "id": "JPN",
    "value": 762173
  },
  {
    "id": "KAZ",
    "value": 138738
  },
  {
    "id": "KEN",
    "value": 488490
  },
  {
    "id": "KGZ",
    "value": 590193
  },
  {
    "id": "KHM",
    "value": 391307
  },
  {
    "id": "OSA",
    "value": 742108
  },
  {
    "id": "KWT",
    "value": 893264
  },
  {
    "id": "LAO",
    "value": 727083
  },
  {
    "id": "LBN",
    "value": 689295
  },
  {
    "id": "LBR",
    "value": 612292
  },
  {
    "id": "LBY",
    "value": 316358
  },
  {
    "id": "LKA",
    "value": 652808
  },
  {
    "id": "LSO",
    "value": 567341
  },
  {
    "id": "LTU",
    "value": 714537
  },
  {
    "id": "LUX",
    "value": 273993
  },
  {
    "id": "LVA",
    "value": 460885
  },
  {
    "id": "MAR",
    "value": 333816
  },
  {
    "id": "MDA",
    "value": 535297
  },
  {
    "id": "MDG",
    "value": 36273
  },
  {
    "id": "MEX",
    "value": 760838
  },
  {
    "id": "MKD",
    "value": 498798
  },
  {
    "id": "MLI",
    "value": 223064
  },
  {
    "id": "MMR",
    "value": 85690
  },
  {
    "id": "MNE",
    "value": 826540
  },
  {
    "id": "MNG",
    "value": 27110
  },
  {
    "id": "MOZ",
    "value": 209893
  },
  {
    "id": "MRT",
    "value": 620303
  },
  {
    "id": "MWI",
    "value": 362029
  },
  {
    "id": "MYS",
    "value": 565180
  },
  {
    "id": "NAM",
    "value": 487686
  },
  {
    "id": "NCL",
    "value": 721503
  },
  {
    "id": "NER",
    "value": 461592
  },
  {
    "id": "NGA",
    "value": 840168
  },
  {
    "id": "NIC",
    "value": 516157
  },
  {
    "id": "NLD",
    "value": 30759
  },
  {
    "id": "NOR",
    "value": 366101
  },
  {
    "id": "NPL",
    "value": 788735
  },
  {
    "id": "NZL",
    "value": 751533
  },
  {
    "id": "OMN",
    "value": 258761
  },
  {
    "id": "PAK",
    "value": 972545
  },
  {
    "id": "PAN",
    "value": 286055
  },
  {
    "id": "PER",
    "value": 461085
  },
  {
    "id": "PHL",
    "value": 885435
  },
  {
    "id": "PNG",
    "value": 622112
  },
  {
    "id": "POL",
    "value": 361329
  },
  {
    "id": "PRI",
    "value": 904955
  },
  {
    "id": "PRT",
    "value": 601629
  },
  {
    "id": "PRY",
    "value": 701842
  },
  {
    "id": "QAT",
    "value": 618006
  },
  {
    "id": "ROU",
    "value": 405085
  },
  {
    "id": "RUS",
    "value": 838891
  },
  {
    "id": "RWA",
    "value": 149647
  },
  {
    "id": "ESH",
    "value": 566478
  },
  {
    "id": "SAU",
    "value": 598359
  },
  {
    "id": "SDN",
    "value": 267520
  },
  {
    "id": "SDS",
    "value": 761108
  },
  {
    "id": "SEN",
    "value": 893129
  },
  {
    "id": "SLB",
    "value": 56300
  },
  {
    "id": "SLE",
    "value": 657652
  },
  {
    "id": "SLV",
    "value": 574103
  },
  {
    "id": "ABV",
    "value": 579709
  },
  {
    "id": "SOM",
    "value": 133120
  },
  {
    "id": "SRB",
    "value": 565250
  },
  {
    "id": "SUR",
    "value": 639177
  },
  {
    "id": "SVK",
    "value": 583571
  },
  {
    "id": "SVN",
    "value": 714546
  },
  {
    "id": "SWZ",
    "value": 860404
  },
  {
    "id": "SYR",
    "value": 418092
  },
  {
    "id": "TCD",
    "value": 394095
  },
  {
    "id": "TGO",
    "value": 119075
  },
  {
    "id": "THA",
    "value": 420493
  },
  {
    "id": "TJK",
    "value": 89412
  },
  {
    "id": "TKM",
    "value": 276445
  },
  {
    "id": "TLS",
    "value": 359904
  },
  {
    "id": "TTO",
    "value": 917957
  },
  {
    "id": "TUN",
    "value": 448260
  },
  {
    "id": "TUR",
    "value": 375389
  },
  {
    "id": "TWN",
    "value": 64925
  },
  {
    "id": "TZA",
    "value": 286537
  },
  {
    "id": "UGA",
    "value": 245830
  },
  {
    "id": "UKR",
    "value": 681696
  },
  {
    "id": "URY",
    "value": 593657
  },
  {
    "id": "USA",
    "value": 876625
  },
  {
    "id": "UZB",
    "value": 930495
  },
  {
    "id": "VEN",
    "value": 213962
  },
  {
    "id": "VNM",
    "value": 355848
  },
  {
    "id": "VUT",
    "value": 598719
  },
  {
    "id": "PSE",
    "value": 762132
  },
  {
    "id": "YEM",
    "value": 525898
  },
  {
    "id": "ZAF",
    "value": 699757
  },
  {
    "id": "ZMB",
    "value": 886498
  },
  {
    "id": "ZWE",
    "value": 373090
  },
  {
    "id": "KOR",
    "value": 606190
  }
]




    const theme = useTheme();

    return (
      <>
                      <SectionHeader heading={"Geography Chart"} desc={"Simple Geography Chart Example"} />

        <Box
            sx={{height:" 95vh" , border:`2px solid ${theme.palette.divider}`, borderRadius:2 , padding:5}}
        >
          
            <ResponsiveChoropleth
                
                data={data}
                features={geo.features}   
                margin={{ top: 50, right: 0, bottom: 0, left: 0 }}
                colors="spectral"
                unknownColor={theme.palette.primary.main}
                domain={[0, 1000000]}
                valueFormat=".2s"
                projectionScale={130}
                projectionTranslation={[0.5, 0.5]}
                projectionRotation={[0, 0, 0]}
                borderWidth={0.5}

                borderColor="#00000033"
                legends={isDashboard ?[] :[
            {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemTextColor: theme.palette.text.primary,
                itemOpacity: 0.85,
                symbolSize: 18
            }
        ]}
                theme={{
    "text": {
        "fontSize": 11,
        "fill": "#333333",
        "outlineWidth": 0,
        "outlineColor": "#ffffff"
    },
    "axis": {
        "domain": {
            "line": {
                "stroke": "#777777",
                "strokeWidth": 1
            }
        },
        "legend": {
            "text": {
                "fontSize": 12,
                "fill": "#333333",
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
                "fill": "#333333",
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
    "legends": {
        "title": {
            "text": {
                "fontSize": 11,
                "fill": "#333333",
                "outlineWidth": 0,
                "outlineColor": "#ffffff"
            }
        },
        "text": {
            "fontSize": 11,
            "fill": "#333333",
            "outlineWidth": 0,
            "outlineColor": "#ffffff"
        },
        "ticks": {
            "line": {},
            "text": {
                "fontSize": 10,
                "fill": "#333333",
                "outlineWidth": 0,
                "outlineColor": "#ffffff"
            }
        }
    },
    "annotations": {
        "text": {
            "fontSize": 13,
            "fill": "#333333",
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
    "tooltip": {
        "wrapper": {},
        "container": {
            "background": "#ffffff",
            "color": "#333333",
            "fontSize": 12
        },
        "basic": {},
        "chip": {},
        "table": {},
        "tableCell": {},
        "tableCellValue": {}
    }
                }}
            />
        </Box>
              </>

    )
}
