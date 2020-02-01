
function a() {
    var b = { prop: 5 }
    c()

    function c() {
        b = 6
    }
}

console.log(b)

a()