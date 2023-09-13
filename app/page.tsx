import ButtonsContainer from '../components/buttonsContainer';
import Self from '../components/self';
import Expertise from '../components/expertise';


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
                                I used to work in the hospitality industry,
                                while spending my free-time coding as a hobby.
                                Overtime I was able to acquire some contract and
                                part-time work, which then developed into a
                                full-time career.
                            </span>
                            <br />
                            <br />
                            <p>
                                If you are doing anything
                                <span style={{ color: '#c98659' }}>
                                    &nbsp;Web3
                                </span>
                                &nbsp; and/or
                                <span style={{ color: '#c98659' }}>
                                    &nbsp;Fullstack Javascript&nbsp;
                                </span>
                                related, i'm interested. I've spent the past
                                several years creating applications for web,
                                mobile, and desktop. And as for Web3, I've
                                worked on
                                <span style={{ color: '#c98659' }}>
                                    &nbsp;Ethereum
                                </span>
                                &nbsp; and&nbsp;
                                <span style={{ color: '#c98659' }}>
                                    &nbsp;Solana
                                </span>
                                &nbsp; chains. I've had a great time doing so,
                                and couldn't be happier to continue doing much
                                of the same.
                            </p>
                        </span>
                    </div>
                </div>
                <ButtonsContainer />
            </div>
        </div>
    );
}
