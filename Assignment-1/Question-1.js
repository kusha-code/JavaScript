//passing a function as a parameter to another function

function outerFunction(x) {
    alert(x);
}
function innerFunction(func) {
    func("Hello User!")
}
innerFunction(outerFunction)