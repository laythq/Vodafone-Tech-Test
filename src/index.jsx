import React from 'react';
import ReactDOM from 'react-dom';
import Capacity from './capacity';
import UpfrontPrice from './upfrontPrice';
import MonthlyPrice from './monthlyPrice';
import Picture from './picture';
import Colour from './colour';

ReactDOM.render(
  <Capacity />,
  document.getElementById('capacity'),
);

ReactDOM.render(
  <Colour />,
  document.getElementById('colour'),
);

ReactDOM.render(
  <UpfrontPrice />,
  document.getElementById('UpfrontPrice'),
);

ReactDOM.render(
  <MonthlyPrice />,
  document.getElementById('MonthlyPrice'),
);

ReactDOM.render(
  <Picture />,
  document.getElementById('Picture'),
);
