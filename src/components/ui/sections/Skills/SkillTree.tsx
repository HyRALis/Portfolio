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
                    <motion.div
                        className="tree-connector-h"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.4, delay: depth * 0.08 + 0.2 }}
                        style={{ transformOrigin: 'left center' }}
                        aria-hidden="true"
                    />
                    <div className="tree-children">
                        {node.children!.map((child, idx) => (
                            <div className="tree-child-row" key={child.id}>
                                <TreeBranch node={child} depth={depth + 1} index={idx} />
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export const SkillTree: React.FC<{ label: string }> = ({ label }) => {
    return (
        <div className="skill-tree-wrapper w-full" tabIndex={0} aria-label={label}>
            <div className="skill-tree-bg" aria-hidden="true" />

            <div className="skill-tree-container w-full">
                <div className="grid w-full grid-cols-1 items-start gap-8 xl:grid-cols-12">
                    {skillTreeSections.map((section) => {
                        const isFrontend = section.id === 'frontend';

                        return (
                            <motion.div
                                key={section.id}
                                className={`skill-tree-section ${
                                    isFrontend ? 'xl:col-span-8' : 'xl:col-span-4'
                                } flex h-full flex-col rounded-3xl border border-white/5 bg-slate-900/20 p-4 backdrop-blur-sm sm:p-6`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="skill-tree-section-header">
                                    <span className="skill-tree-section-emoji" aria-hidden="true">
                                        {section.emoji}
                                    </span>
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
                                        aria-hidden="true"
                                    />
                                </div>

                                <div className="tree-scroll-container w-full flex-1 overflow-x-auto pb-4 pt-2">
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
