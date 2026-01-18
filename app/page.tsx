import ButtonsContainer from '../components/buttonsContainer';
import Self from '../components/self';
import Expertise from '../components/expertise';
import ImageLink from '../components/socials/imageLink';

export default function Page() {
    return (
        <div className="flex flex-1 justify-center overflow-y-auto">
            <div className="flex mx-2 pt-2 lg:max-w-6xl max-w-2xl pb-[8px] flex-col justify-center lg:flex-row m-auto">
                <div
                    className="relative justify-around flex text-center "
                    style={{}}
                >
                    <div className="hidden lg:flex">
                        <Self />
                    </div>
                    <div className="flex gap-y-2 flex-1 flex-col items-start lg:pl-2 relative">
                        <div className="w-full flex justify-center xs:justify-start">
                            <p
                                style={{ border: '3px outset rgba(0,0,0,0.3)' }}
                                className="text-white text-3xl xs:text-5xl font-light bg-transparentContainer p-2"
                            >
                                Maxwell Dunk&#8209;Green
                            </p>
                        </div>
                        <Expertise />

                        <span
                            style={{ border: '3px outset rgba(0,0,0,0.3)' }}
                            className="text-white text-start font-extralight bg-transparentContainer p-2"
                        >
                            <span>
                                I used to work in the hospitality industry while
                                spending my free-time coding as a hobby.
                                Overtime I was able to acquire some contract and
                                part-time work which then grew into a full-time
                                career developing applications. I'm very happy
                                with where I'm at now, and wish to continue
                                doing much of the same.
                            </span>
                            <br />
                            <br />
                            <p>
                                I've spent the past several years creating
                                professional applications for web, mobile, and
                                desktop. This has ranged a wide variety of
                                industries including: gaming, health-care,
                                social media, blockchain, and administration.
                                During this time the vast majority of my work
                                was done in
                                <span style={{ color: '#c98659' }}>
                                    &nbsp;Typescript
                                    &nbsp;
                                </span>
                                and
                                <span style={{ color: '#c98659' }}>
                                    &nbsp;React (Native)
                                </span>{' '}
                                environments.
                            </p>
                            <br />
                            <p>
                                <span>
                                    In my spare time i'm currently advancing in
                                    <span style={{ color: '#c98659' }}>
                                        &nbsp;Webflow
                                    </span>{' '}
                                    and{' '}
                                    <span style={{ color: '#c98659' }}>
                                        Linux
                                    </span>
                                    . For the former, I've seen how quickly it
                                    can generate websites for clients. As per
                                    the latter, it's just for fun. I've begun
                                    experimenting with programming{' '}
                                    <span style={{ color: '#c98659' }}>
                                        Raspberry-Pis
                                    </span>{' '}
                                    and creating small home improvement
                                    projects.
                                </span>
                            </p>
                        </span>
                        <div className="flex flex-col sm:flex-row gap-x-2 items-center w-full sm:items-start">
                            <span
                                style={{ border: '3px outset rgba(0,0,0,0.3)' }}
                                className="text-white text-start font-extralight bg-transparentContainer p-2 mb-2 sm:mb-0 "
                            >
                                What I care about:{' '}
                            </span>
                            <div
                                style={{ border: '3px outset rgba(0,0,0,0.3)' }}
                                className="bg-transparentContainer p-2 flex items-center gap-x-3"
                            >
                                <ImageLink
                                    altText="linux_img"
                                    image="/images/linux-logo.png"
                                    id="linux_img"
                                    link="https://en.wikipedia.org/wiki/Linux"
                                />
                                <div className="flex text-white items-center">
                                    (&nbsp;
                                    <ImageLink
                                        altText="debian_img"
                                        image="/images/debian-logo.png"
                                        id="debian_img"
                                        link="https://en.wikipedia.org/wiki/Debian"
                                    />
                                    &nbsp;)
                                </div>
                                <ImageLink
                                    altText="btc_img"
                                    image="/images/btc-logo.png"
                                    id="btc_img"
                                    link="https://bitcoin.org/en/"
                                />
                                <ImageLink
                                    altText="earth_img"
                                    image="/images/planet-earth.png"
                                    id="earth_img"
                                    link="https://theoceancleanup.com/"
                                />
                                <ImageLink
                                    altText="gadsden_img"
                                    image="/images/gadsden.png"
                                    id="gadsden_img"
                                    link="https://www.libertarianism.org/"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <ButtonsContainer />
            </div>
        </div>
    );
}
