import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMeasure } from 'react-use-measure';

const AnimatedCounter = ({ target }) => {
    const [count, setCount] = useState(0);
    const [ref, { height }] = useMeasure();

    useEffect(() => {
        const handleScroll = () => {
            const rect = ref.current.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                animateCounter();
                window.removeEventListener('scroll', handleScroll);
            }
        };

        const animateCounter = () => {
            const duration = 2000;
            const startTime = performance.now();

            const animate = (time) => {
                const elapsed = time - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const newCount = Math.floor(progress * target);
                setCount(newCount);
                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };

            requestAnimationFrame(animate);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [target, ref]);

    return (
        <motion.div ref={ref} style={{ height }}>
            <h1>{count}</h1>
        </motion.div>
    );
};

export default AnimatedCounter;
