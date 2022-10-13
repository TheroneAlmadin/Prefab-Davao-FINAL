import React from 'react';
import { Header, Button } from '../components';

console.log("TEST")
const Projects = () => (  
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Projects" />
      <Button
        color="#334155"
        text="+ Add Project"
        borderRadius="10px"
        cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
      />
    </div>
  );  
  

export default  Projects;
