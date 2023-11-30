export const separateThousandsWithCommas = (number: string): string => {
  let [wholePart, fractionalPart] = number.split('.');
  const isNegativeNumber = wholePart.startsWith('-');
  if (isNegativeNumber) {
    wholePart = wholePart.slice(1);
  }
  const reversedNumber = wholePart.split('').reverse().join('');
  const separatedNumber = reversedNumber.replace(/\d\d\d/g, (match: any) => `${match},`).split('').reverse().join('').replace(/^,/g, '');

  return (isNegativeNumber ? '-' : '') + (number.endsWith('.') || fractionalPart ? `${separatedNumber}.${fractionalPart || ''}` : separatedNumber);
}