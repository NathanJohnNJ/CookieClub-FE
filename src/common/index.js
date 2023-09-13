export const writeCookie = (key, value, days) => {
    let date = new Date()
    days = days || 365
    date.setDate(date.getDate() + days) 
    let cookie = document.cookie = key + "=" + value + ";  expires=" + date.toGMTString() + "; path=/"
    console.log("cookie: ", cookie)
    return cookie
}