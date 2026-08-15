import { GreenCircleWithCheckmark } from '@/icons/GreenCircleWithCheckmark';
import React from 'react';

export interface WorkExperienceCardProps extends WorkExperienceListProps {
    header: string;
}

export const WorkExperienceCard: React.FC<WorkExperienceCardProps> = ({ header, items }) => {
    return (
        <div className="flex flex-col space-y-6 rounded-md bg-neutral-100 dark:bg-neutral-800 p-4 shadow-md">
            <h4 className="text-neutral-800 dark:text-neutral-200 text-md font-bold">{header}</h4>
            <WorkExperienceList items={items} />
        </div>
    );
};

export interface WorkExperienceListProps {
    items: string[];
}

export const WorkExperienceList: React.FC<WorkExperienceListProps> = ({ items }) => {
    return (
        <ul className="flex flex-col space-y-4 text-gray-500 list-inside dark:text-gray-400">
            {items.map((listItem, index) => (
                <li key={`WorkExperienceListItem-${index}`} className="flex items-center space-x-2 flex-1">
                    <GreenCircleWithCheckmark svgProps={{ width: '20px', height: '20px', style: { flexShrink: 0 } }} />
                    <p>{listItem}</p>
                </li>
            ))}
        </ul>
    );
};
