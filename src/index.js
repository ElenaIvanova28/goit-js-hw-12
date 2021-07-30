import './css/styles.css';
import { fetchCountries } from "./js/fetchCountries";
import render from "./js/render";
import notificate from "./js/notificate";

var debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;

const input = document.querySelector("#search-box")
input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(evt) {
    let text = evt.target.value.trim()

    if (text.length != 0) {
        fetchCountries(text).then(
            countries => {
                if (countries.length === 1) {
                    render.clear()
                    render.country(...countries)
                };
                if (countries.length > 1 && countries.length < 11) {
                    render.list(countries)
                };
                if (countries.length > 10) {
                    render.clear()
                    notificate.overTen()
                };

            }).catch(err => {
                render.clear()
                notificate.error()
            })
    } else {
        render.clear()
    }
}