import React from 'react'
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import { BarChart, LineChart } from "@mui/x-charts"
import { ChartsElement, LineChartContainer, LineChartContent, GaugeInformation } from './style';
import { Card, CardContent, CardHeader, Typography } from "@mui/material";

export default function Charts() {
    return(
        <ChartsElement>
            <Card className="chartCard">
            <CardContent className="chartCardContent">
            <Typography variant="h4" className="chartTypography" component='span'>Termômetro de satisfação</Typography>
              <Gauge
              width={350}
              height={350}
                value={75}
                startAngle={-110}
                endAngle={110}
                sx={{
                  [`& .${gaugeClasses.valueText}`]: {
                    fontSize: 40,
                    transform: 'translate(0px, 0px)',
                  },
                }}
                
              />
              <GaugeInformation>
              Seu produto está <span className={'textGreen'}>Bem Avaliado</span> entre os clientes!
              </GaugeInformation>
            </CardContent>
          </Card>
          <LineChartContainer >
          <LineChartContent>
            <Card className="cardLineChat">
              <Typography className="lineChatTypography" component='p'>Previsão de cancelamento</Typography>
              <LineChart
                xAxis={[{ 
                  data: [
                    new Date(2024, 6, 1),
                    new Date(2024, 7, 1),
                    new Date(2024, 8, 1),
                    new Date(2024, 9, 1),
                    new Date(2024, 10, 1),
                    new Date(2024, 11, 1),
                    new Date(2024, 12, 1)
                  ],
                  scaleType: 'time'
                }]}
                series={[
                  {
                    curve: "linear", data: [200, 225, 300, 275, 315, 330, 370],
                  },
                ]}
                width={700}
                height={350}
              />
            </Card>
            <Card className="cardLineChat">
              <Typography className="lineChatTypography" component='p'>Por segmentação de clientes</Typography>
              <div className="div2">
                <Card className="card5">
                  <Typography className="lineChatTypography" component='p'>Cancelamento/Inadimplências</Typography>
                  <BarChart
                    xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
                    series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                    width={350}
                    height={300}
                  />
                </Card>
                <Card className="card5">
                  <Typography className="lineChatTypography" component='p'>Alcance/Efetividade do OmniEngage</Typography>
                  <BarChart
                    series={[
                      { data: [4, 2, 5, 4, 1], stack: 'A', label: 'Series A1' },
                      { data: [2, 8, 1, 3, 1], stack: 'A', label: 'Series A2' }
                    ]}
                    width={350}
                    height={300}
                  />
                </Card>
              </div>
            </Card>
          </LineChartContent>
        </LineChartContainer>
        </ChartsElement>
    )
}