import {css} from '@emotion/react';
import styled from '@emotion/styled';
import clsx from 'clsx';
import {type FC} from 'react';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type HeadingProps = BaseComponentProps & {
	readonly level?: HeadingLevel;
	readonly isCentered?: boolean;
	readonly isContrast?: boolean;
	readonly hasMargin?: boolean;
};

const BaseElement = styled.span<HeadingProps>(props => css`
	--type-heading-font-size: var(--type-heading-font-size-small-${props.level});

	@media screen and (min-width: 425px) {
		--type-heading-font-size: var(--type-heading-font-size-medium-${props.level});
	}

	@media screen and (min-width: 768px) {
		--type-heading-font-size: var(--type-heading-font-size-large-${props.level});
	}

	margin: unset;
	font-family: var(--type-heading-font-family);
	font-weight: var(--type-heading-font-weight);
	line-height: var(--type-heading-font-leading);
	color: var(--color-text-primary);

	${props.isCentered && 'text-align: center;'}
	${props.isContrast && 'color: var(--color-text-contrast);'}
	${props.hasMargin && 'margin-block: var(--type-heading-font-margin-top) var(--type-heading-font-margin-bottom);'}
	${props.level === 1 && 'font-size: var(--type-heading-font-size-large-1);'}
`);

export const Heading: FC<HeadingProps> = props => {
	const resolvedLevel = props.level ?? 6;
	const resolvedComponent = `h${resolvedLevel}` as const;

	return (
		<BaseElement
			as={resolvedComponent}
			{...props}
		>
			{props.children}
		</BaseElement>
	);
};
