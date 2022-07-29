function calculate(operation) {
    let result = 0;

    let firstnumber = document.getElementById("firstnumber").value;
    let secondnumber = document.getElementById("secondnumber").value;

    firstnumber = Number(firstnumber);
    secondnumber = Number(secondnumber)

    switch (operation) {
        case 'add':
            alert(result = add(firstnumber, secondnumber));
            break;

        case 'sub':
            alert(result = sub(firstnumber, secondnumber));
            break

        case 'div':
            if (secondnumber == 0) {
                alert("no se puede dividir")
            }
            else if
                (alert(result = div(firstnumber, secondnumber)));
            break;

        case 'mul':
            alert(result = mul(firstnumber, secondnumber));
            break;

        case 'per':
            alert(result = per(firstnumber, secondnumber));
            break;

        case 'MAX':
            alert(result = MAX(firstnumber, secondnumber));
            break;

        case 'MIN':
            alert(result = MIN(firstnumber, secondnumber));
            break;

        case 'pow':
            alert(result = pow(firstnumber, secondnumber));
            break;

        case 'pro':
            alert(result = pro(firstnumber, secondnumber));
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