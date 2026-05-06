'use client';

import clsx from 'clsx';
import { useState } from 'react';
import { css, styled } from 'styled-components';
import { LoadingDots } from './LoadingDots.js';

const ImageElement = styled.img`
    width: 100%;
    height: 100%;

    visibility: hidden;
    opacity: 0;
    transform: translateY(-10px);
    transition: all 300ms;

    &.loaded {
        visibility: visible;
        opacity: 1;
        transform: translateY(0px);
    }

    /* animation */
    &[data-animated=float] {}
`;

const ImageRoot = styled.div<{
    $aspectRatio?: string;
    $width?: string;
    $height?: string;
}>((props) => css`
    position: relative;
    width: ${props.$width ?? '100%'};
    height: ${props.$height ?? '100%'};
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    ${props.$aspectRatio ? `aspect-ratio: ${props.$aspectRatio};` : ''}
`);

export type ImageProps = {
    className?: string;
    aspectRatio?: string;
    width?: string;
    height?: string;
    loadingTransition?: 'translate' | 'fade' | 'none';
    hideLoader?: boolean;
    objectFit?: 'cover' | 'contain';
} & React.ComponentPropsWithRef<'img'>;

export const Image: React.FC<ImageProps> = ({
    className,
    aspectRatio,
    ...props
}) => {
    const [imageLoaded, setImageLoaded] = useState<boolean>(false);
    const isLoading = !props.hideLoader && !imageLoaded;

    return (
        <ImageRoot
            $width={props.width}
            $height={props.height}
            $aspectRatio={aspectRatio}
            className={clsx('Image-root', className)}
        >
            {isLoading && <LoadingDots className="absolute" />}
            <ImageElement
                // unoptimized
                alt={props.alt}
                src={props.src}
                loading="lazy"
                // layout="fill"
                // objectFit="cover"
                // loader={(props: { src: string }) => props.src}
                className={clsx({ loaded: imageLoaded })}
                onLoad={() => {
                    setImageLoaded(true);
                }}
            />
        </ImageRoot>
    );
};
