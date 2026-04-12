import styled from '@emotion/styled';
import {type FC, type PropsWithChildren} from 'react';
import {type Action} from '../types/general';
import {Block} from './Block';
import {Container} from './Container';
// import {type IconButtonBaseProps} from '@components/IconButtonBase';

export type BannerProps = PropsWithChildren<{
	readonly actions?: Action[];
}>;

const BannerTextContent = styled.span`
	font-size: 14px;
	font-weight: 500;
	line-height: var(--height-small-input);
	text-align: center;
`;

const BannerBlock = styled(Block)`
	background-color: var(--color-brand-primary-light);
`;

const BannerContainer = styled(Container)`
	padding-block: 0.5rem;
	color: white;
`;

export const Banner: FC<BannerProps> = ({actions, children}) => {
	const resolvedTitle = typeof children === 'string' ? children : '';

	return (
		<BannerBlock role='alert' title={resolvedTitle}>
			<BannerContainer>
				<BannerTextContent>{children}</BannerTextContent>
			</BannerContainer>
		</BannerBlock>
	);
};
