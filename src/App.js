import { Dowload, Features, SectionWrapper } from "./components";
import assets from "./assets";
import styles from "./styles/Global";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Koné Mory, Développeur web full-stack (M.E.R.N.)"
        description="Pour la conception de toutes vos applications (web et mobile), professionnelles, intuitives qui répondent à vos exigences!"
        showBtn
        mockupImg={assets.me}
        banner="banner"
      />
      <SectionWrapper
        title="Des applications au design sophistiqué"
        description="Une expérience utilisateur agréable, des couleurs agréables, excellente ergonomie. Des applications tout simplement agréables à utiliser"
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Contact"
        description={`Contactez-moi dès maintenant pour la conception de vos applications web et mobile. Tél: +225 07 09 14 97 47 | Email: konemory019@gmail.com | Site: en cours... `}
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Satisfaire le client est la devise"
        description="Toujours à l'écoute du client pour la réalisation de ses exigences. C'est la seule devise qui me motive"
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Dowload />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with love by{" "}
          <span style={{ fontWeight: "bold" }}>Koné Mory</span>
        </p>
      </div>
    </>
  );
};

export default App;
