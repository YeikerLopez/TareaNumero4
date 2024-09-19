function realizarOperacion() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operacion = document.getElementById('operacion').value;
    let resultado = '';

    if (isNaN(num1) || isNaN(num2)) {
        resultado = 'Por favor, ingrese números válidos.';
    } else {
        switch (operacion) {
            case 'suma':
                resultado = `La suma es: ${num1 + num2}`;
                break;
            case 'resta':
                resultado = `La resta es: ${num1 - num2}`;
                break;
            case 'multiplicacion':
                resultado = `La multiplicación es: ${num1 * num2}`;
                break;
            case 'division':
                if (num2 !== 0) {
                    resultado = `La división es: ${num1 / num2}`;
                } else {
                    resultado = 'No se puede dividir entre 0.';
                }
                break;
            case 'modulo':
                if (num2 !== 0) {
                    resultado = `El módulo es: ${num1 % num2}`;
                } else {
                    resultado = 'No se puede calcular el módulo con divisor 0.';
                }
                break;
            default:
                resultado = 'Operación no válida.';
        }
    }

    document.getElementById('resultado').textContent = resultado;
}
