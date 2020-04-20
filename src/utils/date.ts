import { format, isPast as isPastDateFNS } from "date-fns"

export function formatDateTime(datetime: Date) {
    return format(datetime, "dd/MM/yyyy - HH:mm")
}

export function isPast(date: Date) {
    return isPastDateFNS(date)
}
