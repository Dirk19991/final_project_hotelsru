export function FormatDate(date: string | Date) {
    const dateFormat = new Date(date)

    const day = dateFormat.getDate();
    const monthNames = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    const monthIndex = dateFormat.getMonth();
    const monthName = monthNames[monthIndex];
    const year = dateFormat.getFullYear(); 

    return `${day} ${monthName} ${year}`
}