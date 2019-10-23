import React from 'react';
import './App.css';
import Button from './Button.js';
import Territory from './Territory.js';
import Infos from './Infos.js';
import Input from './Input.js';

class App extends React.Component{
constructor(props) {
  super(props);
  this.action = this.action.bind(this)
this.state = {
  isAttack: false,
  isMove: false,
  //action: action
}
}
attack = () => {
this.setState({isAttack: true});
}

move = () => {
alert(`${this.value}` )
}

suivant = () => {
alert(`${this.value}`)
}

action = () => {
  alert('Oui ?')
}

// attackhere = () => {
//   info = <Infos>vous avez choisi d'attaquer {this.value}</Infos>
//   input = <Input />;
// }


  render() {
  //   const isAttack = this.state.isAttack;
    
  //   let button;
  //   let input;
  //   let action;

  //   let info;


  // if (isAttack) {
  //     alert("choisissez un territoire")
  //     action = 
  //     } else {

  //       action = () => {
  //         alert('Oui ?')
  //       }
        
      
  //   } 

   return (
<div> 
<Infos value="players" info="tous les players"/>
<Infos value="info" info="infos générales"/>
<div className="carte">
<Territory action={this.action} color="epinards" value="épinards" int="" player="" family="légume"/>
<Territory action={this.action} color="framboise" value="framboise" int="" player="" family="fruit"/>
<Territory action={() => this.action()} color="kiwi" value="kiwi" int="" player="" family="fruit"/>
<Territory action={() => this.action()} color="foie_gras" value="foie gras" int="" player="" family="viande"/>
<Territory action={() => this.action()} color="aubergine" value="aubergine" int="" player="" family="légumes"/>
<Territory action={() => this.action()} color="jambon" value="jambon" int="" player="" family="fruit"/>
<Territory action={() => this.action()} color="poivron" value="poivron" int="" player="" family="légume"/>
<Territory action={() => this.action()} color="saucisse" value="saucisse" int="" player="" family="viande"/>
<Territory action={() => this.action()} color="abricot" value="abricot" int="" player="" family="fruit"/>
</div>
<Button action={this.attack} value="attack" />
<Button action={this.move} value="move"/>
<Button action={this.suivant} value="Suivant" />
{/* {input}
{button}
{info} */}

</div>
    )
  }
}

export default App;