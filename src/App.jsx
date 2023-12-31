import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import "@fontsource-variable/inter";

function App() {
  return (
    <div className="mt-8 mb-20 md:my-20 max-w-6xl mx-5 md:mx-10 lg:mx-auto lg:px-4 relative">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
// className="mx-2 my-20 md:mx-10 lg:mx-[5vw] xl:mx-[10vw] 2xl:mx-[15vw]"
