function fantabulousBirthday(S){
    corner = nextHighestSquareRoot(S)
    idx = (corner ** 2) - S + 1
    if (corner % 2 === 0){
        if (idx < corner) {
            return [corner, idx]
        } else {
            return [(corner * 2) - idx, corner]
        }
    } else {
        if (idx <= corner) {
            return [idx, corner]
        } else {
            return [corner, (corner * 2 - idx)]
        }

    }
}

nextHighestSquareRoot = (n) => {
    return (Math.sqrt(n) % 2 === 0) ? Math.sqrt(n) : Math.ceil(Math.sqrt(n))
}

console.log(fantabulousBirthday(1))
