import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
	contactUsContainer: {
		paddingBottom: '30px',
	},
	root: {
		flexGrow: 1,
		padding: 0,
	},
	upperTitleText: {
		padding: '10px 20px',
	},
	title1: {
		display: 'flex',
		alignItems: 'baseline',
		padding: '0',
		fontFamily: 'Poppins Medium',
		fontSize: '3.75rem',
	},
	title11: {
		fontSize: '1.8rem',
		padding: 0,
		margin: 0,
		fontFamily: 'Poppins',
	},
	title2: {
		marginLeft: '5px',
		marginTop: '0',
		fontFamily: 'Poppins',
	},
	imageAndCompanyProfileSection: {
		padding: '20px',
	},
	leftImage: {
		width: '100%',
	},
	companyDetails: {
		color: theme.palette.primary.color,
		textAlign: 'center',
	},
	companyDomain: {
		align: 'center',
		textAlign: 'center',
		margin: '0 auto',
		borderBottom: `2px solid ${theme.palette.primary.color}`,
		width: 'fit-content',
		marginBottom: '5px',
		fontFamily: 'Poppins Semi-Bold',
	},
	companyAddress: {
		fontFamily: 'Poppins',
	},
	companyPincode: {
		fontFamily: 'Poppins',
	},
	companyEmail: {
		fontFamily: 'Poppins',
	},
	inputBox: {
		width: '100%',
		marginTop: '5px',
	},
	input: {
		width: '100%',
		outline: 'none',
		background: 'transparent',
		padding: '8px 20px',
		fontSize: '16px',
		boxShadow: 'none !important',
		borderWidth: '2px',
		borderStyle: 'solid',
		borderImage: `linear-gradient( to right, ${theme.palette.primary.color}, ${theme.palette.secondary.main}, ${theme.palette.primary.color}) 1 round`,
		'&:focus': {
			borderWidth: '3px',
			borderImage: `linear-gradient( to right, ${theme.palette.secondary.main}, ${theme.palette.primary.color}, ${theme.palette.secondary.main}) 1 round`,
		},
	},
	formInputContainer: {
		padding: '0 20px',
	},
	formContainer: {
		padding: '0 40px',
		[theme.breakpoints.down('xs')]: {
			padding: 0,
		},
	},
	inputLabel: {
		fontSize: '16px',
		marginTop: '10px',
		fontFamily: 'Poppins Medium',
	},
	checkboxListContainer: {
		marginTop: '10px',
	},
	messageTextArea: {
		marginTop: '5px',
		borderWidth: '2px',
		borderStyle: 'solid',
		outline: 'none',
		width: '100%',
		padding: '10px 10px',
		fontSize: '14px',
		fontFamily: 'Poppins Medium',
		borderImage: `linear-gradient( to right, ${theme.palette.primary.color}, ${theme.palette.secondary.main}, ${theme.palette.primary.color}) 1 round`,
		'&:focus': {
			outline: 'none',
			borderImage: `linear-gradient( to right, ${theme.palette.secondary.main}, ${theme.palette.primary.color}, ${theme.palette.secondary.main}) 1 round`,
		},
	},
	buttonContainer: {
		marginTop: '20px',
		display: 'flex',
		justifyContent: 'flex-end',
		width: '100%',
	},
	submitButton: {
		background: `linear-gradient( 25deg,${theme.palette.primary.color}, ${theme.palette.secondary.main})`,
		textTransform: 'uppercase',
		color: theme.palette.primary.main,
		letterSpacing: '.18rem',
		fontSize: '16px',
		padding: '5px 18px',
		textAlign: 'center',
		fontFamily: 'Poppins Semi-Bold',
	},
}));
