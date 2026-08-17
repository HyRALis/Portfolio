'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { skillTreeSections, type SkillNodeData } from '@/utils/constants/skillTreeData';
import { SkillNode } from './SkillNode';

const TreeBranch: React.FC<{ node: SkillNodeData; depth: number; index: number }> = ({
    node,
    depth,
    index
}) => {
    const hasChildren = node.children && node.children.length > 0;

    return (
        <div className="tree-branch">
            <SkillNode node={node} depth={depth} index={index} />
            {hasChildren && (
                <>
                    {/* Horizontal connector from node to children */}
                    <motion.div
                        className="tree-connector-h"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.4, delay: depth * 0.08 + 0.2 }}
                        style={{ transformOrigin: 'left center' }}
                    />
                    {/* Children column */}
                    <div className="tree-children">
                        {node.children!.map((child, idx) => (
                            <div className="tree-child-row" key={child.id}>
                                <TreeBranch
                                    node={child}
                                    depth={depth + 1}
                                    index={idx}
                                />
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export const SkillTree: React.FC = () => {
    return (
        <div className="skill-tree-wrapper w-full">
            <div className="skill-tree-bg" />

            <div className="skill-tree-container w-full">
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 w-full items-start">
                    {skillTreeSections.map((section) => {
                        const isFrontend = section.id === 'frontend';
                        return (
                            <motion.div
                                key={section.id}
                                className={`skill-tree-section ${
                                    isFrontend ? 'xl:col-span-8' : 'xl:col-span-4'
                                } flex flex-col h-full bg-slate-900/20 border border-white/5 p-4 sm:p-6 rounded-3xl backdrop-blur-sm`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="skill-tree-section-header">
                                    <span className="skill-tree-section-emoji">{section.emoji}</span>
                                    <h3
                                        className="skill-tree-section-title"
                                        style={{
                                            backgroundImage: `linear-gradient(135deg, ${section.accentColor}, ${section.accentColor}dd)`
                                        }}
                                    >
                                        {section.title}
                                    </h3>
                                    <div
                                        className="skill-tree-section-line"
                                        style={{
                                            backgroundImage: `linear-gradient(90deg, ${section.accentColor}60, transparent)`
                                        }}
                                    />
                                </div>

                                <div className="tree-scroll-container overflow-x-auto pb-4 pt-2 w-full flex-1">
                                    <div className="tree-children tree-roots min-w-max">
                                        {section.roots.map((root, idx) => (
                                            <div className="tree-child-row" key={root.id}>
                                                <TreeBranch node={root} depth={0} index={idx} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
