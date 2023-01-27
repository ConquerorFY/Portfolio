import "../styles/YearSliderComponent.css";
import React from "react";

function YearSliderComponent() {
    const [year, setYear] = React.useState(2014);
    function handleOnChange(e) {
        const val = e.target.value;
        // console.log(val);
        setYear(val);
    };
    return (
        <div className="year-slider-container">
            <label className="start" htmlFor="year-slider">2014</label>
            <div className="tooltip">
                <input type="range" min="2014" max="2023" step="1" id="year-slider" onChange={handleOnChange} title={year} />
                <span className="tooltiptext">{year}</span>
            </div>
            <label className="end" htmlFor="year-slider">2023</label>
        </div>
    )
}

export default YearSliderComponent;