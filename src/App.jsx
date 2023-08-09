import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import "@fontsource-variable/inter";

function App() {
  return (
    <div className="my-20 max-w-5xl mx-5 md:mx-10 lg:mx-auto">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
// className="mx-2 my-20 md:mx-10 lg:mx-[5vw] xl:mx-[10vw] 2xl:mx-[15vw]"
