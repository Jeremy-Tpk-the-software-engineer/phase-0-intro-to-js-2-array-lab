const cats= ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
    cats.push('Ralph')
}
function destructivelyPrependCat(name){
    cats.unshift('Bob')
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
    const newArray = []
    const cats = cats.concat(newArray)
    cats.push(name)
    return cats
}