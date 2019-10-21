import React from 'react';
import './App.css';
import Button from './Button.js';
import Territory from './Territory.js';
import Infos from './Infos.js';

class App extends React.Component{
constructor(props) {
  super(props);

this.state = {
  isAttack: false,
  isMove: false
}
}


alert = () => {
  alert(`${this.value}`)
  }

attack = () => {
this.setState({isAttack: true});
alert(`${this.value}`)
}

move = () => {
this.setState({isMove: true});
alert(`${this.value}` )
}

suivant = () => {
alert(`${this.value}`)
}

  render() {
    const isAttack = this.state.isAttack;
    let button;

  if (isAttack) {
      button = <Button value="send" />
    } 

   return (
<div> 
<Infos value="players" info="tous les players"/>
<Infos value="info" info="infos générales"/>

<div className="carte">
<Territory action={this.alert} color="epinards" value="épinards" int="" player="" family="légume"/>
<Territory action={this.alert} color="framboise" value="framboise" int="" player="" family="fruit"/>
<Territory action={this.alert} color="kiwi" value="kiwi" int="" player="" family="fruit"/>
<Territory action={this.alert} color="foie_gras" value="foie gras" int="" player="" family="viande"/>
<Territory action={this.alert} color="aubergine" value="aubergine" int="" player="" family="légumes"/>
<Territory action={this.alert} color="jambon" value="jambon" int="" player="" family="fruit"/>
<Territory action={this.alert} color="poivron" value="poivron" int="" player="" family="légume"/>
<Territory action={this.alert} color="saucisse" value="saucisse" int="" player="" family="viande"/>
<Territory action={this.alert} color="abricot" value="abricot" int="" player="" family="fruit"/>
</div>
<Button action={this.attack} value="attack" />
<Button action={this.move} value="move"/>
<Button action={this.suivant} value="Suivant" />
{button}
</div>
    )
  }
}

export default App;