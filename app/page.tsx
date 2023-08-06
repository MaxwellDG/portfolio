import ButtonsContainer from '../src/components/buttonsContainer';
import ImageLinksContainer from '../src/components/socials/container';
import Self from '../src/components/self';

export default function App() {
    return (
        <div className="flex flex-1 justify-center items-center">
            <div className="flex w-5/6 max-w-6xl h-[500px] flex-col md:flex-row">
                <div
                    className="relative justify-around items-center flex text-center"
                    style={{}}
                >
                    <Self />
                    <div className="flex flex-1 h-full flex-col items-start pl-2 relative">
                        <p
                            style={{ border: '3px outset rgba(0,0,0,0.3)' }}
                            className="text-white mb-3 text-5xl font-light bg-transparentContainer p-2"
                        >
                            Maxwell Dunk&#8209;Green
                        </p>
                        <div
                            style={{ border: '3px outset rgba(0,0,0,0.3)' }}
                            className="flex text-white self-start text-start text-2xl font-extralight mb-3 bg-transparentContainer p-2"
                        >
                            <p className="inline" style={{ color: '#c98659' }}>
                                {'{ '}
                            </p>
                            <p>&nbsp;Javascript Software Developer&nbsp;</p>
                            <p className="inline" style={{ color: '#c98659' }}>
                                {' }'}
                            </p>
                        </div>

                        <div
                            style={{ border: '3px outset rgba(0,0,0,0.3)' }}
                            className="text-white text-start font-extralight bg-transparentContainer p-2"
                        >
                            <span>
                                I used to work in the hospitality industry,
                                while spending my free-time coding as a hobby.
                                Overtime I was able to aquire some contract and
                                part-time work, which overtime developed into a
                                full-time career.
                            </span>
                            <br />
                            <br />
                            <span style={{ whiteSpace: 'nowrap' }}>
                                If you are doing anything
                            </span>
                            <span style={{ color: '#c98659' }}>&nbsp;Web3</span>
                            &nbsp;
                            <span>and/or</span>
                            <span style={{ color: '#c98659' }}>
                                &nbsp;Fullstack Javascript&nbsp;
                            </span>
                            <span>
                                related, i'm interested. I've spent the past
                                several years creating applications for web,
                                mobile, and desktop. And as for Web3, I've
                                worked on
                            </span>
                            <span style={{ color: '#c98659' }}>
                                &nbsp;Ethereum
                            </span>
                            &nbsp;
                            <span>and&nbsp;</span>
                            <span style={{ color: '#c98659' }}>
                                &nbsp;Solana
                            </span>
                            &nbsp;
                            <span>
                                chains. I've had a great time doing so, and
                                couldn't be happier to continue doing much of
                                the same.
                            </span>
                        </div>
                        <div
                            className="absolute top-0 right-0 bg-transparentContainer p-2"
                            style={{
                                border: '3px outset rgba(0,0,0,0.3)',
                                borderLeft: 'none',
                                borderLeftStyle: 'none',
                                borderLeftWidth: 0,
                            }}
                        >
                            <ImageLinksContainer />
                        </div>
                    </div>
                </div>
                <ButtonsContainer />
            </div>
        </div>
    );
}
