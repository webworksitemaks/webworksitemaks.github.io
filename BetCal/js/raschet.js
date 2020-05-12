let button = document.getElementById('raschet');
let modal = document.getElementById('modal');
let span = document.getElementsByClassName("close")[0];

button.onclick = function() {
    modal.style.display = "block";
    let footname = document.getElementById('event').value;
    let foottotal1 = document.getElementById('total1').value;
    let result1 = (1 / foottotal1) * 100;

    let footdraw = document.getElementById('draw').value;
    let result2 = (1 / footdraw) * 100;

    let foottotal2 = document.getElementById('total2').value;
    let result3 = (1 / foottotal2) * 100;

    let select1 = document.getElementById('sel1').value;
    let select2 = document.getElementById('sel2').value;

    if (select1 > select2) {
        result1 += 15;
    } else if (select2 > select1) {
        result3 += 15;
    } else if (select1 == select2) {
        result2 += 5;
        result1 += 5;
    } else if (select1 == "Больше") {
        result1 += 20;
    } else if (select2 == "Больше") {
        result2 += 20;
    }



    let maxResult = Math.max(result1, result2, result3);
    let res;
    let sum = document.getElementById('sum').value;
    //alert(parseFloat(maxResult).toFixed(2));
    if (maxResult == result1) {
        res = "Победа 1 с вероятностью " + Math.round(result1) + " % и" + " коэффициентом: " + foottotal1;
        sum *= foottotal1;
    } else if (maxResult == result2) {
        res = "Ничья с вероятностью " + Math.round(result2) + " % и" + " коэффициентом: " + footdraw;
        sum *= footdraw;
    } else if (maxResult == result3) {
        res = "Победа 2 с вероятностью " + Math.round(result3) + " % и" + " коэффициентом: " + foottotal2;
        sum *= foottotal2;
    }

    let modal_res = document.getElementById('modal_res').value = res;
    let modal_sum = document.getElementById('modal_sum').value = sum;
}

span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
