import './styles.scss';
import CVButton from './cvButton';
import { RouteButton } from './routeButton';
import { SCREEN_TYPE } from '../../contexts/screenContext/types';
import useWindowDimensions from '../../hooks/useWindowDimensions';

export default function ButtonsContainer() {
    return (
        <div className="hidden lg:flex">
            <div className="flex flex-col list-none p-0 justify-between ml-2 gap-y-1">
                <div>
                    {[
                        SCREEN_TYPE.SKILLS,
                        SCREEN_TYPE.HOBBY,
                        SCREEN_TYPE.ENTERPRISE,
                    ].map((item) => (
                        <RouteButton
                            key={item}
                            route={item}
                            isBig={true}
                            shouldNav
                        />
                    ))}
                </div>
                <CVButton isBig={true} />
            </div>
        </div>
    );
}
