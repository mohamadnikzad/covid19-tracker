import axios from 'axios'
const url = 'https://covid19.mathdro.id/api'

export const fetchData = async (country) => {

    let changeAbleUrl = url
    if (country) {
        changeAbleUrl = `${url}/countries/${country}`
    }
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeAbleUrl)
        return { confirmed, recovered, deaths, lastUpdate }
    } catch (err) {
        console.log(err)
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`)

        const modifiedData = data.map(dailydata => ({
            confirmed: dailydata.confirmed.total,
            deaths: dailydata.deaths.total,
            date: dailydata.reportDate,
        }))
        return modifiedData
    } catch (error) {
        console.log(error)
    }
}

export const fetchCountryData = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`)
        return countries
    } catch (error) {
        console.log(error);
    }
}