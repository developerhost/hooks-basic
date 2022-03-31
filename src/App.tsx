import React, {useState} from 'react';
// import { AuthProvider } from './context/AuthContext';
import './App.scss';
// import UserAuth from './components/userAuth/UserAuth';
// import Bank from './pages/bank/Bank'
import Title from './components/title/Title'
import SubTitle from './components/subTitle/SubTitle';
import Counter from './components/counter/Counter';
import Button from './components/button/Button';



function App() {
  const [countA, setCountA] = useState<number>(0);
  const [countB, setCountB] = useState<number>(0);

  const handleCountUpA = () => {
    setCountA(countA + 1);
  };
  const handleCountUpB = () => {
    setCountB(countB + 1);
  };

  console.log("--------------");
  

  return (
    <div className="App">
      <Title titleText={'#6 useCallback'} />
      <SubTitle subTitleText={'アンケート'}/>
      <div className='ItemList'>
        <div className='item'>
          <Counter counterTitle={'A'} count={countA} />
          <Button buttonText={"A派"} onClick={handleCountUpA} />
        </div>
        <div className='item'>
          <Counter counterTitle={'B'} count={countB} />
          <Button buttonText={"B派"} onClick={handleCountUpB} />
        </div>
      </div>
    </div>
  );
}

export default App;
