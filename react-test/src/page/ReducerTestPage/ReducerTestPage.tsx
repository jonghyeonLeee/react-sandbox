import { ChangeEvent, MouseEvent, useReducer, useState } from 'react';

const reducer = (state, action) => {
  console.log('reducer가 일을 합니다.', state, action);
};

const ReducerTestPage = () => {
  const [account, setAccount] = useState<number>();
  const [money, dispatch] = useReducer(reducer, 0);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAccount(event.target.value);
  };

  const handleBtnClick = (event: MouseEvent<HTMLBodyElement>) => {
    accountClear();
  };

  const accountClear = () => setAccount(0);

  return (
    <>
      <div style={{ display: 'flex', gap: 10 }}>
        <p>잔고: {money}원</p>
        <input type={'number'} value={account} onChange={handleInputChange} />
        <button
          onClick={() => {
            dispatch({ type: 'deposit', payload: number });
          }}
        >
          입력
        </button>
        <button>출력</button>
      </div>
    </>
  );
};

export default ReducerTestPage;
