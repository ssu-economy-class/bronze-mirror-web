import {
  format,
  isSameYear,
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
} from "date-fns";

// 날짜 형식을 친화적이게 변환해주는 함수입니다.
export const formatDateCardTime = (createdAt: string): string => {
  const now = new Date();
  const date = new Date(createdAt);

  const minutesDiff = differenceInMinutes(now, date);
  const hoursDiff = differenceInHours(now, date);
  const daysDiff = differenceInDays(now, date);

  if (minutesDiff < 60) {
    return `${minutesDiff}분 전`;
  } else if (hoursDiff < 24) {
    return `${hoursDiff}시간 전`;
  } else if (daysDiff === 1) {
    return `어제 ${format(date, "HH:mm")}`;
  } else if (daysDiff <= 3) {
    return `${daysDiff}일 전 ${format(date, "HH:mm")}`;
  } else if (isSameYear(now, date)) {
    return `${format(date, "MM/dd HH:mm")}`;
  } else {
    return `${format(date, "yyyy/MM/dd HH:mm")}`;
  }
};
