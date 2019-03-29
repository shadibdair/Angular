let obj: any = {
    "name": "Bob",
    "age": 4
};


console.log("---------------for-in loop--------------");

for (let i3 in obj) {
    console.log(`index ${i3}`);
}


console.log("---------------for-of loop--------------");

for (let i4 of obj) {
    console.log(`index ${i4}`);
}


/*
OUTPUT:
__________________________________

---------------for-in loop--------------
index name
index age
---------------for-of loop--------------

*/