import React from 'react';
import './App.css';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';


function App() {
  return (
    <Layout>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </Layout>
  );
}

export default App;
