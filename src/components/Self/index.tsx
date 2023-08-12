import { Theme, useThemeContext } from '../../contexts/themeContext';
import { useMemo } from 'react';

const style = {
    height: '100%',
    width: '100%',
};

type Props = {
    isMobile: boolean;
};

export default function Self({ isMobile }: Props) {
    // const theme: Theme = useThemeContext();

    // const pic = useMemo(() => {
    //     switch(theme){
    //         case Theme.AUTUMN: return <img src="/images/Self_Autumn.png" style={style}/>
    //         case Theme.JUNGLE: return <img src="/images/Self_Jungle.png" style={style}/>
    //         case Theme.MOUNTAINS: return <img src="/images/Self_Mountains.png" style={style}/>
    //     }
    // }, [theme])

    return (
        <div
            className="bg-transparentContainer h-[125px] xxs:h-[150px] lg:h-[500px]"
            style={{
                aspectRatio: '0.833',
                border: '4px outset rgba(0,0,0,0.3)',
            }}
        >
            {/* {pic} */}
            <img src="/images/Self_Autumn.png" style={style} />
        </div>
    );
}
