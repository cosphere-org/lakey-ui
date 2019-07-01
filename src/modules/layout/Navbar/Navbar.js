// import React from 'react';
// import {
//   Button,
//   Container,
//   Menu,
// } from 'semantic-ui-react';
// import { Link } from 'gatsby';

// import PropTypes from 'prop-types';

// import CatalogSearch from 'src/modules/catalog/components/CatalogSearch';

// import LakeyLogoBig from 'src/modules/utils/components/LakeyLogoBig';

// export const Navbar = ({ fixedMenu }) => (
//   <Menu
//     fixed={fixedMenu ? 'top' : null}
//     secondary={!fixedMenu}
//     size="large"
//     borderless
//   >
//     <Container style={{ zIndex: 1, minHeight: 70 }}>
//       {fixedMenu && (
//         <>
//           <Menu.Item>
//             <Link style={{ width: 50 }} to="/">
//               <LakeyLogoBig />
//             </Link>
//           </Menu.Item>
//           <Menu.Item style={{ margintTop: '2.5em' }}>
//             <CatalogSearch />
//           </Menu.Item>
//         </>
//       )}

//       <Menu.Item position="right">
//         <Button as="a" basic={!fixedMenu} color="black">
//           Log in
//         </Button>
//         <Button
//           as="a"
//           style={{ marginLeft: '0.5em' }}
//           basic={!fixedMenu}
//           color="blue"
//         >
//           Sign Up
//         </Button>
//       </Menu.Item>
//     </Container>
//   </Menu>
// );

// Navbar.propTypes = {
//   fixedMenu: PropTypes.bool,
// };

// export default Navbar;
