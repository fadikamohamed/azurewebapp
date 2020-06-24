'use strict';
jest.unmock('../src/App.tsx');

import React from 'react';
import {
  renderIntoDocument,
  findRenderedDOMComponentWithTag
} from 'react-addons-test-utils';
import Product from '../src/App.tsx';

describe('Product', () => {
  it('Should render product with name, price and stock', () => {
    const testedComponent = renderIntoDocument(
      <Product
        product={{}}
        withStock={false}
      />
    );
    const productTitle = findRenderedDOMComponentWithTag(testedComponent, 'Link');
    expect(productTitle.textContent).toEqual('Equipe');
  });
});
