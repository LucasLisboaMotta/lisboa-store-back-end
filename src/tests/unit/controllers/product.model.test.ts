import sinon from 'sinon';

import chai from 'chai';

import ProductController from '../../../controllers/Product.controller';

import { productsArray, productCreate } from '../../mocks/product.mock';

const { expect } = chai;

describe('Testando classe ProductController função create', () => {
 
  it('Testando classe ProductController create com sucesso',async () => {
    const request = { body: productCreate };
    const response = { json: sinon.stub().callsFake((arg) => arg), status: sinon.stub }
    response.status = sinon.stub().returns(response);
    const stub = { create: sinon.stub().resolves(productsArray[0]) };
    const productController = new ProductController(stub as never);
    const result = await productController.create(request as never, response as never);
    expect(result).to.deep.eq(productsArray[0]);
  });

  it('Testando classe ProductController argumento usado na função create',async () => {
    const request = { body: productCreate };
    const response = { json: sinon.stub().callsFake((arg) => arg), status: sinon.stub() }
    response.status = sinon.stub().returns(response);
    const stub = { create: sinon.stub().resolves(productsArray[0]) };
    const productController = new ProductController(stub as never);
    await productController.create(request as never, response as never);
    const spyCallStatus = response.status.getCall(0);
    const spyCallJson = response.json.getCall(0);
    const spyCallService = stub.create.getCall(0);    
    expect(spyCallStatus.args).to.deep.eq([201]);
    expect(spyCallJson.args).to.deep.eq([productsArray[0]]);
    expect(spyCallService.args).to.deep.eq([productCreate]);
  });
})