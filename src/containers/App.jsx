import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addCashAction, getCashAction, addCustomerAction, removeCustomerAction} from '../actions/actions';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);

  const addCash = (cash) => {
    dispatch(addCashAction(cash));
  };

  const getCash = (cash) => {
    dispatch(getCashAction(cash));
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer));
  }

  const removeCustomer = (id) => {
    dispatch(removeCustomerAction(id));
  }

  return (
    <div>
      <div>{cash}</div>
      <div style={{display: "flex"}}>
        <button onClick={() => addCash(Number(prompt()))}>Пополнить счёт</button>
        <button onClick={() => getCash(Number(prompt()))}>Снять со счёта</button>
        <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
      </div>
      {customers.length > 0 ?
        customers.map(customer => <div onClick={() => removeCustomer(customer.id)}>{customer.name}</div>) :
        "Нет клиентов"
      }
    </div>
  );
}

export default App;