import { ThemeProvider } from "styled-components";
import { connect } from "react-redux";
import { RootState } from "../../store/root";
import { ThemeInterface } from "../util/helpers";
import { getTheme } from "../theme.selector";
import { classHue } from "../../wow/class";

export const defaultTheme: ThemeInterface = {
    mode: "dark",
    primaryHue: 220,
    secondaryHue: classHue.hunter,
    buttonHues: {
        cta: classHue.warlock
    },

    gridSpan: 0.375 // 6px
};

const mapStateToProps = (state: RootState) => ({
    theme: getTheme(state)
});

export const ConnectedTheme = connect(mapStateToProps)(ThemeProvider);
export { ConnectedTheme as default };
