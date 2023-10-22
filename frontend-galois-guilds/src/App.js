import { useState } from "react";
import { Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import GuildExplorer from "./components/GuildExplorer";
import GuildCreator from "./components/GuildCreator";
import GuildDetailsPage from "./components/GuildDetailsPage";


export default function App() {

  const [provider, setProvider] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);

  const handleConnection = (connectedProvider, account) => {
    setProvider(connectedProvider);
    setDefaultAccount(account);
  };

  return (
    <div>

<Navbar onConnect={handleConnection}/>
            <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<GuildExplorer provider={provider} defaultAccount={defaultAccount}/>}/>
          <Route path="/guild/:guildId" element={<GuildDetailsPage provider={provider} defaultAccount={defaultAccount} />} />
          <Route path="guild-creator" element={<GuildCreator/>}/>
        </Route>
      </Routes>
    </div>
  );
}