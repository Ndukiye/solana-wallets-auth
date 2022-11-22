import './App.css';

const App = () => {
  const connectPhantom = async() => {
       if ('phantom' in window) {
      const provider = window.solana;
      console.log(provider)
      if (provider.isPhantom) {
     let response = await  window.solana.connect();
         console.log("Phantom Connected successfully!!")
         console.log(
           'Connected to Phantom wallet with Public Key:',
           response.publicKey.toString()
         );
       }
    }else{
      alert("Phantom Wallet not found")
    }
   };
 
   const connectSolfare = async() => {
    console.log(window.solflare)
     if('solflare' in window) {
      window.solflare.connect();
      let response = await  window.solfare.connect();
      console.log("Solflare Connected successfully!!")
      console.log(
        'Connected to Solfare wallet with Public Key:',
        response.publicKey.toString()
      );
     }else{
       alert("Solflare wallet not found")
    };
};

  return (
    <div>
    <button onClick={connectPhantom}>Connect Phantom wallet</button>
    <button onClick={connectSolfare}>Connect Solfare wallet</button>
    </div>
  );
 }
// 
// 

export default App;
