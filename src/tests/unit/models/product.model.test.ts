import sinon from 'sinon';

import chai from 'chai';

import ProductModel from '../../../models/Product.model';

import { productsArray, productCreate } from '../../mocks/product.mock';

const { expect } = chai;

describe('Testando classe ProductModel função create', () => {
  it('Testando classe ProductModel create com sucesso', async () => {
    const stub = { create: sinon.stub().resolves(productsArray[0]) };
    const productModel = new ProductModel(stub as never);
    const result = await productModel.create(productCreate);
    expect(result).to.deep.eq(productsArray[0]);
  });

  it('Testando classe productModel argumento usado na função create',async () => {
    const stub = { create: sinon.stub().returns(productsArray[0]) };
    
    const data1 = Date.now();
    sinon.stub(Date, 'now').returns(data1)
    
    const productModel = new ProductModel(stub as never);
    
    await productModel.create(productCreate);
    
    const spyCall = stub.create.getCall(0);
    
    expect(spyCall.args[0].description).to.deep.eq(productCreate.description);
    expect(spyCall.args[0].product).to.deep.eq(productCreate.product);
    expect(spyCall.args[0].value).to.deep.eq(productCreate.value);
    expect(spyCall.args[0].updated).to.deep.eq(data1);
    
    sinon.restore()
  });
});
