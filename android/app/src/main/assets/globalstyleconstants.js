import { StyleSheet, Dimensions } from "react-native";

const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;
const ratioX = Width < 375 ? (Width < 320 ? 0.75 : 0.875) : 1;
const ratioY = Height < 568 ? (Height < 480 ? 0.75 : 0.875) : 1;
const base_unit = 14;
const unit = base_unit * ratioX;
function em(value) {
    return unit * value;
}

const { scale, width } = Dimensions.get('window');
let iconSize = 35;
let resultFontSize = 24;
let weekTextFontSize = 16;
let slashLength = 80;
if (width < 350) {
    resultFontSize = 20;
    weekTextFontSize = 14;
    iconSize = 20;
    slashLength = 70;
}


function elevationShadowStyle(elevation) {
    return {
        elevation,
        shadowColor: colors.title,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.15,
        shadowRadius: 15
    };
}

export const fontSize = {
    extrasmallest: em(0.55),
    smallest: em(0.7),
    smaller: em(0.8),
    small: em(0.9),
    normal: em(1),
    medium: em(1.1),
    large: em(1.2),
    larger: em(1.3),
    largest: em(1.4), //titlefont is largest
    extralarge: em(1.6),
    extralargest: em(2),
    superlargest: em(2.5)
}


export const colors = {
    white: '#fff',
    black: '#000',
    red: '#D9243D',
    highlight: '#D9233C',
    pink: '#FCF8F8',
    title: '#1D3554',
    subtitle: '#949DB2',
    subtitleOpacity:'rgba(148, 157, 178, 0.5)',
    background: '#F4F8FD',
    blackgradient: 'rgba(0, 0, 0, 0.80)'
    // your colors
}

export const font = {
    regular: 'Montserrat-Regular',
    light: 'Montserrat-Light',
    bold: 'Montserrat-Bold',
    semibold: 'Montserrat-SemiBold',
    extrabold: 'Montserrat-ExtraBold',
}

export const globalstyles = StyleSheet.create({
    cardTitle: {

        fontSize: fontSize.large,
        fontFamily: font.bold,
        color: colors.subtitle,
        marginTop: 10,
        marginLeft: 10,

    },
    title: {
        fontFamily: font.regular,
        fontSize: fontSize.largest,
        color: colors.black
    },
    shadowContainer: {
        ...elevationShadowStyle(7),
        backgroundColor: 'white'
        // shadowColor : 'rgba(0, 0, 0, 0.11)',
        // elevation: Platform.OS === 'ios' ? 10 : 2,
        // shadowOffset: { width: 0, height: 4 },
        // shadowOpacity: 0.1,
        // shadowRadius : 2,
    },
})
