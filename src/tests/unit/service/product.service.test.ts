import sinon from 'sinon';

import chai from 'chai';

import ProductService from '../../../services/Product.service';

import { productsArray, productCreate } from '../../mocks/product.mock';

const { expect } = chai;

describe('Testando classe ProductService função create', () => {
  it('Testando classe ProductService create com sucesso', async () => {
    const stub = { create: sinon.stub().resolves(productsArray[0]) };
    const productService = new ProductService(stub as never);
    const result = await productService.create(productCreate);
    expect(result).to.deep.eq(productsArray[0]);
  });

  it('Testando classe productService argumento usado na função create',async () => {
    const stub = { create: sinon.stub().returns(productsArray[0]) };
    
    const productService = new ProductService(stub as never);
    
    await productService.create(productCreate);
    
    const spyCall = stub.create.getCall(0);
    
    expect(spyCall.args).to.deep.eq([productCreate]);
  });
});
