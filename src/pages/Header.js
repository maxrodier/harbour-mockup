import React from 'react'

import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const teams = [
  { id: 0, name: 'All' },
  { id: 1, name: 'ContactPL' },
  { id: 2, name: 'ContactBilling' },
  { id: 3, name: 'ContactCL' },
  { id: 4, name: 'Rating' },
]

const products = [
  { id: 0, name: 'All' },
  { id: 1, name: 'ProductA' },
  { id: 2, name: 'ProductB' },
  { id: 3, name: 'ProductC' },
  { id: 4, name: 'ProductD' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Header = () => {
  const [teamSelected, teamSetSelected] = useState(teams[3])
  const [productSelected, productSetSelected] = useState(products[3])

  return (
    <div class="grid grid-cols-2 gap-4" >
      <div  class="grid grid-cols-2 gap-4" >
    <Listbox value={teamSelected} onChange={teamSetSelected}>
    {({ open }) => (
      <>
        <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">Team</Listbox.Label>
        <div className="relative mt-2">
          <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
            <span className="block truncate">{teamSelected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </span>
          </Listbox.Button>

          <Transition
            show={open}
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {teams.map((team) => (
                <Listbox.Option
                  key={team.id}
                  className={({ active }) =>
                    classNames(
                      active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                      'relative cursor-default select-none py-2 pl-8 pr-4'
                    )
                  }
                  value={team}
                >
                  {({ selected, active }) => (
                    <>
                      <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                        {team.name}
                      </span>

                      {selected ? (
                        <span
                          className={classNames(
                            active ? 'text-white' : 'text-indigo-600',
                            'absolute inset-y-0 left-0 flex items-center pl-1.5'
                          )}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </>
    )}
  </Listbox>
  </div>
  <div  class="grid grid-cols-2 gap-4" >
  <Listbox value={productSelected} onChange={productSetSelected}>
  {({ open }) => (
    <>
      <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">Product</Listbox.Label>
      <div className="relative mt-2">
        <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
          <span className="block truncate">{productSelected.name}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </span>
        </Listbox.Button>

        <Transition
          show={open}
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {products.map((product) => (
              <Listbox.Option
                key={product.id}
                className={({ active }) =>
                  classNames(
                    active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                    'relative cursor-default select-none py-2 pl-8 pr-4'
                  )
                }
                value={product}
              >
                {({ selected, active }) => (
                  <>
                    <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                      {product.name}
                    </span>

                    {selected ? (
                      <span
                        className={classNames(
                          active ? 'text-white' : 'text-indigo-600',
                          'absolute inset-y-0 left-0 flex items-center pl-1.5'
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </>
  )}
  </Listbox>
  </div>
  </div>
  )
}

export default Header;