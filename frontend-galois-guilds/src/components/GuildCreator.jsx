import React, { useEffect, useState } from 'react';
import { Database } from '@tableland/sdk';

const GuildCreator = () => {
  
  const [signer, setSigner] = useState(); 
  const [GuildTitle, setGuildTitle] = useState('');
  const [GuildContent, setGuildContent] = useState('');
  const [GuildAddress, setGuildAddress] = useState('');
  const [Guild, setGuild] = useState(null);

  const handleGuildChange = (e) => {
    setGuildContent(e.target.value);
  };

  const handleTitleChange = (e) => {
    setGuildTitle(e.target.value);
  };
  const handleAddressChange = (e) => {
    setGuildAddress(e.target.value);
  };

  const handleCreateGuild = () => {
    // Call the callback function to create the post with the entered content
    onCreateGuild(GuildTitle, GuildContent, GuildAddress);

    // Clear the input field
    setGuildContent('');
    setGuildTitle('');
    setGuildAddress('');
  };

  async function onCreateGuild(GuildTitle, GuildContent) {
    // You can add your logic here to insert data into the SQL database
    console.log('Creating Guild:', GuildTitle);
    const insertSQL = `INSERT INTO guilds_11155111_270 (name, description, dao_address)
    VALUES
      ('${GuildTitle}', '${GuildContent}',${GuildAddress});` 

    handleConnect(insertSQL, setGuild);
    
  };


async function connectDatabase(signer) {
    // Establish a connection with the database
    const db = new Database();
    // Return the database instance
    return db;
  }

async function handleConnect(sqlQuery, setFunction) {
    // Connect a signer
    const database = await connectDatabase(signer);


    // Replace ":guildId" with the actual value of the guild_id you want to filter
    
    try {
        const { results } = await database.prepare(sqlQuery).all();
        console.log("query:" , sqlQuery)
        console.log(results);
        setFunction(results);

        return results;
        
    } catch (error) {
        console.warn(error) 
    }
}

  return (
    <div className='mx-auto text-center mt-8 space-y-6 block'>
      <h2 className='font-bold text-3xl'>
        You can create your own decentralized Guild!
      </h2>

      <textarea className='input input-bordered max-w-xs'
        value={GuildTitle}
        onChange={handleTitleChange}
        placeholder="Enter your Guild Name"
      />
      <textarea className='input input-bordered max-w-xs'
        value={GuildContent}
        onChange={handleGuildChange}
        placeholder="Enter your Guild description"
      />
      <textarea className='input input-bordered max-w-xs'
        value={GuildAddress}
        onChange={handleAddressChange}
        placeholder="Enter your Guild DAO Address"
      />

      <button onClick={handleCreateGuild} className='btn btn-accent'>Create Guild</button>

    

    </div>
  );
};

export default GuildCreator;
