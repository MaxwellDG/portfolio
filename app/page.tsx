import ButtonsContainer from "../src/components/buttonsContainer";
import ImageLinksContainer from "../src/components/imageLinksContainer";
import { motion } from 'framer-motion'
import * as Framer from '../src/data/animationVariants';
import { Theme, ThemeContext, useThemeContext } from "../src/components/themeProvider";
import Self from "../src/components/Self";

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
      <div 
        className="flex h-3/4 w-3/4 flex-col md:flex-row"
      >
          <div 
            className="shadow-md relative justify-around items-center flex flex-1 text-center bg-transparentContainer"
            style={{ }}
          >
              <Self />
              <div className="flex flex-col items-start p-8">
                <h2 className="text-white mb-3">Maxwell Dunk&#8209;Green</h2>
                <p className="text-white text-start">Hi - I'm a Javascript Software Developer.</p>
                <p className="text-white text-start">
                  I used to work in the hospitalty industry, while spending my free-time coding as a hobby.
                  Overtime I was able to aquire some contract and part-time work, which overtime developed into a 
                  full-time career. 
                </p>
              </div>
              <div className="absolute top-2 right-2">
                <ImageLinksContainer />
              </div>
          </div>
        <ButtonsContainer  />
      </div>
    </div>
  );
}
