import DownloadIcon from '../buttonsContainer/download';
import FullscreenIcon from '../buttonsContainer/fullscreen';
import Self from '../self';
import ImageLinksContainer from '../socials/container';


export default function Expertise() {
    return (
        <div className="flex w-full gap-x-2">
            <div className="flex lg:hidden">
                <Self />
            </div>
            <div className="flex flex-col flex-1 items-center lg:items-start">
                <div className="flex flex-col h-full lg:flex-row justify-center lg:justify-start lg:w-full lg:h-full">
                    <div
                        style={{ border: '3px outset rgba(0,0,0,0.3)' }}
                        className="relative flex px-4 text-white self-start text-start text-md xxs:text-lg xs:text-2xl font-extralight bg-transparentContainer p-2"
                    >
                        <p
                            className="flex flex-col justify-center absolute top-0 bottom-0 left-2"
                            style={{ color: '#c98659' }}
                        >
                            {'{ '}
                        </p>
                        <p className="text-center flex">
                            &nbsp;Javascript Software Developer&nbsp;
                        </p>
                        <p
                            className="flex flex-col justify-center absolute top-0 bottom-0 right-2"
                            style={{ color: '#c98659' }}
                        >
                            {' }'}
                        </p>
                    </div>
                    <div className="hidden lg:inline lg:h-full ml-2">
                        <ImageLinksContainer />
                    </div>
                    <div className="lg:hidden flex flex-1 justify-around items-center ">
                        <ImageLinksContainer />
                        <div
                            className={`flex h-[38px] xxs:h-[46px] w-[95px] xxs:w-[115px] flex-row bg-transparentContainer`}
                        >
                            <div
                                className="flex justify-center items-center p-1 xxs:p-2 shaded-button"
                                style={{
                                    borderBottom: '3px outset #c98659',
                                    borderTop: '3px outset #c98659',
                                    borderLeft: '3px outset #c98659',
                                }}
                            >
                                <p
                                    className={`text-white text-xl font-extralight`}
                                >
                                    CV
                                </p>
                            </div>
                            <div
                                className="cv-bot-div flex flex-row items-center"
                                style={{
                                    borderTop: '3px outset rgba(0,0,0,0.3)',
                                    borderRight: '3px outset rgba(0,0,0,0.3)',
                                    borderBottom: '3px outset rgba(0,0,0,0.3)',
                                }}
                            >
                                <DownloadIcon size={25} />
                                <FullscreenIcon size={22} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
