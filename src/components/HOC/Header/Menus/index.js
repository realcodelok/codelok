import { Box, makeStyles } from "@material-ui/core";
import Link from "next/link";

const Menus = (classes) => {
  return (
    <Box
      display="flex"
      justifyContent="flex-end"
      className={classes.headerMenus}
    >
      <Link href="/">Home</Link>
      <Link href="/services">Services</Link>
      <Link href="/our-works">Our Works</Link>
      <Link href="/contact-us">Contact Us</Link>
      <Link href="/about-us">About Us</Link>
    </Box>
  );
};

export default Menus;
