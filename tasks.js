
var m = [ [4,98,56], [8,362,23], [74,44,12]];

function countRowsSum () {
    var result = 0;
        for(var i = 0; i < m.length; i++){
            result += m[2][i];
                 }
        console.log(result);
}
//countRowsSum();

function countRowsSumArg (row) {
    var result = 0;
    for(var i = 0; i < m[row].length; i++){
        result += m[row][i];
    }
    console.log(result);
}
//countRowsSumArg(1);

function countColumnsSum () {
    var result = 0;
        for(var i = 0; i < m.length; i++){
            result += m[i][1];

        }
        console.log(result);
}
//countColumnsSum();

var shenq = [ [ 2 , 4 , 3 , 1 ], [ 2 , 2 , 4 , 1 ], [ 3 , 2 , 4 , 4 ],  [ 1 , 1 , 2 , 3 ] ];
function building () {
    var result = 0;
    for(var j = 0; j < shenq.length; j++) {
        var maxFloor = 0;
        for(var i = 0; i < shenq[j].length; i++){
            result += shenq[j][i];
if(result > maxFloor) {
    maxFloor = result;
}
        }
        console.log(maxFloor);
    }

}
building();