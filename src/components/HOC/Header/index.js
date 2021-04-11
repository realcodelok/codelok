import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { Image, Row } from 'react-bootstrap';
import { Box, Grid } from '@material-ui/core';
import Menus from './Menus';
import MobileMenus from './MobileMenus';
import clsx from 'clsx';
import useStyles from '../../../styles/header';

export default function Header() {
	const classes = useStyles();

	const [isMobileMenuOpened, setMobileMenuOpened] = useState(false);

	const handleMobileMenusRender = (boolVal) => {
		setMobileMenuOpened(boolVal);
	};

	return (
		<Grid container direction="row" justify="center" alignItems="center" className={classes.grow}>
			<AppBar position="fixed" className={classes.header}>
				<Toolbar className={classes.toolbar}>
					<Image className={classes.appLogo} src="/assets/svg/app-logo.svg" alt="codelok logo" />
					<Row className={classes.grow} />
					<Row className={clsx(classes.sectionDesktop)}>{Menus(classes)}</Row>
					<Box fluid="true" className={classes.sectionMobile}>
						<IconButton
							aria-label="show more"
							aria-haspopup="true"
							color="inherit"
							size="medium"
							onClick={() => handleMobileMenusRender(!isMobileMenuOpened)}
						>
							<Image
								className={classes.menuButton}
								src={`/assets/svg/${isMobileMenuOpened ? 'close-button.svg' : 'menu-button.svg'}`}
								alt="menu button"
							/>
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>
			{isMobileMenuOpened && <MobileMenus />}
		</Grid>
	);
}
