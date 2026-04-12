import styled from '@emotion/styled';

export const Container = styled('div')`
	width: 100%;
	margin: 0 auto;
	padding: 0 1rem;
	max-width: ${props => props.theme.breakpoints.values.xl};
`;
