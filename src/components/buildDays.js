

export default function buildDays(date){

    const startDay = date.clone().startOf("month").startOf("week")
    const endDay = date.clone().endOf("month").endOf("week")
    const day = startDay.clone().subtract(1,'day')
    let boardArr = []

    while(day.isBefore(endDay)){
        boardArr.push(day.add(1, 'day').clone())
        
    }

    return boardArr
}