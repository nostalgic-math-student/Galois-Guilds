import React, { useEffect, useState } from 'react';
import GuildCard from './GuildCard';

import { Database } from "@tableland/sdk";


const GuildExplorer = ({ provider, defaultAccount }) => {

  const [signer, setSigner] = useState();
  const [database, setDatabase] = useState(null);
  const [results, setResults] = useState([]);

  async function connectDatabase(signer) {
    // Establish a connection with the database
    const db = new Database();
    // Return the database instance
    return db;
  }

  async function handleConnect() {
    // Connect a signer
    const database = await connectDatabase(signer);
    const { results } = await database.prepare(`SELECT * FROM guilds_11155111_270`).all();
    console.log(results);
    // Connect and interact with the database
    setDatabase(database);
    setResults(results);
    console.log(database)
    return results;
  }


  return (
    <div className='text-center my-8 space-y-12' >
      <h2 className='text-3xl font-bold'>
Check out our Available Guilds!
      </h2>


{results.map((item, index) => (
  <GuildCard key={index} message={item.description} title={item.name} guildId={item.id_guild} final_message={"Connect now!"} >
  </GuildCard>
))}

      <div className=' btn btn-secondary' onClick={handleConnect}> Reload </div>

      {/* 
      {results ? results.map((element)=> {
        <h1>
          {element}
          </h1>

      })
      : 
      (
        <div className=' btn btn-secondary' onClick={handleConnect}> Reload </div>
        )
    }  */}

    </div>
  );
};

export default GuildExplorer