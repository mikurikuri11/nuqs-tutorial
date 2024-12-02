import { DateRangePicker } from "@nextui-org/date-picker";

export const RegisterDatePicker = () => {
  return (
    <DateRangePicker
      label="Stay duration"
      className="max-w-xs"
      startName="startDate"
      endName="endDate"
    />
  );
};
