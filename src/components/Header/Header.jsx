const Header = ({ className }) => {
  return (
    <header className={className}>
      <img src="/logo.png" alt="MoviePicker logo" />
      <a
        href="https://github.com/arobri67/movie-picker"
        rel="noopener"
        target="_blank"
      >
        View on Github
      </a>
    </header>
  );
};

export default Header;
