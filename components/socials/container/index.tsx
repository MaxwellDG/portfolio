import React from 'react';
import ImageLink from '../imageLink';

export default function ImageLinksContainer() {

    return (
            <ul
                style={{
                    border: '3px outset rgba(0,0,0,0.3)',
                    borderLeft: 'none',
                    borderLeftStyle: 'none',
                    borderLeftWidth: 0,
                }}
                className="flex lg:h-full items-center p-2 px-3 bg-transparentContainer flex-row list-none gap-x-3"
            >
                {/* <ImageLink
                    id="largeGithub"
                    altText="leetcode"
                    image="images/leetcode.png"
                    link="https://leetcode.com/maxwellmdg/"
                ></ImageLink> */}
                <ImageLink
                    id="largeLinkedIn"
                    altText="Img_LinkedIn"
                    image="images/iconLinkedin.jpg"
                    link="https://www.linkedin.com/in/maxwell-dunk-green-bb313a165/"
                ></ImageLink>
                <ImageLink
                    id="largeGithub"
                    altText="github"
                    image="images/iconGithub.png"
                    link="https://www.github.com/MaxwellDG"
                ></ImageLink>
            </ul>
    );
}
