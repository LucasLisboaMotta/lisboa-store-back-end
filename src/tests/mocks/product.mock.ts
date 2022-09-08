const productsArray = [
  {
    _id: '63193633ccca7583e3613461',
    product: 'Air Fryer',
    value: '395.90',
    description: 'Fritadeira Sem Óleo Mondial Family AF-30i Air Fryer 3.5L',
    updated: '2022-09-08T00:24:19.084Z',
    created: '2022-09-08T00:24:19.089Z',
  },
  {
    _id: '631938a8ccca7583e3613465',
    product: 'Pato de borracha',
    value: '10.45',
    description: 'Um belo patinho amarelo, feito para qualquer um se',
    updated: '2022-09-08T00:34:48.785Z',
    created: '2022-09-08T00:34:48.786Z',
  },
  {
    _id: '6319531eccca7583e36134af',
    product: 'Bife com cebola',
    value: '43.78',
    description: 'Um bife acebolado de um boi que já havia uma certa idade;',
    updated: '2022-09-08T02:27:42.278Z',
    created: '2022-09-08T02:27:42.278Z',
  },
  {
    _id: '631953b4ccca7583e36134b2',
    product: 'Banheira de madeira',
    value: '1531.05',
    description: `Uma bela banheira de madeira no estilo oriental. Ela vaza 
    algumas vezes, mas é o preço que se paga por ter um produto histórico.`,
    updated: '2022-09-08T02:30:12.481Z',
    created: '2022-09-08T02:30:12.484Z',
  },
  {
    _id: '6319879c4dd4433282516006',
    product: 'Maleta Preta',
    value: '15.83',
    description: 'Uma maleta comum e preta',
    updated: '2022-09-08T06:11:40.631Z',
    created: '2022-09-08T06:11:40.634Z',
  },
  {
    _id: '631987b14dd4433282516009',
    product: 'Caneta azul',
    value: '0.05',
    description: 'Uma caneta, so que azul.',
    updated: '2022-09-08T06:12:01.973Z',
    created: '2022-09-08T06:12:01.974Z',
  },
];

const productCreate = {
  product: 'Air Fryer',
  value: '395.90',
  description: 'Fritadeira Sem Óleo Mondial Family AF-30i Air Fryer 3.5L',
};

const productPatch = {
  value: '427.90',
};

export { productsArray, productCreate, productPatch };