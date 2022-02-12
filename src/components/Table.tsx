import React from "react";
import { CurrencyLabel, Tab } from "@skbkontur/react-ui";
import { Vehicle, VehicleType, vehicleTypeTitles } from "../data/vehicles/contracts";

type TableItemProps = {
  vehicle: Vehicle,
  number: number
}

type TableProps = {
  vehicles: Vehicle[]
}

const TableItem: React.FC<TableItemProps> = ({ vehicle, number }) => {
  return (
    <tr>
      <td>{number}</td>
      <td>{vehicle.title}</td>
      <td>
        <CurrencyLabel value={vehicle.price} fractionDigits={2} />
      </td>
      <td>{VehicleType[vehicle.type]}{vehicle.type}</td>
    </tr>
  );
};

export const Table: React.FC<TableProps> = ({ vehicles }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Название</th>
          <th>Цена, ₽</th>
          <th>Тип ТС</th>
        </tr>
      </thead>
      <tbody>
        {vehicles.map((x, i) => (
          <TableItem key={x.id} number={i + 1} vehicle={x} />
        ))}
      </tbody>
    </table>
  );
};
