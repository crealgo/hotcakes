'use client';

import {styled} from 'styled-components';

interface MasonryProps {
    orientation?: 'vertical' | 'horizontal';
}

export const MasonryItem = styled.div<MasonryProps>`
    transition: all 300ms;
    position: relative;

    grid-row: ${(props) => props.orientation === 'horizontal' ? 'span 1 / span 1' : 'span 2 / span 2'};
`;
