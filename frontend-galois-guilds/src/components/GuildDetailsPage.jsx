// GuildDetailsPage.js
import React, { useState, useEffect } from 'react';
import { Database } from "@tableland/sdk";
import { useParams } from 'react-router-dom';
import GuildCard from './GuildCard';
import PostCreator from './PostCreator';

const GuildDetailsPage = ({provider, defaultAccount }) => {
    const [signer, setSigner] = useState(); 
    const [guild, setGuild] = useState();
    const [results, setResults] = useState(null);
    const { guildId } = useParams()
    const [postUpload, setPostUpload] = useState(null);
    

    async function handleInsert(formData) {
        // You can add your logic here to insert data into the SQL database
        console.log('Inserting data:', formData);
        if(defaultAccount==null){
            defaultAccount = "Anonymous"
        }
        const insertSQL = `INSERT INTO posts_11155111_271 (user, payload, guild_id)
        VALUES
          ('${defaultAccount}', '${formData}',${guildId});`  
        handleConnect(insertSQL, setPostUpload);
        
      };


    async function connectDatabase(signer) {
        // Establish a connection with the database
        const db = new Database();
        // Return the database instance
        return db;
      }
    
      // Modify the SQL query to select specific columns from the posts table
      const sqlQuery = `
  SELECT id_post, user, payload
  FROM posts_11155111_271
  WHERE guild_id = ${guildId}
`;

      const GuildQuery =`
      SELECT *
      FROM guilds_11155111_270
      WHERE id_guild = ${guildId}
    ` 
    async function handleConnect(sqlQuery, setFunction) {
        // Connect a signer
        const database = await connectDatabase(signer);


        // Replace ":guildId" with the actual value of the guild_id you want to filter
        const params = { ":guildId": guildId }; // Replace yourGuildIdVariable with the actual guild_id value
        try {
            const { results } = await database.prepare(sqlQuery, params).all();
            console.log("query:" , sqlQuery)
            console.log(results);
            setFunction(results);
    
            return results;
            
        } catch (error) {
            console.warn(error) 
        }
    }

    useEffect(() => {
        // Extract the guild ID from the URL parameter
        handleConnect(sqlQuery, setResults);
        handleConnect(GuildQuery, setGuild);
    }, [guildId]);



    return (
        <div className='h-screen space-y-4 '>
            {guild ? (
                <>
                <GuildCard message={guild[0].description} title={guild[0].name} className="justify-center" />
                <div>
    </div>
    <PostCreator onCreatePost={handleInsert} />

                    <div>
                        <h1 className='mx-auto'>
                            All posts:
                        </h1>
                        {results ? results.map((item, index) => (
                            <div key={index} className='card w-auto bg-base-300 shadow-xl'>
                                <div className='card-body'>

                                    <h2 className="card-title">by: {item.user}</h2>
                                    <p>
                                        {item.payload}  
                                    </p>

                                </div>
                            </div>
))
: <></>
}
                    </div>
                </>
            )
                : (
                    <div>Loading...</div>
                )}


        </div>
    );
};

export default GuildDetailsPage;
