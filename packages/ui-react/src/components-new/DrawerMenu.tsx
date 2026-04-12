import {DrawerContent} from './DrawerContent';
import {MenuTrigger} from './MenuTrigger';
import {type Action, type NavItemOptions} from '../types/general';
import Close from '@mui/icons-material/Close';
import Menu from '@mui/icons-material/Menu';
import {useState, type FC, type MouseEventHandler} from 'react';
import styled from '@emotion/styled';
import {animated, useSpring} from '@react-spring/web';

export type DrawerMenuProps = {
	readonly items?: NavItemOptions[];
	readonly actions?: Action[];
	readonly isOpen?: boolean;
	// readonly onClose?: () => void;
};

export const contentBoxPadding = '1rem';

const Drawer = styled(animated.div)`
	position: fixed;
	height: 100%;
	min-width: 20rem;
	top: 0;
	left: 0;
`;

export const DrawerMenu: FC<DrawerMenuProps> = ({
	items, actions, isOpen,
}) => {
	const [open, setOpen] = useState<boolean>(isOpen ?? false);
	const [drawerSpring] = useSpring(() => ({
		x: open ? '0' : '-100%',
	}), [open]);

	const handleOpen: MouseEventHandler<HTMLButtonElement> = () => {
		setOpen(true);
	};

	const handleClose: MouseEventHandler<HTMLButtonElement> = () => {
		setOpen(false);
	};

	return (
		<>
			<MenuTrigger
				size='small'
				className='MenuTrigger-root'
				onClick={handleOpen}
			>
				{open ? <Close/> : <Menu/>}
			</MenuTrigger>
			<Drawer style={drawerSpring}>
				<DrawerContent
					navigationItems={items}
					actions={actions}
					onCloseButtonClick={handleClose}
				/>
			</Drawer>
		</>
	);
};
