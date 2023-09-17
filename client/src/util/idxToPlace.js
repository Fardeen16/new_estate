export const arrPlace = [
    'Andheri',
    'Bandra',
    'Chembur',
    'Parel',
    'Vashi'
]

export const placeToIdx = (place) => {
    return arrPlace.findIndex((place) => place.toLowerCase() === place.toLowerCase())
}

export const idxToPlace = (idx) => {
    return (arrPlace.filter((_, index) => index === Number(idx)))[0]
}