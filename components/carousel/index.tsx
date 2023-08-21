import { useSwipeable } from 'react-swipeable';
import React, { useState } from 'react';
import LeftArrow from '../../public/icons/left-arrow.svg';
import './styles.scss';

enum Direction {
    NEXT = 'next',
    PREV = 'prev',
}

const getOrder = (index: number, focusedIndex: number, numItems: number) => {
    return index - focusedIndex < 0
        ? numItems - Math.abs(index - focusedIndex)
        : index - focusedIndex;
};

type Props = {
    children: React.ReactNode;
    focusedIndex: number;
    setFocusedIndex: (num: number) => void;
};

export const Carousel = ({
    children,
    focusedIndex,
    setFocusedIndex,
}: Props) => {

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
        preventScrollOnSwipe: true,
        trackMouse: true,
        touchEventOptions: { passive: true },
    });

    return (
        <div className="flex flex-1 w-full relative">
            <div className="lg:hidden absolute top-0 left-0 pb-2 mb-2 lg:pb-0 h-full w-full flex flex-1 z-0 justify-center">
                <img src="/images/black-box.jpg" />
            </div>
            <div
                {...handlers}
                style={{ touchAction: 'pan-y' }}
                className="flex-1 w-full flex flex-col justify-center"
            >
                <div className="wrapper">
                    <div
                        className={`carousel-container ${direction} ${
                            sliding && 'sliding'
                        }`}
                    >
                        {React.Children.map(children, (child, index) => (
                            <div
                                className="carousel-slot"
                                style={{
                                    order: getOrder(
                                        index,
                                        focusedIndex,
                                        numItems
                                    ),
                                }}
                            >
                                {child}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <button
                onClick={() => slide(Direction.PREV)}
                className="mx-2 absolute top-1/2 left-1 -translate-y-1/2"
            >
                <LeftArrow height={35} width={35} fill={'#AEAAAC'} />
            </button>
            <button
                onClick={() => slide(Direction.NEXT)}
                className="rotate-[180deg] mx-2 absolute top-1/2 right-1 -translate-y-1/2"
            >
                <LeftArrow height={35} width={35} fill={'#AEAAAC'} />
            </button>
        </div>
    );
};
