import './accordion.css';
import classNames from 'classnames';
import { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

export type AccordionProps = {
    data?: AccordionItemProps[];
};

export type AccordionItemProps = {
    title: string;
    content: string;
};

const Accordion = ({ data }: AccordionProps) => {
    return (
        <div className="accordion-section">
            {data && data.map((item, index) => <AccordionItem key={index} title={item.title} content={item.content} />)}
        </div>
    );
};

const AccordionItem = ({ title, content }: AccordionItemProps) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={`${classNames('accordion-item', { active: isActive })}`}>
            <div onClick={() => setIsActive(!isActive)} role="button" className="accordion-title">
                <div className="title">{title}</div>
                <div className="icon">{isActive ? <BsChevronDown /> : <BsChevronUp />}</div>
            </div>
            <div className={`${classNames('accordion-content', { active: isActive })}`}>{content}</div>
        </div>
    );
};

export default Accordion;
