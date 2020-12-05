import DeviceInfo from 'react-native-device-info';
import Moment from "moment";

const device = DeviceInfo.getDeviceType();

export const today = Moment().startOf('day').utcOffset("+05:30").format();
export const defaultDate = Moment(new Date("1900-01-01")).startOf('day').utcOffset("+5:30").format();
export const maximumDate = Moment().startOf('day').utcOffset("+5:30").add(364, "days").format();

export function dateformat(value, format) {
    var date = Moment(value);
    switch (format) {
        case 'DD':
            return date.format("DD");
        case 'MMM':
            return date.format("MMM");
        case 'YY':
            return date.format("YY")
        default:
            break;
    }

}


export function setImageUrl(imgUrl, mobilewidth, mobileheight, tabletwidth, tabletheight) {

    const width = (device === "Handset") ? mobilewidth : tabletwidth;
    const height = (device === "Handset") ? mobileheight : tabletheight;

    if (imgUrl === "" || imgUrl === undefined || imgUrl === null) {
        return "../../assets/images/noimagefound.png"
    }
    else if (imgUrl.includes("images.travelxp.com")) {

        return imgUrl + "?tr=w-" + width + ",h-" + height
    }
    else {
        return imgUrl
    }
}

export function capitalize(val) {
    if (typeof val !== 'string') return ''
    return val.charAt(0).toUpperCase() + val.slice(1)
}

export function sentenceCase(str) {

    if ((str === null) || (str === '') || str === undefined) {
        return str;
    } else {
        str = str.toString();
    }
    return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });

}

export function timeFormatHM(time) {
    var timeHM = time.split(":");
    return timeHM[0] + "h " + timeHM[1] + "m"
}


export function appName() {
    return "React Native App"
}

export function applicationversion() {
    return Platform.OS === "android" ? 109 : "1.5.0"
}

export function serviceHeader() {
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + AuthConext.accessToken,
        'dev': Platform.OS === "android" ? "2" : "3",
        'said': '1'
    }
}

export const Urls = {
    //development or staging
    // serviceUrl: "https://devapi.travelxp.com",
    // webUrl: "https://dev.travelxp.com",
    // juspaypUrl: "https://sandbox.juspay.in",
    // juspayenviornment: 'sandbox',
    // juspayendurl: ['https://dev.travelxp.com/noindex/payment'],
    // juspay_return_url: 'https://dev.travelxp.com/noindex/payment',
    // web_engage_scheme: 'https://dev.travelxp.com/',

    serviceUrl: "https://api.travelxp.com",
    webUrl: "https://www.travelxp.com",
    juspaypUrl: "https://api.juspay.in",
    juspayenviornment: 'prod',
    juspayendurl: ['https://www.travelxp.com/noindex/payment'],
    juspay_return_url: 'https://www.travelxp.com/noindex/payment',
    web_engage_scheme: 'https://www.travelxp.com/',
    imageUrl: "https://images.travelxp.com/",
    mapStyle: 'mapbox://styles/prashantchothani/ck16c46zh059c1dntsnxiun5m'

}

// auto read otp android development hash code : PAVTnfMsBhV 
//auto read otp android release has code : iqOvkhNsc7c