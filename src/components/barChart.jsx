"use client"
import React from 'react';
import Chart from 'react-apexcharts';

const BarChart = ({ data }) => {
    const chartData = {
        series: [
            {
                name: 'Dataset 1',
                data: data.map(item => item.value),
            },
        ],
        options: {
            chart: {
                type: 'bar',
                height: 500, // Ubah tinggi chart menjadi lebih besar
                foreColor: '#000000', // Set text color outside chart to black
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    columnWidth: '70%', // Ubah lebar kolom menjadi lebih besar
                    endingShape: 'rounded',
                },
            },
            dataLabels: {
                enabled: true, // Enable data labels
                style: {
                    colors: ['#ffffff'], // Set data label color to white
                },
                formatter: function (val) {
                    return val + ' kg'; // Tambahkan 'kg' di akhir value
                },
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent'],
            },
            xaxis: {
                categories: data.map(item => item.label),
            },
            yaxis: {
                title: {
                    text: 'PerKomoditas',
                },
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'light',
                    type: 'horizontal',
                    shadeIntensity: 0.5,
                    gradientToColors: ['#00c6ff', '#0072ff'], // Warna gradient biru
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100]
                }
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val + ' kg'; // Tambahkan 'kg' di akhir value
                    },
                },
            },
            
        },
    };

    return <Chart options={chartData.options} series={chartData.series} type="bar" height={500} />;
};

export default BarChart;