import React from 'react'

import { RocketLaunchIcon } from '@heroicons/react/20/solid'

const assessments = [


    {
      name: 'Assess Product',
      title: 'Gives you new flows',
      role: 'recommended',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    }
]

const flows = [


  {
    name: 'Onboard NexusIQ',
    title: 'ISM, Mentor onboarding',
    role: 'recommended',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Onboard Synopsis Polaris ',
    title: 'ISM, Mentor onboarding',
    role: 'recommended',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Migrate to Springboot 3',
    title: 'Code Remediation',
    role: 'optional',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },


  // More people...
]

const Assessment = () => {
  return (
    <>
    <div>
        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Assessment</h1>
    </div>

    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {assessments.map((assessment) => (
      <li key={assessment.email} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
        <div className="flex w-full items-center justify-between space-x-6 p-6">
          <div className="flex-1 truncate">
            <div className="flex items-center space-x-3">
              <h3 className="truncate text-sm font-medium text-gray-900">{assessment.name}</h3>
            </div>
            <div className="flex items-center space-x-3">
              <p className="mt-1 truncate text-sm text-gray-500">{assessment.title}</p>
              <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                {assessment.role}
              </span>
            </div>
          </div>
          <img className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300" src={assessment.imageUrl} alt="" />
        </div>
        <div>
          <div className="-mt-px flex divide-x divide-gray-200">
            <div className="flex w-0 flex-1">
              <button
                className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
              >
                <RocketLaunchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                Launch
              </button>
            </div>
          </div>
        </div>
      </li>
    ))}
  </ul>

    <div>
    <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Available Flows</h1>
    </div>

    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {flows.map((flow) => (
      <li key={flow.email} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
        <div className="flex w-full items-center justify-between space-x-6 p-6">
          <div className="flex-1 truncate">
            <div className="flex items-center space-x-3">
              <h3 className="truncate text-sm font-medium text-gray-900">{flow.name}</h3>
            </div>
            <div className="flex items-center space-x-3">
              <p className="mt-1 truncate text-sm text-gray-500">{flow.title}</p>
              <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                {flow.role}
              </span>
            </div>
          </div>
          <img className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300" src={flow.imageUrl} alt="" />
        </div>
        <div>
          <div className="-mt-px flex divide-x divide-gray-200">
            <div className="flex w-0 flex-1">
              <button
                className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
              >
                <RocketLaunchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                Launch
              </button>
            </div>
          </div>
        </div>
      </li>
    ))}
  </ul>
  </>
  )
}

export default Assessment;