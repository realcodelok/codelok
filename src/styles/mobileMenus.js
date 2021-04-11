import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
	mobileMenus: {
		width: '100%',
        flexDirection: 'column',
		boxShadow: `rgba(0,0,0,0.2) -20px 26px 20px, rgba(0,0,0,0.2) 2px 6px 5px`,
        boxShadow: `0px 9px 10px rgb(0 0 0 / 25%)`,
        position: "absolute",
        top: 0,
        zIndex: 1500,
        background: "white",
        top: theme.dimensions.headerHeight,
        borderTop: "1px solid #ccc",
        
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
		'& a': {
			padding: '10px 20px',
			fontSize: '14px',
			'&:hover': {
				background: theme.palette.primary.hoverBg,
				color: theme.palette.primary.hoverColor,
			},
		},
		
	},
}));
