import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { addCashAction, getCashAction, addCustomerAction, removeCustomerAction } from '../actions/actions';
import { Container } from 'reactstrap';
import Navigation from '../components/Navigation';
import Page from './Page';

const App = () => {
  // const dispatch = useDispatch();
  // const cash = useSelector(state => state.cash.cash);
  // const customers = useSelector(state => state.customers.customers);

  // const addCash = (cash) => {
  //   dispatch(addCashAction(cash));
  // };

  // const getCash = (cash) => {
  //   dispatch(getCashAction(cash));
  // };

  // const addCustomer = (name) => {
  //   const customer = {
  //     name,
  //     id: Date.now(),
  //   }
  //   dispatch(addCustomerAction(customer));
  // }

  // const removeCustomer = (id) => {
  //   dispatch(removeCustomerAction(id));
  // }

  return (
    <Container fluid="sm">
      <Navigation />
      <Page />
    </Container>
  );
}

export default App;