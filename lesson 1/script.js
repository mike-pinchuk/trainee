window.addEventListener('DOMContentLoaded', () => {
    let submit = document.getElementById('submit'),
        text1 = document.getElementById('text1'),
        text2 = document.getElementById('text2'),
        text3 = document.getElementById('text3'),
        result = document.getElementById('result');



    submit.addEventListener('click', () => {
        result.textContent = `Discriminant is ${descreminant(text1.value, text2.value, text3.value)} and 
        Quadratic Equation is ${quadraticEquation(descreminant(text1.value, text2.value, text3.value))}`;
        console.log(quadraticEquation(descreminant(text1.value, text2.value, text3.value)))
    });


    function descreminant(a, b, c) {
        return b * b - 4 * a * c
    }

    function quadraticEquation(func) {
        if (func < 0) {
            return `no quadratic equation`;
        } else if (func == 0) {
            let x = `x: ${-text2.value / 2 * text1.value}`;
            return x;
        } else if (func > 0) {
            let x1 = `x1: ${(-text2.value - Math.sqrt(func)) / 2 * text1.value} and x2: ${(-text2.value + Math.sqrt(func)) / 2 * text1.value}`
            // let x2 = (-text2.value + Math.sqrt(func)) / 2 * text1.value;
            return x1;
        }
    };

});

