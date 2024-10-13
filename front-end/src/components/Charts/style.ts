import { color } from './../../../node_modules/@mui/system/palette/palette.d';
import styled from 'styled-components'

export const ChartsElement = styled.div`
    display: flex;

    padding-left: 20px;
    padding-top: 20px;
    gap: 30px;

    .chartCard {
        width: fit-content;
    }

    .chartCardContent {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .chartTypography {
        font-size: 30px;
        font-weight: 600;
    }


    .cardLineChat{
        padding: 3px;
        display: flex;  
        flex-direction: column;
        gap: 20px;
        align-items: center;
    }

    .lineChatTypography {
        font-size: 20px;
        font-weight: 500
    }
`

export const LineChartContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;

    .card5{
        padding: 5px;
    }    

    .div2 {
        display: flex;
        flex-direction: row;
        gap: 2px;
    }
`
export const LineChartContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`
export const GaugeInformation = styled.h2`
    color: black;
    font-size: 36px;

    .textGreen {
        color: #25A209;
    }

`

export const TextGreen = styled.span`

`
