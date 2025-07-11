export function getMinuteDifference(date1: Date, date2: Date){
  // 2つの日付のミリ秒の差を計算
  const differenceInMilliseconds = Math.abs(date1.getTime() - date2.getTime());

  // ミリ秒を分に変換
  // 1分 = 60秒 = 60 * 1000ミリ秒 = 60000ミリ秒
  const differenceInMinutes = differenceInMilliseconds / (1000 * 60);

  return differenceInMinutes;
}