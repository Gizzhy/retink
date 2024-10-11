import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Hero from "./components/Hero";
import "./styles/home.css";
import Body from "./components/Body";

export default function Home() {
  return (
    <>
      <Sidebar />
      <main className="main-page">
        <Navbar />
        <Hero />
        <Body />
      </main>
    </>
  );
}
