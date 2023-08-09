// 'use client';

import React from 'react';
import ImageLink from '../imageLink';
// import GithubDisclaimer from '../../modals/githubDisclaimer';

export default function ImageLinksContainer() {
    // const [showDisclaimer, toggleDisclaimer] = React.useState(false);

    return (
        <>
            <ul
                style={{
                    border: '3px outset rgba(0,0,0,0.3)',
                    borderLeft: 'none',
                    borderLeftStyle: 'none',
                    borderLeftWidth: 0,
                }}
                className="flex p-2 bg-transparentContainer flex-row list-none gap-x-2"
            >
                <ImageLink
                    id="largeGithub"
                    altText="leetcode"
                    image="images/leetcode.png"
                    link="https://leetcode.com/maxwellmdg/"
                ></ImageLink>
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
                {/* <li
                    className="cursor-pointer"
                    onClick={() => toggleDisclaimer(true)}
                >
                    <img
                        className="h-6 w-6"
                        alt="github"
                        src="images/iconGithub.png"
                    />
                </li> */}
            </ul>
            {/* <GithubDisclaimer
                isShowing={showDisclaimer}
                closeModal={() => toggleDisclaimer(false)}
            /> */}
        </>
    );
}
