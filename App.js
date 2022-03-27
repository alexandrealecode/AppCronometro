import React, { Component } from  'react';
import { 
  View, 
  Text, 
  StyleSheet,
  Image,
  TouchableOpacity 
} from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      botao: 'VAI'
    };

    //Variável do timer do relógio.
    this.timer = null;

    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  vai() {
    if(this.timer != null) {
      //Aqui vai parar o timer
      clearInterval(this.timer);
      this.timer = null;

      this.setState({botao: 'VAI'});
    }else{

      //Começa girar o timer
      this.timer = setInterval( ()=> {
        this.setState({numero: this.state.numero + 0.1})
      }, 100);

      this.setState({botao: 'PARAR'});
    }
    
  }

  limpar() {
    if(this.timer != null) {
      //Aqui vai parar o timer
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      numero: 0
    })
  }

  render() {
    return(
      <View style={styles.container}>
       
        <Image 
          source={require('./src/cronometro.png')}
          style={styles.cronometro}
        />

        <Text style={styles.timer}> {this.state.numero.toFixed(1)} </Text>

        <View style={styles.btnArea}>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnTexto} onPress={this.vai}>VAI</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={this.limpar}>
            <Text style={styles.btnTexto}>LIMPAR</Text>
          </TouchableOpacity>

        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef',
  },
  timer: {
    marginTop: -170,
    color: '#FFF',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    width: 150,
    margin: 17,
    borderRadius: 9
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  },
  cronometro: {
    marginTop: -160,
    padding: 50,
    width: 250,
    height:300
  }
});

export default App;






//=======Trabalhando com botões=====================================

/*
import React, { Component } from  'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: ''
    };

    this.entrar = this.entrar.bind(this);
  }

  entrar() {
    if(this.state.input === '' ||this.state.input === undefined) {
      alert('Digite seu nome!');
      return;
    }
    this.setState({nome: 'Bem-vindo: ' + this.state.input});
  }

  render() {
    return(
      <View style={styles.container}>

        <TextInput 
          style={styles.input}
          placeholder="Digite seu nome?"
          underlineColorAndroid="transparent"
          onChangeText={ (texto) => this.setState({input: texto}) }
        />

        <Button  title='Entrar' onPress={this.entrar}/>

        <Text style={styles.texto}>{this.state.nome}</Text>

    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    marginTop: 40,
    fontSize: 20,
    padding: 10,
  },
  texto: {
    textAlign: 'center',
    fontSize: 25
  },
});

export default App;







//======= Praticando Flex e Alinhamentos=====================================


import React, { Component } from  'react';
import { View, Text, StyleSheet } from 'react-native';

class App extends Component {
  render() {
    return(
      <View style={{flex: 1, 
                    flexDirection: 'row', 
                    justifyContent: 'space-around', 
                    alignItems: 'center'
                    }}>

        <View style={{width: 50, height: 50, backgroundColor: 'green'}}></View>

        <View style={{width: 50, height: 50, backgroundColor: 'red'}}></View>
 
        <View style={{width: 50, height: 50, backgroundColor: 'yellow'}}></View> 

    </View>
    );
  }
}

export default App;




//====== Tamanhos Dinâmicos e fixos=========================================


import React, { Component } from  'react';
import { View, Text, StyleSheet } from 'react-native';

class App extends Component {
  render() {
    return(
      <View style={{flex: 1, backgroundColor: '#222'}}>

        <View style={{height: 65, backgroundColor: '#3fb3'}}></View>

        <View style={{flex: 1, backgroundColor: 'white'}}></View>

        <View style={{height: 65, backgroundColor: '#3fb3'}}></View> 

    </View>
    );
  }
}

export default App;






//======Aplicando grupos de estilo=============================================


import React, { Component } from  'react';
import { View, Text, StyleSheet } from 'react-native';

class App extends Component {

  render() {
    return(
      <View style={styles.container}>
  
        <Text style={[styles.alinhaTexto, styles.textPrincipal]}>Eu sou texto 1</Text>
        <Text style={styles.alinhaTexto}>Eu sou texto 2</Text>
        <Text>Eu sou texto 3</Text>
        <Text>Eu sou texto 4</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40
  },
  textPrincipal: {
    fontSize: 25,
    color: 'red'
  },
  alinhaTexto: {
    textAlign: 'center'
  }

});


export default App;





//=======Entendendo Props=========================================

import React, { Component } from  'react';
import { View, Text, Button } from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: ''
    };

    this.entrar = this.entrar.bind(this);
  }

  entrar(nome) {
    this.setState({
      nome: nome
    })
  }

  render() {
    return(
      <View style={{ marginTop: 20 }}>

        <Button  title='Entrar' onPress={ () => this.entrar('Algum texto')} />

        <Text style={{ fontSize: 23, color: 'red', textAlign: 'center' }}> 
          {this.state.nome} 
        </Text>
      </View>
    );
  }
}


export default App;*/
