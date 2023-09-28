import HeroSvg from "./components/HeroSvg";


function App() {
  return (
    <div className="App relative">
      <HeroSvg />
      <img
        src="/images/me.png"
        className="w-[15%] h-[40%] absolute right-[18%] bottom-[15%] "
      />
      <span>asdasdasd</span>
    </div>
  );
}

export default App;
