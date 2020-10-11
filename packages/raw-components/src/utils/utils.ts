export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

/**
 * Check if input parameter is a string
 */
export const isString = (input: any): boolean => {
  return typeof input === 'string';
};
