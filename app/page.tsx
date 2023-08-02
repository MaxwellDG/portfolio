import ButtonsContainer from '../src/components/buttonsContainer';
import ImageLinksContainer from '../src/components/imageLinksContainer';
import { motion } from 'framer-motion';
import * as Framer from '../src/data/animationVariants';
import {
    Theme,
    ThemeContext,
    useThemeContext,
} from '../src/components/themeProvider';
import Self from '../src/components/Self';
import { COLORS } from '../src/theme';

// const length = 12, width = 8;

// const shape = new THREE.Shape();
// shape.moveTo( 0,0 );
// shape.lineTo( 0, width );
// shape.lineTo( length, width );
// shape.lineTo( length, 0 );
// shape.lineTo( 0, 0 );

// const extrudeSettings = {
// 	steps: 2,
// 	depth: 1,
// 	bevelEnabled: true,
// 	bevelThickness: 1,
// 	bevelSize: 1,
// 	bevelOffset: 4,
// 	bevelSegments: 1
// };

// const geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const mesh = new THREE.Mesh( geometry, material ) ;

export default function Home() {
    return (
        <div className="flex flex-1 justify-center items-center">
            <div className="flex w-5/6 max-w-6xl h-[500px] flex-col md:flex-row">
                <div
                    className="relative justify-around items-center flex text-center"
                    style={{}}
                >
                    <Self />
                    <div className="flex flex-1 h-full flex-col items-start pl-2 relative">
                        <div className="flex flex-col">
                            <p
                                style={{ border: '3px outset rgba(0,0,0,0.3)' }}
                                className="text-white mb-3 text-5xl font-light bg-transparentContainer p-2"
                            >
                                Maxwell Dunk&#8209;Green
                            </p>
                            <p
                                style={{ border: '3px outset rgba(0,0,0,0.3)' }}
                                className="text-white self-start text-start text-2xl font-extralight mb-3 bg-transparentContainer p-2"
                            >
                                <p className="inline" style={{ color: '#c98659' }}>{"{ "}</p>
                                Javascript Software Developer
                                <p className="inline" style={{ color: '#c98659' }}>{" }"}</p>
                            </p>
                        </div>
                        <p
                            className="text-white text-start font-extralight bg-transparentContainer p-2"
                            style={{ border: '3px outset rgba(0,0,0,0.3)' }}
                        >
                            I used to work in the hospitality industry, while
                            spending my free-time coding as a hobby. Overtime I
                            was able to aquire some contract and part-time work,
                            which overtime developed into a full-time career.
                            <br />
                            <br />
                            If you are doing anything{' '}
                            <p className="inline" style={{ color: '#c98659' }}>
                                {' '}
                                Web3
                            </p>
                            {' '}or{' '}
                            <p className="inline" style={{ color: '#c98659' }}>
                                {' '}
                                Fullstack Javascript
                                {' '}
                            </p>
                            related, i'm interested. I've spent the past several
                            years creating applications for web, mobile, and
                            desktop. And as for Web3, I've worked on
                            <p className="inline" style={{ color: '#c98659' }}>
                                {' '}
                                Ethereum
                            </p>{' '}
                            and{' '}
                            <p className="inline" style={{ color: '#c98659' }}>
                                {' '}
                                Solana
                            </p>{' '}
                            chains. I've had a great time doing so, and couldn't be happier to continue doing much of the same.
                        </p>
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
