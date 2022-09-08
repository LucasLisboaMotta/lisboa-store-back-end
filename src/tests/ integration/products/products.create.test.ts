import sinon from 'sinon';
import chaiHttp = require('chai-http');

import chai from 'chai';

import app from '../../../app';

import { productsArray, productCreate } from '../../mocks/product.mock';

import productMongooseModel from '../../../models/schema/Product.schema';

chai.use(chaiHttp);
const { expect } = chai;

describe('Testando rota products/post', () => {

  before(async () => {
    sinon.stub(productMongooseModel, "create").resolves(productsArray[0]);
  });

  after(()=>{
    sinon.restore();
  });

  it('Testando rota products/post com sucesso', async () => {
    const response = await chai.request(app).post('/products').send(productCreate);
    expect(response.status).to.be.eq(201);
    expect(response.body).to.deep.eq(productsArray[0])
  });

  it('Testando rota products/post com falha: body vazio', async () => {
    const response = await chai.request(app).post('/products');
    expect(response.status).to.be.eq(400);
    expect(response.body).to.deep.eq({error: 'Invalid Object'})
  });

  it('Testando rota products/post com falha: body invalido', async () => {
    const response = await chai.request(app).post('/products').send({  product: 'Pa', value: '1234', description: 'abra cadabra'});
    expect(response.status).to.be.eq(400);
    expect(response.body).to.deep.eq({error: 'Invalid Object'})
  });

 
});