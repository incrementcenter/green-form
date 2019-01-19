var m = [[4, 98, 56], [8, 362, 23], [74, 44, 12]];

function countRowsSum(row) {
    var result = 0;
    for (var i = 0; i < row[2].length; i++) {
        result += row[2][i];
    }
    console.log(result);
}

//countRowsSum(m);

function countRowsSumArg(x, row) {
    var result = 0;
    for (var i = 0; i < x[row].length; i++) {
        result += x[row][i];
    }
    console.log(result);
}

//countRowsSumArg(m,1);

function countColumnsSum(x) {
    var result = 0;
    for (var i = 0; i < x.length; i++) {
        result += x[i][1];

    }
    console.log(result);
}

// countColumnsSum(m);

var shenq = [[2, 4, 3, 1222], [2, 2, 4, 1], [3, 2, 4, 4], [1, 1, 2, 3555]];

function arrSum(x) {
    var s = 0;
    for (var i = 0; i < x.length; i++) {
        s += x[i];
    }
    return s;
}

function compare(sh, x, y) {
    var h1 = arrSum(sh[x]);
    var h3 = arrSum(sh[y]);
    if (h1 > h3) {
        console.log("Hark1");
        return x;
    }
    console.log("Hark3");
    return y;
}

compare(shenq, 1, 3);