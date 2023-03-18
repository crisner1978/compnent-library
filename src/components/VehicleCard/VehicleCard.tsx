import React from 'react'
import { BookmarkIcon } from '@heroicons/react/24/outline'
import { MapPinIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import { formatMoney } from '../../lib/formatMoney'
import { handleSalesPrice } from '../../lib/handleSalesPrice'

export type IVehicle = {
  year: string
  make: string
  model: string
  trim: string
  image: string
  mileage: string
  lane?: string
  runNumber?: string
  auction?: string
  condition?: string
  askingPrice?: string
  minimumBid?: string
  wholesaleValue?: string
  retailValue?: string
  mmrPrice?: string
  price?: string
  startingBidPrice?: string
  bidPrice?: string
  buyNowPrice?: string
}

interface VehicleCardProps {
  vehicle: IVehicle
  isLoading?: boolean
  recId?: string
  itemUrl?: string
}

const VehicleCard = ({ vehicle, isLoading, itemUrl }: VehicleCardProps) => {
  const price = handleSalesPrice(vehicle)
  const salesPrice = typeof price.value === 'number' ? '$' + formatMoney(price.value) : 'no info'

  return (
    <a href={itemUrl}>
      <div className='vehicleCard z-50'>
        <div
          className={clsx('bg-zinc-900/80', {
            vehicleImage: isLoading,
          })}>
          <img
            className='rounded-t-[10px] object-cover object-center'
            src={vehicle?.image || '/assets/comingSoon.jpg'}
            alt={vehicle?.model || 'vehicle'}
          />
        </div>
        <div className='flex h-full flex-col bg-white px-6 pb-6 pt-4 group-hover:bg-gray-50 md:px-4'>
          <div className='relative flex items-center justify-between'>
            <h3 className='vehicle__title'>
              {vehicle?.year || 'Missing'} {vehicle?.make}
            </h3>

            <BookmarkIcon
              className='ml-2 h-5 w-5 transform cursor-pointer hover:scale-110 hover:fill-DrivlyGreen hover:stroke-DrivlyGreen'
              onClick={(e: { preventDefault: () => void }) => {
                e.preventDefault()
              }}
            />
          </div>
          <p className='vehicle__subtitle truncate capitalize'>
            {vehicle?.model?.toLowerCase()} {vehicle?.trim?.toLowerCase()}
          </p>
          <div className='relative flex items-center border-b border-Drivly/10 py-4 text-right tracking-[-0.02em]'>
            <div className=''>
              <span className='text-lg font-semibold'>{salesPrice}</span>
              <span className='ml-2 whitespace-nowrap border-l border-Drivly/10 pl-2'>
                {vehicle?.mileage?.toLocaleString()} <span className='text-sm '>miles</span>
              </span>{' '}
            </div>
            <div className='absolute bottom-5 right-0 flex flex-col font-sans'>
              <span className='text-sm font-semibold capitalize leading-snug tracking-[0.02em] text-DrivlyGreen'>
                {price.type}
              </span>
              {vehicle?.lane && (
                <span className='text-sm font-medium leading-tight tracking-[0.0002em] text-STEEL__BLUE'>
                  Lane {vehicle?.lane}/{vehicle?.runNumber ? `${vehicle?.runNumber}` : null}
                </span>
              )}
            </div>
          </div>
          <div className='vehicle__footer flex gap-x-1'>
            <p className='flex h-[30.6px] items-center gap-x-1 capitalize text-Drivly'>
              <MapPinIcon className='mr-1 mb-1 h-4 text-[#B3B3B3]' />
              <span>{vehicle?.auction || 'No info'}</span>
            </p>

            {vehicle?.condition && (
              <span className='vehicle__condition'>{vehicle?.condition} Condition</span>
            )}
          </div>
        </div>
      </div>
    </a>
  )
}

export default VehicleCard
