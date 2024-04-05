import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PlaylistList from "./components/PlaylistList";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://103.183.75.112/api/directory/dataList"
        );
        const responseJson = await response.json();
        setData(responseJson.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((directory) => (
        <div key={directory.id}>
          <header>
            <Navbar logo={directory.logo} />
          </header>
          <main className="mb-16">
            <Hero
              title={directory.title}
              description={directory.description}
              banner={directory.banner}
            />
            <h2 className="mb-5 mt-8 text-center text-3xl font-bold text-[#67568c] md:text-4xl">
              PLAYLIST
            </h2>
            <PlaylistList playlist={directory.playlist} />
          </main>
          <footer className="">
            <Footer logo={directory.logo} />
          </footer>
        </div>
      ))}
    </div>
  );
}

export default App;
