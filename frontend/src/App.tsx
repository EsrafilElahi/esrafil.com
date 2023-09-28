import HeroSvg from "./components/HeroSvg";

function App() {
  return (
    <div className="App relative">
      <HeroSvg />
      <img
        src="/images/me.png"
        className="w-[15%] h-[40%] absolute right-[18%] bottom-[15%] "
      />

      <div className="absolute top-[35%] left-[5%]">
        <h1 className="text-8xl">Esrafil Elahi</h1>
        <h2 className="text-4xl mt-1 mb-5">Senior Frontend Engineer</h2>
        <button className="btn">About Me</button>
        {/* <p className="max-w-lg">
          As a dedicated and adaptable skillled frontend engineer, I'm currently
          pursuing my master's degree in software engineering. With a strong
          commitment to excellence, I thrive in fostering inter-team
          coordination. Challenges excite me, and I have a passion for solving
          complex problems and debugging issues to create seamless user
          experiences.
        </p> */}
      </div>
    </div>
  );
}

export default App;
