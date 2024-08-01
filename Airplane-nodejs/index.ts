import { readFileSync } from 'fs';
 
type IAirPorts = {
    code: string,
    lat: string,
    lon: string,
    name: string,
    city: string,
    state: string,
    country: string,
    woeid: string,
    tz: string,
    phone: string,
    type: string,
    email: string,
    url: string,
    runway_length: string,
    elev: string,
    icao: string,
    direct_flights: string,
    carriers: string
}

const data: IAirPorts[] = JSON.parse(readFileSync('./airport-city.txt', 'utf-8'));

class AirPlane {

    getNoOfAirports(no: number | string) {
        return data.slice(0, Number(no));
    }

    getAirportByCountry(country: string) {
        return data.filter(item => item.country && item.country.toLowerCase() === country.toLowerCase());
    }

    getAirportByName(name: string) {
        return data.filter(item => item.name && item.name.toLowerCase().includes(name.toLowerCase()));
    }

    getAirportByCity(city: string) {
        return data.filter(item => item.city && item.city.toLowerCase().includes(city.toLowerCase()));
    }

    getAirportByState(state: string) {
        return data.filter(item => item.state && item.state.toLowerCase().includes(state.toLowerCase()));
    }

    getAirportByCode(code: string) {
        return data.filter(item => item.code && item.code.toLowerCase().includes(code.toLowerCase()));
    }

    minimumRunWayLengthOf(length: string | number) {
        return data.filter(item => item.runway_length && Number(item.runway_length) >= Number(length));
    }

    countAirportsByCountry(country: string): number {
        return data.filter(airport => airport.country && airport.country.toLowerCase() === country.toLowerCase()).length;
    }

    getAirportByICAO(icao: string): IAirPorts | undefined {
        return data.find(airport => airport.icao && airport.icao.toLowerCase() === icao.toLowerCase());
    }

    getAllCountriesWithAirport(): string[] {
        return Array.from(new Set(data.map(airport => airport.country)));
    }

    directAirports(direct:boolean) {
        return data.filter(item => direct ? item.direct_flights !== "0" : item.direct_flights === "0")
    }

    getAllAirports() {
        return data;
    }
}

export const AirPort = new AirPlane();


