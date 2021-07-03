import randomId from "../utils/randomId";

const Home = async () => {
    const Id = await randomId();
    const view = `
        <div class="social-menu">
            <a href="https://github.com/johannpereze/" target="_blank"><img src="./assets/images/icons/github.svg" alt="github"></a><a href="https://www.youtube.com/c/JohannPerezE"  target="_blank"><img src="./assets/images/icons/youtube.svg" alt="youtube"></a><a href="https://www.instagram.com/johannpereze/" target="_blank"><img src="./assets/images/icons/instagram.svg" alt="instagram"></a>
        </div>
        <div><a href="#/${Id}/">Busca al azar</a></div>
        <div>Busca por número</div>
    `;
    return view;
}

export default Home;
