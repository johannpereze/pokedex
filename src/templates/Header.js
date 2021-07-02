const Header = () => {
  const view = `
  <div class="header-ball"><p>Este es el header</p>
    <div class="header-ball__artwork">
    <!-- <span class="back-arrow"></span> Todavía no se modificar el template de acuerdo a la página. No se como ponerlo en pokeinfo y quitarlo en home -->
      <img src="artwork" alt="name">
      <div class="header-ball__button">
        <img src="sprite" alt="name">
      </div>
    </div>
  </div>`;
  return view;
};

export default Header;
