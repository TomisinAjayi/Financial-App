import React, { useEffect } from "react";
import { Background, SplashBody, SplashImage } from './style';
import Routes from "../../routes";

export default function SplashScreen() {

    const readData = async () => (
        
        <Background>
            <Routes />
        </Background>
        
    );

    useEffect(() => {
        setTimeout(() => {
            readData();
        }, 3000);
    }, []);

    return (
        <SplashBody>
            <SplashImage
                source={require('../../assets/rccg-logo.png')}
            />
        </SplashBody>
    );
}

