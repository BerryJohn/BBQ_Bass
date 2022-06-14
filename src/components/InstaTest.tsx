import React, { useEffect } from "react";

const api = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,username,timestamp&access_token={}`;

const InstaTest: React.FC = () => {
    useEffect(() => {
        fetch(
            `https://graph.instagram.com/me/media?fields=id,media_type,media_url,username,timestamp&access_token=${process.env.REACT_APP_FB_TOKEN}`
        )
            .then((res) => res.json())
            .then(
                (result) => {
                    console.log(result.data);
                },
                (error) => {}
            );
    }, []);

    return <div>InstaTest {process.env.REACT_APP_FB_TOKEN}</div>;
};

export default InstaTest;
