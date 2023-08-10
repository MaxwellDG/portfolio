// 'use client';

// import React from 'react';
// import Modal from 'react-modal';

// interface Props {
//     isShowing: boolean;
//     closeModal: () => void;
// }

// export default function GithubDisclaimer({ closeModal, isShowing }: Props) {

//     function openGithub(){
//         window.open("https://www.github.com/MaxwellDG", "_blank")
//     }

//     return (
//         <Modal
//             isOpen={isShowing}
//             onRequestClose={closeModal}
//             ariaHideApp={false}
//             // style={customStyles}
//         >
//             <div>
//                 <h2>Disclaimer</h2>
//                 <p className="font-extralight mb-8">
//                     There's not much to see here. Most of my work has been
//                     forced to be very private under strict NDAs. I was not
//                     permitted to link the Github work accounts to my personal
//                     account. If you'd like some snippets of my code, let me know
//                     and I can arrange to send you some personally.
//                 </p>
//                 <div className="flex w-full">
//                     <button className="flex flex-1 justify-center items-center" onClick={closeModal}>
//                         Cancel
//                     </button>
//                     <button className="flex flex-1 justify-center items-center" onClick={openGithub}>
//                         Continue
//                     </button>
//                 </div>
//             </div>
//         </Modal>
//     );
// }
