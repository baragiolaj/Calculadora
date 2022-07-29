function calculate(operation) {
    let result = 0;

    let firstnumber = document.getElementById("firstnumber").value;
    let secondnumber = document.getElementById("secondnumber").value;

    firstnumber = Number(firstnumber);
    secondnumber = Number(secondnumber)

    document.getElementById("result").value = result;

    switch (operation) {
        case 'add':
            result = add(firstnumber, secondnumber);
            document.getElementById("result").value = result;
            break;

        case 'sub':
            result = sub(firstnumber, secondnumber);
            document.getElementById("result").value = result;
            break

        case 'div':
            if (secondnumber != 0) {
                result = div(firstnumber, secondnumber);
                document.getElementById("result").value = result;
            }
            else {
                    alert("no se puede dividir por 0");
            }
            break;

        case 'mul':
            result = mul(firstnumber, secondnumber);
            document.getElementById("result").value = result;
            break;

        case 'per':
            result = per(firstnumber, secondnumber);
            document.getElementById("result").value = result;
            break;

        case 'MAX':
            result = MAX(firstnumber, secondnumber);
            document.getElementById("result").value = result;
            break;

        case 'MIN':
            result = MIN(firstnumber, secondnumber);
            document.getElementById("result").value = result;
            break;

        case 'pow':
            result = pow(firstnumber, secondnumber);
            document.getElementById("result").value = result;
            break;

        case 'pro':
            result = pro(firstnumber, secondnumber);
            document.getElementById("result").value = result;
            break;

    }

}

function add(firstnumber, secondnumber) {
    return firstnumber + secondnumber;
}

function sub(firstnumber, secondnumber) {
    return firstnumber - secondnumber;
}

function div(firstnumber, secondnumber) {
    return firstnumber / secondnumber;
}

function mul(firstnumber, secondnumber) {
    return firstnumber * secondnumber;
}

function per(firstnumber, secondnumber) {
    return ((secondnumber / firstnumber) * 100);
}

function MAX(firstnumber, secondnumber) {
    return Math.max(firstnumber, secondnumber)
}

function MIN(firstnumber, secondnumber) {
    return Math.min(firstnumber, secondnumber)
}

function pot(firstnumber, secondnumber) {
    return Math.min(firstnumber, secondnumber)
}

function pow(firstnumber, secondnumber) {
    return Math.pow(firstnumber, secondnumber)
}

function pro(firstnumber, secondnumber) {
    return (firstnumber + secondnumber) / 2;
}