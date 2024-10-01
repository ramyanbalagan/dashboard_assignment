import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, EyeIcon, MagnifyingGlassIcon, PencilSquareIcon } from '@heroicons/react/24/outline'
import React from 'react'
import ToggleSwitch from '../components/ToggleSwitch'

function Collections() {

  const tabs = [
    { 
      name: "Connections",
      current: true
    },
    { 
      name: "Connections Detail",
      current: false
    }
  ]

  const columns = [
    {
      header: "S.No",
      key: "no"
    },
    {
      header: "Connection Name",
      key: "cn"
    },
    {
      header: "Description",
      key: "description"
    },
    {
      header: "Start Date",
      key: "sd"
    },
    {
      header: "End Date",
      key: "ed"
    },
    {
      header: "Active",
      key: "active"
    },
    {
      header: "Action",
      key: "action"
    }
  ]

  const data = [
    {
      no: '1',
      cn: "Oracle",
      description: "Connect to AWS",
      sd: "04-03-2024",
      ed: "05-03-2024",
      active: <ToggleSwitch />,
      action: <div className='w-full flex gap-4 items-center'>
        <PencilSquareIcon className='h-5 w-5'/>
        <EyeIcon className='h-5 w-5'/>
      </div>
    },
    {
      no: '2',
      cn: "aws",
      description: "Connect to AWS",
      sd: "04-03-2024",
      ed: "05-03-2024",
      active: <ToggleSwitch />,
      action: <div className='w-full flex gap-4 items-center'>
        <PencilSquareIcon className='h-5 w-5'/>
        <EyeIcon className='h-5 w-5'/>
      </div>
    },
    {
      no: '3',
      cn: "Azure",
      description: "Connect to AWS",
      sd: "04-03-2024",
      ed: "05-03-2024",
      active: <ToggleSwitch />,
      action: <div className='w-full flex gap-4 items-center'>
        <PencilSquareIcon className='h-5 w-5'/>
        <EyeIcon className='h-5 w-5'/>
      </div>
    }
  ]

  return (
    <div className='flex flex-col'>
      {/* Top bar */}

      <div className='py-4 flex justify-between items-center'>
        <div className='flex items-center gap-8 font-medium'>
          {tabs?.map((item)=> (
            <span className={` ${item?.current ? "border-b-2 border-[#0C50A3]" : ""} pb-2 cursor-pointer `}>{item?.name}</span>
          ))}
        </div>

        <div className='flex gap-8 items-center'>
          <div className='h-10 w-10 p-2 border border-gray-300 rounded-full'>
            <MagnifyingGlassIcon className='h-full w-full'/>
          </div>

          <button className='outline-none bg-[#0C50A3] text-white font-medium rounded-sm px-4 py-2'>New Connection</button>
        </div>
      </div>

      {/* Table View */}

      <div className='border overflow-hidden min-h-[calc(100vh-120px)] justify-between border-gray-200 flex flex-col gap-4 rounded-md'>

        {/* Table */}
          <table className='w-full'>
            <thead>
              <tr className='bg-gray-100'>
                {columns?.map((item)=> (
                  <td className='p-4 font-medium text-gray-500'>{item?.header}</td>
                ))}
              </tr>
            </thead>
            <tbody>
                {data?.map((item)=> (
                  <tr className=''>
                    {columns?.map((header)=> (
                      <td className='p-4 border-b border-gray-200'>{item[header?.key]}</td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className='p-4 bg-gray-100 flex gap-4 justify-end items-center'>
            <span>Total 2 items</span>
            <button className='border border-gray-300 rounded-md h-10 min-w-10 p-2'>
              <ChevronLeftIcon className='h-5 w-5'/>
            </button>
            <button className='border border-gray-300 rounded-md h-10 min-w-10 p-2'>
              <span>1</span>
            </button>
            <button className='border border-gray-300 rounded-md h-10 min-w-10 p-2'>
              <ChevronRightIcon className='h-5 w-5'/>
            </button>

            <button className='border border-gray-300 items-center justify-center flex gap-2 rounded-md h-10 min-w-10 py-2 px-4'>
              <span>7 / page </span>
              
              <ChevronDownIcon className='h-3 w-3'/>
            </button>
          </div>
      </div>
    </div>
  )
}

export default Collections