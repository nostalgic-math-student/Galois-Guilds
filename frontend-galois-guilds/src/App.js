import { Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import GuildExplorer from "./components/GuildExplorer";
import GuildCreator from "./components/GuildCreator";

export default function App() {
  return (
    <div>
            <Routes>
        <Route path="/" element={<Home/>}>
          <Route index element={<GuildExplorer/>}/>
          <Route path="guild-creator" element={<GuildCreator/>}/>
        </Route>
      </Routes>
    </div>
  );
}