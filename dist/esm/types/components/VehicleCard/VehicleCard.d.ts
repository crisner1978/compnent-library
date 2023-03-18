/// <reference types="react" />
export type IVehicle = {
    year: string;
    make: string;
    model: string;
    trim: string;
    image: string;
    mileage: string;
    lane?: string;
    runNumber?: string;
    auction?: string;
    condition?: string;
    askingPrice?: string;
    minimumBid?: string;
    wholesaleValue?: string;
    retailValue?: string;
    mmrPrice?: string;
    price?: string;
    startingBidPrice?: string;
    bidPrice?: string;
    buyNowPrice?: string;
};
interface VehicleCardProps {
    vehicle: IVehicle;
    isLoading?: boolean;
    itemUrl?: string;
}
declare const VehicleCard: ({ vehicle, isLoading, itemUrl }: VehicleCardProps) => JSX.Element;
export default VehicleCard;
