import React, {useState, useEffect} from "react";
import {Vehicle, VehicleFilter, vehicleTypes, vehicleTypeTitles } from "../data/vehicles/contracts";
import {VehicleType} from "../data/vehicles/contracts"
import { VehicleApi } from "../data/vehicles/api";
import {VehicleTypeSelect} from "./VehicleTypeSelect"

type FilterProps = {
  setVehicles: (vehicles: Vehicle[]) => any,
  vehicles: Vehicle[] 
}


export const Filter: React.FC<FilterProps> = ({setVehicles, vehicles}) => {

    useEffect(() => {
    const data = VehicleApi.search(filter);
    setVehicles(data);
  }, []);

  const [filter, setFilter] = useState<VehicleFilter>({title: "", type: null})


  const [type, setType] = useState<VehicleType | null>(null)
  const [title, setTitle] = useState<string>('') 
  
  function setChanges(filter: VehicleFilter): any {
    const data = VehicleApi.search(filter)
    setVehicles(data) 
  }


  return <div>
    <input value={title} onChange={event => setTitle(event.target.value)}/>
    <VehicleTypeSelect value={type} onChange={setType}/>
    <button onClick={() => {
      const newFilter = {...filter, ...{title:title, type: type}}
      setFilter({...newFilter})
      setChanges(newFilter)
    }}>Применить</button>
</div>;
} 
