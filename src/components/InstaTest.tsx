import React, { useEffect, useState } from "react";
import { InstagramEmbed } from "react-social-media-embed";

const fields = "id,permalink,username";
const InstaTest: React.FC = () => {
    const [tempData, setTempData] = useState<any>(null);

    useEffect(() => {
        fetch(
            `https://graph.instagram.com/me/media?fields=${fields}&access_token=${process.env.REACT_APP_FB_TOKEN}`
        )
            .then((res) => res.json())
            .then(
                (result) => {
                    console.log(result.data);
                    setTempData(result.data);
                },
                (error) => {}
            );
    }, []);

    return (
        <div>
            InstaTest {process.env.REACT_APP_FB_TOKEN}
            {tempData?.map((el: any) => (
                <InstagramEmbed url={el.permalink} width={328} />
            ))}
        </div>
    );
};

export default InstaTest;
