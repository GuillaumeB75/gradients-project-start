const Footer = (props) => {
  const { children } = props;
  return (
    <footer className='container-fluid bg-dark p-3 text-white text-center'>
      {children}
    </footer>
  );
};
export default Footer;