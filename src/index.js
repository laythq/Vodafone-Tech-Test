import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'
import Button from './button.jsx'
import UpfrontPrice from './upfrontPrice.jsx'
import MonthlyPrice from './monthlyPrice.jsx'
import Picture from './picture.jsx'
import Colour from './colour.jsx'

ReactDOM.render(
  <Button />,
  document.getElementById("capacity")
);

ReactDOM.render(
  <Colour />,
  document.getElementById("colour")
);

ReactDOM.render(
  <UpfrontPrice />,
  document.getElementById("UpfrontPrice")
)

ReactDOM.render(
  <MonthlyPrice />,
  document.getElementById("MonthlyPrice")
)

ReactDOM.render(
  <Picture />,
  document.getElementById("Picture")
)
