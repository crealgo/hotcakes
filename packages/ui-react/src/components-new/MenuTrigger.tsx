import {styled} from '@mui/material';
import {IconButtonBase} from '@components/IconButtonBase';

export const MenuTrigger = styled(IconButtonBase)`
	grid-area: mobile-menu;

	&:hover {
		background-color: var(--color-brand-key-lighter);
	}
`;
