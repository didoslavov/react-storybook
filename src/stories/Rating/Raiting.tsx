import './raiting.css';
import { MouseEventHandler, useState } from 'react';
import { FaStar } from 'react-icons/fa';

export type StarProps = {
    selected: boolean;
    onSelect?: MouseEventHandler<SVGElement>;
};

export type RatingProps = {
    number?: number;
};

const Star = ({ selected, onSelect = (f) => f }: StarProps) => (
    <FaStar className="star" color={selected ? '#FFCB45' : '#F2F2F2'} onClick={onSelect} />
);

const Raiting = ({ number = 5 }: RatingProps) => {
    const [selectedStars, setSelectedStars] = useState(0);

    return [...Array(number)].map((_, i) => (
        <Star key={i} selected={i < selectedStars} onSelect={() => setSelectedStars(i + 1)} />
    ));
};

export default Raiting;
