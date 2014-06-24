/**
 * Created by  on 23/06/2014.
 */
function summarise(prevVal, currVal, index, array){
    return prevVal + currVal;
}

function reduce( listArr, fn, initial){
    return listArr.reduce(fn, initial);
}


var list = [1,2,3,4,5];

var result = reduce(list, summarise, 0 );

console.log(result);