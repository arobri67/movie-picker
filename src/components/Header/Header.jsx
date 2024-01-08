const Header = ({ className }) => {
  return (
    <header className={className}>
      <nav>
        <img src="/logo.png" alt="MoviePicker logo" />
        <a href="https://github.com/arobri67" rel="noopener" target="_blank">
          View on Github
        </a>
      </nav>
    </header>
  );
};

export default Header;
