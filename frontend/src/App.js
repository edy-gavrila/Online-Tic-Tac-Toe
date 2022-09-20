import Footer from "./components/footer/Footer";
import { Navbar } from "./components/navbar/Navbar";
import PlayArea from "./components/playarea/PlayArea";
import UserList from "./components/userlist/UserList";

const styles = {
  app: "h-screen  min-w-[360px]",
  contentContainer:
    "flex flex-col sm:flex-row h-[90vh] sm:px-8 sm:py-8 overflow-hidden",
};

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <div className={styles.contentContainer}>
        <UserList userlist={{}} />
        <PlayArea
          gameData={{ player1: { name: "Roby" }, player2: { name: "Chad" }, nextPlayer: {name: "Chad", mark: "O"} }}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
