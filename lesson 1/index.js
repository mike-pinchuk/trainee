const numbers = [1, 0, -4];

    function quadraticEquation(...args) {
        let descreminant = args[0][1] * args[0][1] - 4 * args[0][0] * args[0][2];
       
        if (descreminant < 0) {
            return `Descreminant is ${descreminant}, no quadratic equation`;
        } else if (descreminant == 0) {
            let x = `Descreminant is ${descreminant}, x: ${args[0][1] / 2 * args[0][0]}`;
            return x;
        } else if (descreminant > 0) {
            let x1 = `Descreminant is ${descreminant}, x1: ${(args[0][1] - Math.sqrt(descreminant)) / 2 * args[0][0]} and x2: ${(args[0][1] + Math.sqrt(descreminant)) / 2 * args[0][0]}`
            // let x2 = (-text2.value + Math.sqrt(func)) / 2 * text1.value;
            return x1;
        }
    };
    console.log(quadraticEquation(numbers));
    

