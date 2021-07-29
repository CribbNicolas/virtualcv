const setTimes = (totalTime: number, textLength: number) => {
    const timeList: Array<number> = []
    const estimatedTime = Math.floor(totalTime / textLength)
    let time = 0
    for (let index = 0; index < textLength; index++) {
        time += estimatedTime
        timeList.push(time)
    }
    return timeList
}

export const typed = (elementHTML: HTMLElement | null, string: string, totalTime: number) => {
    if(elementHTML != null){   
        elementHTML.innerHTML = ''

        const times: Array<number> = setTimes(totalTime, string.length)
        for (let c = 0; c < string.length; c++) {
            setTimeout(() => {
                elementHTML.innerHTML += string.slice(c, c+1)
            }, times[c])
        }
  
    }
}
