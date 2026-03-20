import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading: React.FC<{ title: string }> = ({ title }) => {
    return (
        <motion.h2
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {title}
        </motion.h2>
    );
};

export default SectionHeading;