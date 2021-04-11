import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
		position: 'relative',
		top: 0,
		right: 0,
		left: 0,
        height: theme.dimensions.headerHeight,
	},
	header: {
		zIndex: 1500,
	},
	toolbar: {
		padding: '0 5%',
	},
	appLogo: {
		width: '50px',
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
	menuButton: {
		color: 'red',
		width: '18px',
	},

	headerMenus: {
		width: '100%',
		'& a': {
			marginRight: '3px',
			color: theme.palette.primary.color,
			padding: '3px 15px',
			fontSize: '14px',

			'&:hover': {
				color: theme.palette.primary.hoverColor,
			},
		},
	},
}));
