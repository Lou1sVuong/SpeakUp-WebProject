import React from "react";
import Score1 from "../../../Assets/Svg/ScoreSvg/star1.svg";
import Score2 from "../../../Assets/Svg/ScoreSvg/star2.svg";
import Score3 from "../../../Assets/Svg/ScoreSvg/star3.svg";
import Score4 from "../../../Assets/Svg/ScoreSvg/star4.svg";
import Score5 from "../../../Assets/Svg/ScoreSvg/star5.svg";

function Scrore({ score }) {
    if (!score) {
        return <img src={Score1} alt="" />;
    }

    switch (score) {
        case 1:
            return <img src={Score1} alt="" />;
        case 2:
            return <img src={Score2} alt="" />;
        case 3:
            return <img src={Score3} alt="" />;
        case 4:
            return <img src={Score4} alt="" />;
        case 5:
            return <img src={Score5} alt="" />;
        default:
            return <img src={Score1} alt="" />;
    }
}

export default Scrore;
