"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirPort = void 0;
var fs_1 = require("fs");
var data = JSON.parse((0, fs_1.readFileSync)('./airport-city.txt', 'utf-8'));
var AirPlane = /** @class */ (function () {
    function AirPlane() {
    }
    AirPlane.prototype.getNoOfAirports = function (no) {
        return data.slice(0, Number(no));
    };
    AirPlane.prototype.getAirportByCountry = function (country) {
        return data.filter(function (item) { return item.country && item.country.toLowerCase() === country.toLowerCase(); });
    };
    AirPlane.prototype.getAirportByName = function (name) {
        return data.filter(function (item) { return item.name && item.name.toLowerCase().includes(name.toLowerCase()); });
    };
    AirPlane.prototype.getAirportByCity = function (city) {
        return data.filter(function (item) { return item.city && item.city.toLowerCase().includes(city.toLowerCase()); });
    };
    AirPlane.prototype.getAirportByState = function (state) {
        return data.filter(function (item) { return item.state && item.state.toLowerCase().includes(state.toLowerCase()); });
    };
    AirPlane.prototype.getAirportByCode = function (code) {
        return data.filter(function (item) { return item.code && item.code.toLowerCase().includes(code.toLowerCase()); });
    };
    AirPlane.prototype.minimumRunWayLengthOf = function (length) {
        return data.filter(function (item) { return item.runway_length && Number(item.runway_length) >= Number(length); });
    };
    AirPlane.prototype.countAirportsByCountry = function (country) {
        return data.filter(function (airport) { return airport.country && airport.country.toLowerCase() === country.toLowerCase(); }).length;
    };
    AirPlane.prototype.getAirportByICAO = function (icao) {
        return data.find(function (airport) { return airport.icao && airport.icao.toLowerCase() === icao.toLowerCase(); });
    };
    AirPlane.prototype.getAllCountriesWithAirport = function () {
        return Array.from(new Set(data.map(function (airport) { return airport.country; })));
    };
    AirPlane.prototype.directAirports = function (direct) {
        return data.filter(function (item) { return direct ? item.direct_flights !== "0" : item.direct_flights === "0"; });
    };
    AirPlane.prototype.getAllAirports = function () {
        return data;
    };
    return AirPlane;
}());
exports.AirPort = new AirPlane();
