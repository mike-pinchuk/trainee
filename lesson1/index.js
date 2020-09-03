const numbers = [1, 0, -4];

let quadraticEquation = (arr) => {
    let [a, b, c] = arr;
    let descreminant = b * b - 4 * a * c;

    if (descreminant < 0) {
        return `Descreminant is ${descreminant}, no quadratic equation`;
    } else if (descreminant == 0) {
        let x = `Descreminant is ${descreminant}, x: ${b / 2 * a}`;
        return x;
    } else if (descreminant > 0) {
        let x1 = `Descreminant is ${descreminant}, x1: ${(b - Math.sqrt(descreminant)) / 2 * a} and x2: ${(b + Math.sqrt(descreminant)) / 2 * a}`
        return x1;
    }
};
console.log(quadraticEquation(numbers));


