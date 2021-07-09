import randomId from "@utils/randomId";

const Home = async () => {
  const Id = await randomId();
  const view = `
        <div class="social-menu">
            <a href="https://github.com/johannpereze/" target="_blank"><img src="./assets/images/icons/github.svg" alt="github"></a><a href="https://www.youtube.com/c/JohannPerezE"  target="_blank"><img src="./assets/images/icons/youtube.svg" alt="youtube"></a><a href="https://www.instagram.com/johannpereze/" target="_blank"><img src="./assets/images/icons/instagram.svg" alt="instagram"></a>
        </div>
        <div class="home-menu">
            <a href="#/${Id}/">
                <div class="home-menu__card">
                    <h2>Random Pokemon</h2>
                    <h3>Discover a new one</h3>
                </div>
            </a>
        </div>
    `;
  return view;
};

export default Home;
