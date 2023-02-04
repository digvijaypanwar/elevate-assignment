import { useState, useEffect } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
    selectCategories,
    selectCurrentCategory,
    setCurrentCategory,
} from '../../features/categorySlice';

import './CategorySelect.scss';

interface CategroySelectProps {
    placeHolder?: string;
}
export function CategorySelect({}: CategroySelectProps) {
    const categories = useAppSelector(selectCategories);
    const currentCategory = useAppSelector(selectCurrentCategory);
    const [showList, setShowList] = useState(false);

    const dispatch = useAppDispatch();

    useEffect(() => {
        const blurHandler = () => setShowList(false);

        window.addEventListener('click', blurHandler);

        return () => {
            window.removeEventListener('click', blurHandler);
        };
    });

    const handleOptionClick = (option: string) => {
        dispatch(setCurrentCategory(option));
    };

    const handleDisplayClick = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        e.stopPropagation();
        setShowList(!showList);
    };
    return (
        <div className="select-category">
            <div
                className="select-control"
                title={currentCategory}
                onClick={handleDisplayClick}
            >
                <div className="selected">{currentCategory}</div>

                {showList ? (
                    <AiFillCaretUp color="white" />
                ) : (
                    <AiFillCaretDown color="white" />
                )}
            </div>
            {showList && (
                <div className="select-options">
                    {categories.map((category) => (
                        <div
                            key={category}
                            className="select-option"
                            title={category}
                            onClick={() => handleOptionClick(category)}
                        >
                            <p className="select-option-text">{category}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
