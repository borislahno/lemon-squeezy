export const compose = <Input, Output>(...functions: any[]) => (initialValue: Input):Output =>
  functions.reduceRight((result: any, func) => func(result), initialValue);