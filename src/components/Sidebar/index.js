import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateAmountItem, resetItem } from '../../store/modules/item/actions';
import './sidebar.scss';

import Modal from '../Modal';

import { MdDelete, MdAddCircle, MdRemoveCircle } from 'react-icons/md';

export default function Sidebar() {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const itens = useSelector(state => state.item);
  const dispatch = useDispatch(state => state.item);

  // eslint-disable-next-line
  const item = useSelector(state =>
    state.item.map(item => ({
      ...item,
      subtotal: item.weight * item.amount,
    }))
  );

  const total = useSelector(state =>
    state.item.reduce((totalSum, item) => {
      return totalSum + item.weight * item.amount;
    }, 0)
  );
  
  function dltStorage(name) {
    setIsModalVisible(true);
    dispatch(resetItem(name));
  }

  function handleRemove(name) {
    dispatch(removeItem(name));
  }


  function decrementAmount(item) {
    dispatch(updateAmountItem(item.name, item.amount - 1));
  }

  function incrementAmount(item) {
    dispatch(updateAmountItem(item.name, item.amount + 1));
  }

  return (
    <div className="sidebar">

      <h1>Resumo do carrinho</h1>
      <span>Foram adcionados {itens.length} itens no carrinho.</span>

      {itens.map(item => (

        <li key={item.name}> <strong>Nome:</strong> {item.name} <strong>Preço:</strong> {item.weight.toFixed(3).slice(0, -1)}

          <button type="button" onClick={() => decrementAmount(item)}><MdRemoveCircle size={22} color="#8C1C03" /></button>

          <input type="text" readOnly value={item.amount} />

          <button type="button" onClick={() => incrementAmount(item)}><MdAddCircle size={22} color=" #8C1C03" /></button>

          <button type="button" className="btn-rmv" onClick={() => handleRemove(item.name)}><MdDelete size={28} color="#8C1C03" /></button><br />
        </li>
      ))}<br />

      <div className="total">Total: R$ {total.toFixed(3).slice(0, -1)}</div>
      <br />
      <button type="button" className="btn-end" onClick={dltStorage} >Finalizar Compra</button>
      {isModalVisible ?
        (<Modal onClose={() => setIsModalVisible(false)}>
          <h2>Agradecemos sua compra!</h2>
        </Modal>) : null}
    </div>
  );
}