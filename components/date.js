import { parseISO, format } from 'date-fns';

// um das Datum in anderem Format darzustellen
export default function Date({ dateString }) {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
