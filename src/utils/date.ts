import { format } from "date-fns";

export function formatDateTime(datetime: Date) {
  return format(datetime, "dd/MM/yyyy - HH:mm");
}
