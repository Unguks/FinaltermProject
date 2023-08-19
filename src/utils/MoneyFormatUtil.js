function moneyFormat(amount, decimalCount = 2, decimalSeparator = ',', thousandsSeparator = '.') {
    try {
        decimalCount = Math.abs(decimalCount);
        const negativeSign = amount < 0 ? '-' : '';

        let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
        let j = (i.length > 3) ? i.length % 3 : 0;

        return negativeSign + (j ? i.substring(0, j) + thousandsSeparator : '') +
            i.substring(j).replace(/(\d{3})(?=\d)/g, '$1' + thousandsSeparator) +
            (decimalCount ? decimalSeparator + Math.abs(amount - i).toFixed(decimalCount).slice(2) : '');
    } catch (error) {
        console.error('Error formatting money:', error);
        return '';
    }
}

export default moneyFormat;