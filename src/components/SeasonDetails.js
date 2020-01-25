// eslint-disable-next-line
import SeasonDetailes from '../style/SeasonDetailes.css';
import React from 'react';
const seasonConfig = {
    winter: {
        text: 'burr it is cold',
        iconName: 'snowflake',
    },
    summer: {
        text: "let's hit the beach",
        iconName: 'sun',
    },
};
const SeasonDetails = ({ location, season }) => {
    const { text, iconName } = seasonConfig[season];
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left ${iconName} massive  icon`} />
            <h1>{text}</h1>
            <i className={`icon-right ${iconName} massive  icon `} />
        </div>
    );
};

export default SeasonDetails;
