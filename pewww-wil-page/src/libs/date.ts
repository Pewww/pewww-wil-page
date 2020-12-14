import dayjs from 'dayjs';

export const formatDate = (date: dayjs.ConfigType, format: string) => dayjs(date).format(format);
