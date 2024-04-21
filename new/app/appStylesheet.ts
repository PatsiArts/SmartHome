// TODO 1. extract those function and styling structure to common place, ie FONT_SIZE, THEME_COLORS, COMPONENTS_STYLE_BUILDER                                                                                                               0
// TODO 2. stylesheet should use setter to set styles
// TODO 3. stylesheet should be loaded when app is starting up
// TODO 4. test performance

import { setFontSizes, setStyleBuilders, setThemeColors } from "@/lib/appStyleApi";

setFontSizes({
    small: {
        xxs: 3,
        xs: 4,
        s: 6,
        m: 8,
        l: 10,
        xl: 12,
        xxl: 15
    },
    normal: {
        xxs: 8,
        xs: 10,
        s: 12,
        m: 15,
        l: 18,
        xl: 21,
        xxl: 25
    }
});

export const COLORS = {
    licorice: "#1a1110",
    bistre: "#3c2a21",
    willowIII: "#e4e5ca",
    durianWhite: "#e6d0ab",
    delicateUmber: "#f0ece3",
    naturalLinen: "#DFD3C3",
    smokyBlue: "#596E79",
    nomadicDesert: "#C7B198"
}

setThemeColors({
    darkTheme: {
        primaryBackground: COLORS.licorice,
        secondaryBackground: COLORS.bistre,
        primaryColor: COLORS.willowIII,
        secondaryColor: COLORS.durianWhite,
        primaryTextColor: COLORS.willowIII,
        secondaryTextColor: COLORS.durianWhite
    },
    lightTheme: {
        primaryBackground: COLORS.delicateUmber,
        secondaryBackground: COLORS.naturalLinen,
        primaryColor: COLORS.smokyBlue,
        secondaryColor: COLORS.nomadicDesert,
        primaryTextColor: COLORS.smokyBlue,
        secondaryTextColor: COLORS.nomadicDesert
    }
});

setStyleBuilders({
    baseContainer: (config) => {
        return {
            flex: 1,
        };
    },
    baseColumn: (config) => {
        return {
            flexDirection: 'column',
            padding: 10,
            flex: 1,
        };
    },
    baseRow: (config) => {
        return {
            flexDirection: 'row',
            padding: 10,
            flexWrap: "wrap"
        };
    },
    primaryText: (config) => {
        return {
            color: config.themeColorPalette.primaryTextColor
        };
    },
    secondaryText: (config) => {
        return {
            color: config.themeColorPalette.secondaryTextColor
        };
    },
    baseParagraph: (config) => {
        return {
            fontSize: config.fontSize.s,
            flex: 1,
            padding: 10
        };
    },
    baseMiddleText: (config) => {
        return {
            fontSize: config.fontSize.m
        };
    },
    baseLargeText: (config) => {
        return {
            fontSize: config.fontSize.l
        };
    },
    baseButton: (config) => {
        return {
            backgroundColor: config.themeColorPalette.secondaryBackground,
            padding: 7
        };
    },
    baseLink: (config) => {
        return {
            color: config.themeColorPalette.secondaryTextColor,
            textDecorationLine: "underline"
        };
    },
    baseNavBar: (config) => {
        return {
            backgroundColor: config.themeColorPalette.secondaryBackground,
            justifyContent: "space-between",
        };
    },
    baseMenuBar: (config) => {
        return {
            backgroundColor: config.themeColorPalette.secondaryBackground,
            justifyContent: "space-evenly",
        };
    },
    baseImg: (config) => {
        return {
            width: 50,
            height: 50,
        }
    },
    basePage: (config) => {
        return {
            backgroundColor: config.themeColorPalette.primaryBackground,
        }
    },
    pageHeaderRow: (config) => {
        return {
            padding: 0,
            gap: 0,
            margin: 0
        }
    },
});
