import { Box } from '@material-ui/core';
import Link from 'next/link';
import useStyles from '../../../../styles/mobileMenus';

// export default function MobileMenus(classes) {
  export default function MobileMenus() {
	const classes = useStyles();
	return (
		<Box display="flex" justifyContent="flex-end" className={classes.mobileMenus}>
			<Link href="/">Home</Link>
			<Link href="/services">Services</Link>
			<Link href="/our-works">Our Works</Link>
			<Link href="/contact-us">Contact Us</Link>
			<Link href="/about-us">About Us</Link>
		</Box>
	);
}
