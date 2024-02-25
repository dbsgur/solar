/**
 * @param obj
 */
export function stripUndefined(obj: { [key: string]: any }) {
  const stripped = Object.keys(obj).reduce((acc: { [key: string]: any }, prop) => {
    if (obj[prop] !== undefined) {
      acc[prop] = obj[prop];
    }
    return acc;
  }, {});
  if (Object.keys(stripped).length === 0) {
    return undefined;
  }
  return stripped;
}

export function conversionRate(numerator: number, denominator: number) {
  if (denominator === 0) {
    return '-';
  }
  return String(Number((numerator / denominator) * 100).toFixed(2));
}

/**
 * 값이 변한 object의 key/value 를 반환한다.
 * @param object
 * @param changedObject
 * @returns
 */
export function strippedUnchanged(object: Record<string, any>, changedObject: Record<string, any>) {
  return Object.fromEntries(Object.entries(changedObject).filter(([key, value]) => object[key] !== value));
}
