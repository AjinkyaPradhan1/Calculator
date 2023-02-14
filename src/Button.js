import React from "react";
import './Button.css'

function Button(){
    return(
        <div className="bt_main">
            <div className="bt_col1">
                <div className="bt_col1_row1">+</div>
                <div className="bt_col1_row2">7</div>
                <div className="bt_col1_row3">4</div>
                <div className="bt_col1_row4">1</div>
                <div className="bt_col1_row5">0</div>
            </div>

            <div className="bt_col2">
                <div className="bt_col1_row1">-</div>
                <div className="bt_col1_row2">8</div>
                <div className="bt_col1_row3">5</div>
                <div className="bt_col1_row4">2</div>
                <div className="bt_col1_row5">.</div>
            </div>

            <div className="bt_col3">
                <div className="bt_col1_row1">x</div>
                <div className="bt_col1_row2">9</div>
                <div className="bt_col1_row3">6</div>
                <div className="bt_col1_row4">3</div>
                <div className="btClear">AC</div>
            </div>

            <div className="bt_col4">
                <button className="bt_col1_row5">/</button>
                <button className="btEnter">=</button>
            </div>           
        </div>
    );
}

export default Button;