import { useSwipeable } from 'react-swipeable';
import React, { useState } from 'react';
import LeftArrow from '../../../public/icons/left-arrow.svg';
import './styles.scss';

enum Direction {
    NEXT = 'next',
    PREV = 'prev',
}

const getOrder = (index: number, focusedIndex: number, numItems: number) => {
    return index - focusedIndex < 0 ? numItems - Math.abs(index - focusedIndex) : index - focusedIndex;
};

type Props = {
    children: React.ReactNode;
    focusedIndex: number;
    setFocusedIndex: (num: number) => void
};

export const Carousel = ({ children, focusedIndex, setFocusedIndex }: Props) => {
    const numItems = React.Children.count(children);
    const [sliding, setSliding] = useState(false);
    const [direction, setDirection] = useState('');

    const slideNext = () => {
        setSliding(true);
        setDirection(Direction.NEXT);
        setFocusedIndex(focusedIndex === numItems - 1 ? 0 : focusedIndex + 1);

        setTimeout(stopSliding, 50);
    };

    const slidePrev = () => {
        setSliding(true);
        setDirection(Direction.PREV);
        setFocusedIndex(focusedIndex === 0 ? numItems - 1 : focusedIndex - 1);

        setTimeout(stopSliding, 50);
    };

    const stopSliding = () => setSliding(false);

    const slide = (direction: Direction) => {
        if (direction === Direction.NEXT) {
            slideNext();
        } else {
            slidePrev();
        }
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => slide(Direction.NEXT),
        onSwipedRight: () => slide(Direction.PREV),
        swipeDuration: 500,
        preventScrollOnSwipe: false,
        trackMouse: true,
        touchEventOptions: { passive: true },
    });

    return (
        <div {...handlers} style={{ touchAction: 'pan-y' }} className="h-full w-full flex flex-col justify-center">
            <div className="wrapper">
                <div
                    className={`carousel-container ${direction} ${
                        sliding && 'sliding'
                    }`}
                >
                    {React.Children.map(children, (child, index) => (
                        <div
                            className="carousel-slot"
                            style={{ order: getOrder(index, focusedIndex, numItems) }}
                        >
                            {child}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-1 absolute top-0 bottom-0 left-0 w-full items-center justify-between z-20">
                <button
                    onClick={() => slide(Direction.PREV)}
                    className="rotate-[315deg] mx-2"
                >
                    <LeftArrow height={20} width={30} fill={'#AEAAAC'} />
                </button>
                <button
                    onClick={() => slide(Direction.NEXT)}
                    className="rotate-[135deg] mx-2"
                >
                    <LeftArrow height={20} width={30} fill={'#AEAAAC'} />
                </button>
            </div>
        </div>
    );
};
