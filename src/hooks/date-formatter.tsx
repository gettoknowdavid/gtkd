const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export function schoolDateFormat(dateString: string) {
  const date = new Date(dateString);
  return `${months[date.getMonth()]} ${date.getFullYear()}`;
}

export function dateFormat(dateString: string) {
  const date = new Date(dateString);
  return `${date.getMonth()}/${date.getFullYear()}`;
}
