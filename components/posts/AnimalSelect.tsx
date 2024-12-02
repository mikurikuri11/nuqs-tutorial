"use client";

import { Select, SelectItem } from "@nextui-org/react";
import { animals } from "./data";

export const AnimalSelect = () => {
  return (
    <Select
      name="animals"
      items={animals}
      label="Favorite Animal"
      placeholder="Select an animal"
      className="max-w-xs"
    >
      {(animal) => <SelectItem key={animal.key}>{animal.label}</SelectItem>}
    </Select>
  );
};
