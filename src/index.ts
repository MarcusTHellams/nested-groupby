import groupBy from 'lodash.groupby';
import mapValues from 'lodash.mapvalues';

export default function nestedGroupBy<Result = unknown>(
  seq: object[],
  keys: string[]
): Result {
  if (!keys.length) {
    return (seq as unknown) as Result;
  }

  const first = keys[0];
  const rest = keys.slice(1);
  return mapValues(groupBy(seq, first), function(value) {
    return nestedGroupBy(value, rest);
  }) as Result;
}

