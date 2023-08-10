import { SCREEN_TYPE } from '../../contexts/screenContext/types';
import { RouteButton } from '../buttonsContainer/routeButton';

export default function MobileNav() {

    // maybe do 45px instead of 44?

    return (
        <div className="md:hidden flex w-full h-[44px] absolute bottom-0 left-0 right-0">
            <div className="flex w-full list-none p-0">
                    {[SCREEN_TYPE.SKILLS, SCREEN_TYPE.HOBBY, SCREEN_TYPE.ENTERPRISE].map(
                        (item) => (
                            <RouteButton
                                key={item}
                                route={item}
                                isBig={true}
                                shouldNav
                                isMobile
                            />
                        )
                    )}
            </div>
        </div>
    );
}