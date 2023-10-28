import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import toolIcon from '../../assets/icons/tool.svg'
import { FiTool } from 'react-icons/fi'
import Chart from "react-apexcharts";

const DeveloperPlan = () => {
    const generateMonthCategories = () => {
        return [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
    };

    const generateRandomMonthData = () => {
        const data = [];
        for (let i = 0; i < 12; i++) {
            data.push(Math.floor(Math.random() * 500));
        }
        return data;
    };

    const [chartData, setChartData] = useState({
        options: {
            chart: {
                stacked: true, // This makes only the top of the bar rounded
                toolbar: {
                    show: false
                }
            },
            xaxis: {
                categories: generateMonthCategories(),
                labels: {
                    show: true,
                }
            },
            yaxis: {
                opposite: true, // Move the left Y-axis label to the right side
            },
            plotOptions: {
                bar: {
                        horizontal: false,
                        distributed: true,
                        borderRadius: 10, // this makes both the side rounded of the bar
                        
                       
                },


            },
            fill: {
                type: "gradient",
                gradient: {
                    shade: "light",
                    type: "vertical",
                    shadeIntensity: 0.25,
                    gradientToColors: [
                        "#FBC7D4",
                        "#FFA869",
                        "#B3DF05",
                        "#69D8CA",
                        "#74E8D3",
                        "#B6FBFF",
                        "#5DE8F0",
                        "#73CDFF",
                        "#FF842C",
                        "#FFA011",
                        "#395701",
                        "#FFA869",
                    ],
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100],
                },
            },
            dataLabels: {
                enabled: false, // Hide data labels inside the bars
            },
            legend: {
                show: false, // Hide the legend
            },
        },
        series: [
            {
                name: "Total Credits Usage",
                data: generateRandomMonthData()
                
            }
        ],
        selectedPeriod: "month"
    });
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-10 md:col-span-2  w-full ">
                <div className="big-container rounded-3xl h-full shadow-xs pt-9 px-3 bg-white">
                    <div className='flex items-center text-theme px-7'>
                        <FiTool className='text-2xl md:text-3xl ' />
                        <h1 className='text-3xl font-semibold m-2'>Developer</h1>
                    </div>

                    <div className="flex flex-col lg:flex-row p-5">
                        {/* Left Column */}
                        <div className="lg:w-2/5">
                            {/* Small Card 1 */}
                            <div className="card-light p-4 mx-2 mb-5 mt-2 rounded-3xl">
                                <h2 className="font-bold text-3xl md:text-4xl">Developer Plan</h2>
                                <div className="flex mt-12 items-end">
                                    <h3 className='text-2xl xl:text-3xl font-semibold mb-0'>$128 Used</h3>
                                </div>
                                <div className="h-6 w-full bg-gray-200 mt-4 rounded-3xl overflow-hidden relative">
                                    <div className="h-full bg-[#FFD816] absolute left-0 top-0" style={{ width: '80%' }}></div>
                                    <div className="h-full bg-[#89BD37] absolute right-0 top-0" style={{ width: '20%' }}></div>
                                </div>
                                <div className="flex justify-between ms-auto p-2">
                                    <p className='font-semibold text-secondary text-sm'>September</p>
                                    <p className='font-semibold text-secondary text-sm'>October</p>
                                </div>
                            </div>

                            {/* Small Card 2 */}
                            <div className="p-4 m-2 rounded-3xl card-light">
                                <h2 className="font-bold text-3xl md:text-4xl">API Keys</h2>
                                <div className="flex mt-10 md:w-[50%] items-end justify-between">
                                    <p className='text-primary ms-4 font-bold'>Key</p>
                                    <p className='text-primary ms-4 font-bold'>Name</p>
                                </div>
                                <div className="flex mt-2 md:w-[50%] items-end justify-between">
                                    <p className='text-[#939393] ms-4 font-bold'>Null</p>
                                    <p className='text-[#939393] ms-4 font-bold'>Null</p>
                                </div>
                                <button className="btn-theme text-white font-bold text-base py-2 mt-6 w-full px-10 rounded-xl ">
                                    Generate secret key
                                </button>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="lg:w-3/5">
                            {/* Big Card */}


                            <div className="p-4 m-2 rounded-3xl card-light h-[483px] flex flex-col justify-center items-center">
                                <h2 className="font-bold text-3xl md:text-4xl">Total Expenses</h2>
                                <div className="chart-container" style={{ maxWidth: '450px', width: '100%', height: '400px' }}>
                                    <Chart
                                        options={chartData.options}
                                        series={chartData.series}
                                        type="bar"
                                        width="100%"
                                        height="100%"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default DeveloperPlan


