import { IVehicle } from "../components/VehicleCard/VehicleCard";
export type PriceType = {
    value: any;
    type: string;
};
export declare function handleSalesPrice(vehicle: IVehicle | any, details?: any): PriceType;
