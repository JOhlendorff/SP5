let names = ["Lars", "Jan"  , "Bo", "Peter", "Frederik"];

function checkA(name){
    return name.includes("a");
}

function myFilter(array, checkA){
    let names2=[];
    for (let index = 0; index < array.length; index++) {
        if (checkA(array[index])) {
            names2.push(array[index]);
        }
        
    }
    return names2;

}

function mapFunction2(number){
    switch(number){
        case 1:
            number = 4;
        break;
        case 3:
            number = 8;
        break;
        case 5:
            number = 15;
        break;
        case 10:
            number = 21;
        break;
    }
    return number;
}

function firstToLower(name){
    return name.toLowerCase();
}

function myMap(array, firstToLower){
    let names2=[];
    for (let index = 0; index < array.length; index++) {
            names2.push(firstToLower(array[index]));
    }
    return names2;
}
let namesWithA = names.filter(checkA);
let namesReversed = names.map(s => s.split)
let myFilterNames = myFilter(names, checkA);
let mymapnames = myMap(names, firstToLower)
let numbers =[1, 3, 5, 10, 11];
let mappedNumbers = numbers.map(mapFunction2);
console.log(namesWithA);
console.log(namesReversed);
console.log(myFilterNames);
console.log(mymapnames);
console.log(mappedNumbers);