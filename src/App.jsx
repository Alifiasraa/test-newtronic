import { useState, useEffect } from "react";
// import Footer from "./components/Footer";
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
          <main className="h-screen mb-32">
            <Hero title={directory.title} description={directory.description} />
            <h2 className="text-center mt-8 mb-5 font-bold text-[#67568c] text-2xl">
              PLAYLIST
            </h2>
            <PlaylistList playlist={directory.playlist} />
          </main>
          <footer>{/* <Footer /> */}</footer>
        </div>
      ))}
    </div>
  );
}

export default App;
