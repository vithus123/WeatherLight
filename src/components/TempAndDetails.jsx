
import React from "react";
import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";

const TempAndDetails = ({ weather }) => {
    const {
        details,
        icon,
        temp,
        Sunrise: sunrise,
        Sunset: sunset,
        speed,
        humidity,
        feels_like,
    } = weather;
    

    const verticalDetails = [
        {
            id: 1,
            Icon: FaThermometerEmpty,
            title: "Feels Like",
            value: `${feels_like.toFixed()}°`,
        },
        {
            id: 2,
            Icon: BiSolidDropletHalf,
            title: "Humidity",
            value: `${humidity.toFixed()}%`,
        },
        {
            id: 3,
            Icon: FiWind,
            title: "Wind",
            value: `${speed.toFixed()}km/h`,
        },
    ];

    const horizontalDetails = [
        {
            id: 1,
            Icon: GiSunrise,
            title: "Sunrise",
            value: sunrise,
        },
        {
            id: 2,
            Icon: GiSunset,
            title: "Sunset",
            value: sunset,
        },
    ];

    return (
        <div>
            <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
                <p>{details}</p>
            </div>

            <div className="flex flex-row items-center justify-between py-3">
                <img className="w-20" src={icon} alt="Weather Icon" />

                <p className="text-5xl">{`${temp.toFixed()}°`}</p>

                <div className="flex flex-col space-y-3 items-start">
                    {verticalDetails.map(({ id, Icon, title, value }) => (
                        <div key={id} className="flex font-light text-lg items-center justify-center">
                            <Icon size={18} className="mr-1" />
                            {`${title}:`} <span className="font-medium ml-1">{value}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-row items-center justify-center space-x-10 text-sm py-3">
                {horizontalDetails.map(({ id, Icon, title, value }) => (
                    <div key={id} className="flex flex-row items-center">
                        <Icon size={30} className="bg-gray-700/20 rounded-md p-[2px]" />
                        <p className="font-lightweight mt-1 ml-1 text-[18px]">{`${title}:`} <span className="font-medium ml-1">{value}</span></p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TempAndDetails;