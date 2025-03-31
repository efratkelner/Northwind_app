import { useContext } from "react";
import "./LinkedIn.css";
import { MiniThemeContext } from "../../../Utils/MiniTheme";

export function LinkedIn(): JSX.Element {

    const theme = useContext(MiniThemeContext);

    return (
        <div className="LinkedIn" style={theme}>
			<p>LinkedIn Page: https://www.linkedin.com/northwind</p>
        </div>
    );
}
