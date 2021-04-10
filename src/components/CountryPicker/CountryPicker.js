import { FormControl, NativeSelect } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { fetchCountryData } from '../../api'
import './CountryPicker.css'
const CountryPicker = ({ onChangeCountry }) => {
    const [countries, setCountries] = useState()

    useEffect(() => {
        const fetchCtry = async () => {
            setCountries(await fetchCountryData())
        }
        fetchCtry()
    }, [setCountries])
    return (
        <FormControl>
            <NativeSelect variant='filled' color='primary' aria-label='کشور مورد نظر خود را انتخاب کنید' onChange={(e) => onChangeCountry(e.target.value)}>
                <option value=''>Golbal</option>
                {countries?.map(country => <option key={country.name} value={country.name}>{country.name}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker
