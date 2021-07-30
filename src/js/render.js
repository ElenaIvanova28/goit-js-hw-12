import listTemplate from '../tempates/list.hbs'
import countryTemplate from '../tempates/country.hbs'

const countryList = document.querySelector(".country-list")
const countryInfo = document.querySelector(".country-info")

function list(countries) {
    countryList.innerHTML = countries.map(listTemplate).join(" ")
}

function country(notUpdatedCountry) {
    const country = {
    ...notUpdatedCountry,
    languages: notUpdatedCountry.languages.map(l => l.name).join(", ")
    }
 
    countryList.innerHTML = countryTemplate(country)
    }

function clear() {
    countryList.innerHTML = ''
    countryInfo.innerHTML = ''
}

export default {
    list,
    country,
    clear
}