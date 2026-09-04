import { GreenCircleWithCheckmark } from '@/icons/GreenCircleWithCheckmark';
import React from 'react';

export interface WorkExperienceCardProps extends WorkExperienceListProps {
    header: string;
}

export const WorkExperienceCard: React.FC<WorkExperienceCardProps> = ({ header, items }) => {
    return (
        <div className="flex flex-col space-y-6 rounded-xl border border-white/5 bg-neutral-900 p-5 shadow-md sm:p-6">
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
            <ul className="flex list-inside flex-col space-y-4 text-neutral-300">
            {items.map((listItem, index) => (
                <li key={`WorkExperienceListItem-${index}`} className="flex flex-1 items-start gap-3 leading-relaxed">
                    <GreenCircleWithCheckmark svgProps={{ width: '20px', height: '20px', style: { flexShrink: 0, marginTop: '0.2rem' } }} />
                    <p className="min-w-0">{listItem}</p>
                </li>
            ))}
        </ul>
    );
};
