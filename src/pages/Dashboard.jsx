import React from 'react'
import Layout from '../components/Layout'
import { CircleStackIcon, ClockIcon, PaperClipIcon, WifiIcon } from '@heroicons/react/24/outline'
import AreaChart from '../components/AreaChart'
import BarChart from '../components/BarChart'
import CircularProgress from '../components/CircularProgress'

function Dashboard() {

  const stats = [
    {
      title: "Connections",
      icon: <WifiIcon className='h-full w-full' />,
      count: 4,
      percentage: 75,
      bg: "from-sky-500 to-sky-200"

    },
    {
      title: "Configurations",
      icon: <CircleStackIcon className='h-full w-full' />,
      count: 4,
      percentage: 100,
      bg: "from-orange-300 to-orange-100"

    },
    {
      title: "Pipelines",
      icon: <PaperClipIcon className='h-full w-full' />,
      count: 4,
      percentage: 100,
      bg: "from-red-300 to-red-100"

    },
    {
      title: "Schedules",
      icon: <ClockIcon className='h-full w-full' />,
      count: 4,
      percentage: 100,
      bg: "from-pink-300 to-pink-100"
    }
  ]

  return (
    <div className='flex flex-col gap-8'>
      <h1 className='text-2xl font-medium'>Dashboard</h1>

      <div className='grid sm:grid-cols-3 grid-cols-2 gap-4 lg:grid-cols-4 '>
        {stats?.map((item) => (
          <div className={`p-4 bg-gradient-to-tr  rounded-md flex flex-col gap-4 ${item?.bg}`}>
            {/* Header */}
            <div className='flex w-full justify-between items-center'>
              <span className='font-medium text-xl'>{item?.title}</span>
              <div className='h-8 w-8 text-gray-500'>
                {item?.icon}
              </div>
            </div>

            {/* Footer */}
            <div className='flex w-full justify-between items-center'>

              <span>Total Counts: {item?.count}</span>

              <CircularProgress percentage={item?.percentage} />
            </div>

          </div>
        ))}
      </div>

      <div className='flex lg:flex-row flex-col w-full gap-4'>
        <div className='flex-1 border border-gray-300 p-4 rounded-md min-h-60' >
          <AreaChart />
        </div>

        <div className='flex-1 border border-gray-300 p-4 rounded-md min-h-60'>
          <BarChart />
        </div>

      </div>
    </div>
  )
}

export default Dashboard