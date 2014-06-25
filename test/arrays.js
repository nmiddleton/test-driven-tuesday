/**
 * Created by u8013621 on 20/06/2014.
 */


'use strict';
var gList = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
];

var guests = [
    { id: 2 },
    { id: 1 }
];


//console.log('By Guests');
//guests.every(function (GuestItem) {
//    var onlist = gList.some( function(ListItem) {
//        console.log('GuestItem:' + GuestItem.id + '  ListItem: ' + ListItem.id);
//
//        return GuestItem.id === ListItem.id;
//    });
//    if (onlist){
//        console.log('Found Guest ' + GuestItem.id + ' on list')
//    }else{
//        console.log(' Guest not found' + GuestItem.id + ' on list')
//    }
//    return onlist;
//});

console.log('By Bouncer');
var bouncer = gList.some(function (ListItem) {
    var onlist = guests.every( function(GuestItem) {
        console.log('GuestItem:' + GuestItem.id + '  ListItem: ' + ListItem.id);
        return GuestItem.id === ListItem.id;
    });
    console.log('every returned: ' + onlist)
    return onlist;
});

if (bouncer){
    console.log('All guests are on the list')
}else{
    console.log('someguests not on the list')
}

console.log("reducer");
var inventory = [ 'apple', 'banana', 'orange', 'orange', 'orange', 'banana' ];
var myobj = new Object();
//inventory.reduce(function (fruit_tot, elem, index, array) {
//    if (myobj.hasOwnProperty(elem)){
//        myobj[elem] = myobj[elem] + 1;
//    }else{
//        myobj[elem] =  1;
//    }
//},0);
var cleanarray = inventory.uniq();
console.log(cleanarray);
// Create the initial properties
inventory.map(function(myprop){return myobj[myprop] = 0})

for ( var prop in myobj ) {
   console.log( "Object: " + prop  + "=" + myobj[prop]);
}
