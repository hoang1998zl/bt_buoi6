// Câu 1
function cau1() {
    var tong = 0;

    for (a = 1; a <= 141; a++) {
        tong += a;
    }
    console.log(tong);

    document.getElementById("ketQuaCau1").innerHTML = tong;
}

// end cau 1

// cau 2
function cau2() {
    var x = document.getElementById("nhapSoX").value * 1;
    var n = document.getElementById("nhapSoN").value * 1;

    var luyThua = 1;
    var S = 0;

    for (var i = 1; i <= n; i++) {
        luyThua = luyThua * n;
        S += luyThua;
    }

    console.log(luyThua);
    console.log(S);

    document.getElementById("ketQuaCau2").innerHTML = S;
}
// end cau 2

// cau 3

function cau3() {
    var n = document.querySelector("#cau3 .nhapSoN").value * 1;

    var S = 1;
    for (var i = 1; i <= n; i++) {
        S = S * i;
    }
    console.log(S);

    document.getElementById("ketQuaCau3").innerHTML = S;
}

// end cau 3

// cau 4

function cau4() {

    var bienDiv = document.querySelectorAll("#ketQuaCau4 .div");

    for (var i = 0; i <= 10; i++) {
        if (i % 2 == 0) {
            bienDiv[i].style.background = "red";
        } else {
            bienDiv[i].style.background = "blue";
        }
    }
}

// end cau 4

// cau 5
function cau5() {
    var giaTiInputCau5 = document.querySelector("#cau5 .inputCau5").value * 1;
    var text = '';

    for (var n = 2; n <= giaTiInputCau5; n++) {
        if (n != 2 && n >= 3 && n % 2 != 0) {
            console.log(n);
            text = text + n + `<br>`;
        }
    }
    document.getElementById("ketQuaCau5").innerHTML = text; 
}
// end cau 5