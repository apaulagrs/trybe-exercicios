import React from 'react';
import Image from './Image';
import cat from './cat.jpg';

class App extends React.Component {
  render() {
    return (
      <main>
        <Image source={ cat } alternativeText= 'Cute cat staring' />
      </main>
    )
  }
}

/* function App() {
  return (
    <main>
      <Image source={ cat } alternativeText={ 'Cute cat staring' } />
    </main>
  );
} */

export default App;
