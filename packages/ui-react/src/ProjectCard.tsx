'use-client';

import {type ImageProps as NextImageProps} from 'next/image.js';
import {forwardRef} from 'react';
import {styled} from 'styled-components';
import {useWindowSize} from './hooks/useWindowSize.js';
import {Block} from './Block.js';
import {Container} from './Container.js';
import {Content} from './Content.js';
import {Image} from './Image.js';
import {Link} from './Link.js';
import {Typography} from './Typography.js';

type ProjectCardRef = HTMLDivElement | HTMLAnchorElement;

type ProjectCardProps = React.PropsWithChildren<{
    className?: string;
    orientation?: 'vertical' | 'horizontal';
    backgroundImage?: string;
    imageProps?: Partial<NextImageProps>;
    project: Work.Project;
}>;

const CardContainer = styled(Container)`
    padding-block: 1rem 3rem;
`;

export const ProjectCard = forwardRef<ProjectCardRef, ProjectCardProps>((props, ref) => {
    const {isGreaterMd} = useWindowSize();

    const orientationKey = props.orientation === 'vertical' ? 'indexp' : 'indexl';
    const imageSrc = props.project.image.sizes ? props.project.image.sizes[orientationKey] : props.project.image.url;

    const projectTags = props.project.tags.map((tag) => tag.name).join(', ');

    return isGreaterMd ? (
        <a
            ref={ref as React.ForwardedRef<HTMLAnchorElement>}
            href={`/work/${props.project.slug}`}
        >
            {props.project.image && (
                <Image
                    objectFit={'cover'}
                    width={'100%'}
                    aspectRatio={'1/1'}
                    alt={props.project.image.name ?? ''}
                    src={imageSrc ?? ''}
                />
            )}
            <div>
                <h3>
                    <span>{props.project.title}</span>
                </h3>
                <p>
                    <span>{projectTags}</span>
                </p>
            </div>
            {props.children}
        </a>
    ) : (
        <div ref={ref as React.ForwardedRef<HTMLDivElement>}>
            {props.project.image && (
                <Image
                    objectFit={'cover'}
                    width={'100%'}
                    aspectRatio={'4/3'}
                    alt={props.project.image.name ?? ''}
                    src={imageSrc ?? ''}
                />
            )}
            <Block>
                <CardContainer>
                    <Content>
                        <Typography variant={'h2'}>{props.project.title}</Typography>
                        <Typography variant={'body1'}>{projectTags}</Typography>
                        <Link
                            href={`/work/${props.project.slug}`}
                            icon={'close'}
                        >
                            {'Read More'}
                        </Link>
                    </Content>
                </CardContainer>
            </Block>
            {props.children}
        </div>
    );
});

ProjectCard.displayName = 'ProjectCard';
