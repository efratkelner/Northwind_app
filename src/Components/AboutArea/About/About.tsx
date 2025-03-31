import { useTitle } from "../../../Utils/UseTitle";
import { Clock } from "../../SharedArea/Clock/Clock";
import Facebook from "../Facebook/Facebook";
import { LinkedIn } from "../LinkedIn/LinkedIn";
import { Song } from "../Song/Song";
import "./About.css";

function About(): JSX.Element {

    useTitle("Northwind About");

    const value = "Num: " +  Math.random();
    
    return (
        <div className="About">

            <LinkedIn />

            <Song />

            <Clock />

            <Facebook />

        </div>
    );
}

// Lazy loading demands an export default for the component:
export default About;
