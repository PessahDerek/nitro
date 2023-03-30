
export function comma(price) {
    let [integerPart, decimalPart] = price.toFixed(2).toString().split('.');
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return `${integerPart}.${decimalPart}`;
  }