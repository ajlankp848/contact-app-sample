import React from "react"
import Card from "./Card";
import Contacts from "../contacts";

function App(){
    
    return <div>
        <h1 className="heading">My Contacts</h1>
       <Card
       name={Contacts[0].name}
       image={Contacts[0].imgURL}
       tel={Contacts[0].phone}
       email={Contacts[0].email}
       >

       </Card>
       <Card
       name={Contacts[1].name}
       image={Contacts[1].imgURL}
       tel={Contacts[1].phone}
       email={Contacts[1].email}
       >

       </Card>
       <Card
       name={Contacts[2].name}
       image={Contacts[2].imgURL}
       tel={Contacts[2].phone}
       email={Contacts[2].email}
       >

       </Card>
    </div>
}
export default App;