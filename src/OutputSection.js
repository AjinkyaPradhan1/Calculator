import React from "react";
import './OutputSection.css'

const OutputSection = ({text,result}) => {
    return(
        <div className="ot_main">
            <div className="ot_row1">{result}</div>
            <div className="ot_row2">{text}</div>
        </div>
    );
}

export default OutputSection;