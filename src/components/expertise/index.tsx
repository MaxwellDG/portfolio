import Self from "../self";
import ImageLinksContainer from "../socials/container";

export default function Expertise() {

    return (
        <div className="flex gap-x-2">
            <div className="flex md:hidden">
                <Self isMobile/>
            </div>
            <div className="flex flex-col">
                <div
                    style={{ border: '3px outset rgba(0,0,0,0.3)' }}
                    className="flex text-white self-start text-start text-2xl font-extralight bg-transparentContainer p-2"
                >
                    <p className="inline" style={{ color: '#c98659' }}>
                        {'{ '}
                    </p>
                    <p>&nbsp;Javascript Software Developer&nbsp;</p>
                    <p className="inline" style={{ color: '#c98659' }}>
                        {' }'}
                    </p>
                </div>
                <div className="flex md:hidden">
                    <ImageLinksContainer />
                </div>
            </div>
        </div>
    );
}
