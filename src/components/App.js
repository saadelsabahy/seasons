import React, { useEffect, useState } from 'react';
import SeasonDetails from './SeasonDetails';

const App = () => {
    const [location, setLocation] = useState({
        lat: null,
        lng: null,
        errorMessage: '',
    });
    /*const [errorMessage, setErrorMessage] = useState('');*/

    const gettingLocation = () => {
        window.navigator.geolocation.getCurrentPosition(
            ({ coords }) => {
                setLocation({ lat: coords.latitude, lng: coords.longitude });
            },
            err => {
                setLocation({ errorMessage: err.message });
            }
        );
    };
    useEffect(() => {
        gettingLocation();
    }, []);

    const determineSeason = month => {
        if (2 <= month <= 9) {
            return location.lat > 0 ? 'summer' : 'winter';
        } else {
            return location.lat < 0 ? 'summer' : 'winter';
        }
    };
    let season = determineSeason(new Date().getMonth());

    const renderContent = () => {
        if (location.errorMessage && !location.lat) {
            return <div>error:{location.errorMessage}</div>;
        } else if (!location.errorMessage && location.lat) {
            return <SeasonDetails {...location} season={season} />;
        } else {
            return (
                <div className="ui active inverted dimmer">
                    <div className="ui text loader">
                        fetching location request ...
                    </div>
                </div>
            );
        }
    };
    console.log(location);
    return <div className={'border red'}>{renderContent()}</div>;
};

export default App;
