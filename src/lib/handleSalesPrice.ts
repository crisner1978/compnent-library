import { IVehicle } from "../components/VehicleCard/VehicleCard"
import { auctionFees, DRIVLY_FEE, PARTNER_MARGIN } from "./constants"

export type PriceType = {
  value: any
  type: string
}

export function handleSalesPrice(vehicle: IVehicle | any, details?: any) {
  const buyNowPrice = Math.max(vehicle?.buyNowPrice || 0, details?.buyNowPrice! || 0)

  const {
    askingPrice,
    minimumBid,
    wholesaleValue,
    retailValue,
    mmrPrice,
    price,
    startingBidPrice,
    bidPrice,
  } = vehicle

  let salesPrice = {} as PriceType

  if (buyNowPrice) {
    salesPrice['value'] = buyNowPrice
    salesPrice['type'] = 'buy now'
  } else if (askingPrice) {
    salesPrice['value'] = askingPrice
    salesPrice['type'] = 'asking'
  } else if (minimumBid) {
    salesPrice['value'] = minimumBid
    salesPrice['type'] = 'min bid'
  } else if (wholesaleValue) {
    salesPrice['value'] = wholesaleValue
    salesPrice['type'] = 'wholesale'
  } else if (retailValue) {
    salesPrice['value'] = retailValue
    salesPrice['type'] = 'retail'
  } else if (mmrPrice) {
    salesPrice['value'] = mmrPrice
    salesPrice['type'] = 'mmr price'
  } else if (price) {
    salesPrice['value'] = price
    salesPrice['type'] = 'price'
  } else if (startingBidPrice) {
    salesPrice['value'] = startingBidPrice
    salesPrice['type'] = 'starting bid'
  } else if (bidPrice) {
    salesPrice['value'] = bidPrice
    salesPrice['type'] = 'bid price'
  } else {
    salesPrice['value'] = 'no info'
    salesPrice['type'] = 'no info'
  }

  // startingBidPrice
  //bidPrice
  const auctionFee = getAuctionFee(salesPrice.value)

  const amount = salesPrice.value + auctionFee + DRIVLY_FEE + PARTNER_MARGIN

  salesPrice.value = amount === '$NaN' ? 'No info' : amount
  return salesPrice
}

function getAuctionFee(salesPrice: number) {
  let auctionFee = 0

  for (let item of auctionFees) {
    let min = item.vehiclePriceMin
    let max = item.vehiclePriceMax
    if (salesPrice >= min && salesPrice <= max) {
      auctionFee = Number(item.dollarAmount)
    }
  }
  return auctionFee
}
