fantabulousBirthday = (S) => {
    corner = nextHighestSquareRoot(S)
    idx = (corner ** 2) - S + 1
    return corner % 2 === 0 ? evenSquareResult(corner, idx) : oddSquareResult(corner, idx)
}
evenSquareResult = (corner, idx) => {
    return idx < corner ? [corner, idx] : [(corner * 2) - idx, corner]
}
oddSquareResult = (corner, idx) => {
    return idx <= corner ? [idx, corner] : [corner, (corner * 2 - idx)]
}

nextHighestSquareRoot = (n) => {
    return (Math.sqrt(n) % 2 === 0) ? Math.sqrt(n) : Math.ceil(Math.sqrt(n))
}

