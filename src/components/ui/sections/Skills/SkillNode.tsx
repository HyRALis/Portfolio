'use client';

import React from 'react';
import { motion } from 'framer-motion';
import type { SkillNodeData } from '@/utils/constants/skillTreeData';

interface SkillNodeProps {
    node: SkillNodeData;
    depth: number;
    index: number;
}

export const SkillNode: React.FC<SkillNodeProps> = ({ node, depth, index }) => {
    const xpPercent = (node.years / node.maxYears) * 100;

    return (
        <motion.div
            className="skill-node group/node"
            style={{ '--skill-color': node.color } as React.CSSProperties}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
                delay: depth * 0.08 + index * 0.04
            }}
            whileHover={{ scale: 1.08 }}
        >
            <div className="skill-node-level-badge">
                <span className="skill-node-level-text">Lv.{node.years}</span>
            </div>
            <div className="skill-node-glow" aria-hidden="true" />
            <div className="skill-node-icon" aria-hidden="true">
                {node.icon}
            </div>
            <div className="skill-node-name">{node.title}</div>
            <div className="skill-node-xp-track" aria-hidden="true">
                <motion.div
                    className="skill-node-xp-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${xpPercent}%` }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{
                        duration: 1.2,
                        delay: depth * 0.08 + index * 0.04 + 0.3,
                        ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                />
            </div>
            <div className="skill-node-years">
                {node.years}/{node.maxYears} yr
            </div>
        </motion.div>
    );
};
