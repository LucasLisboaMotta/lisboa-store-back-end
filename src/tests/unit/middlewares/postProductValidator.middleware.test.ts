import sinon from 'sinon';

import chai from 'chai';

import postProductValidator from '../../../middlewares/postProductValidator.middleware';

import { productCreate } from '../../mocks/product.mock';
import CustomError from '../../../helpers/CustomError';

const { expect } = chai;

describe('Testando middleware postProductValidator', () => {
 
  it('Testando postProductValidator com entrada correta com sucesso',async () => {
    const request = { body: productCreate };
    const response = {}
    const next = sinon.stub();
    
    await postProductValidator(request as never, response as never, next as never);
    
    const spyCallNext = next.getCall(0);
    expect(spyCallNext.args).to.deep.eq([]);
  });

  it('Testando postProductValidator com entrada incorreta com insucesso',async () => {
    const request = { body: {} };
    const response = {}
    const next = sinon.stub();
    
    let catchError: { status: number | undefined, message: string | undefined };

    try {
     await postProductValidator(request as never, response as never, next as never);
     catchError = { status: undefined, message: undefined };
    } catch(error: any) {
      catchError = error;
    }

    expect(catchError.status).to.deep.eq(400);
    expect(catchError.message).to.deep.eq('Invalid Object');
  });

  it('Testando postProductValidator com description invalido',async () => {
    const request = { body: { product: 'Air Fryer', value: '395.90' } };
    const response = {}
    const next = sinon.stub();
    
    let catchError: { status: number | undefined, message: string | undefined };

    try {
     await postProductValidator(request as never, response as never, next as never);
     catchError = { status: undefined, message: undefined };
    } catch(error: any) {
      catchError = error;
    }

    expect(catchError.status).to.deep.eq(400);
    expect(catchError.message).to.deep.eq('Invalid Object');
  });

  it('Testando postProductValidator product invalid',async () => {
    const request = { body: { value: '395.90', description: 'Fritadeira Sem' } };
    const response = {}
    const next = sinon.stub();
    
    let catchError: { status: number | undefined, message: string | undefined };

    try {
     await postProductValidator(request as never, response as never, next as never);
     catchError = { status: undefined, message: undefined };
    } catch(error: any) {
      catchError = error;
    }

    expect(catchError.status).to.deep.eq(400);
    expect(catchError.message).to.deep.eq('Invalid Object');
  });

  it('Testando postProductValidator com value invalido ',async () => {
    const request = { body: { product: 'Air Fryer', description: 'Fritadeira Sem Ól' } };
    const response = {}
    const next = sinon.stub();
    
    let catchError: { status: number | undefined, message: string | undefined };

    try {
     await postProductValidator(request as never, response as never, next as never);
     catchError = { status: undefined, message: undefined };
    } catch(error: any) {
      catchError = error;
    }

    expect(catchError.status).to.deep.eq(400);
    expect(catchError.message).to.deep.eq('Invalid Object');
  });

})