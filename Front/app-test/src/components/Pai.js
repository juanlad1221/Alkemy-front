import React, { useState, useContext } from 'react';
import { Context } from '../context/context'
import { Chart, Pies, Transform, Title } from 'rumble-charts';


export default function Pai() {

    //Data a usar en el chart pai
    const series = [{
        data: [{ y: 1, color: '#DF01D7' }, { y: 2, color: '#8A0886' }]
    }]


    return (
        <Chart width={150} height={150} series={series} >
            <Transform method={['transpose', 'stack']}>
                <Pies combined={true} />
            </Transform>
        </Chart >
    )

}