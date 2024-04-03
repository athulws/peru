import React, { useEffect } from 'react';

const GoogleRecaptcha = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.REACT_APP_RECAPTCHA_SITEKEY}`;
        script.addEventListener('load', () => {
            window.grecaptcha.ready(() => {
                window.grecaptcha.execute(process.env.REACT_APP_RECAPTCHA_SITEKEY).then((token) => console.log(token, "---token"));
            });
        });
        document.body.appendChild(script);
    }, []); // Empty dependency array to run only once on mount

    return (
        <>
            <div
                className="g-recaptcha"
                data-sitekey={process.env.REACT_APP_RECAPTCHA_SITEKEY}
                data-size="invisible"
            ></div>
        </>
    );
};

export default GoogleRecaptcha;
