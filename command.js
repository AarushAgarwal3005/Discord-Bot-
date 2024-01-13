const { REST, Routes } =require('discord.js');

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken('MTE5NDIxNzQ0Mzg0MTgyMjcyMA.Grh0OI.1g-pf0x_3dvncw9DJjGlPc63EtPBLP79sxxFSI');

(async()=>{
try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands('1194217443841822720'), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
  })();