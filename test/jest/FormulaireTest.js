'use strict';
jest.unmock('../src/componants/Formulaire.tsx');

import React from 'react';
import {
  renderIntoDocument,
  findRenderedDOMComponentWithTag
} from 'react-addons-test-utils';
import Product from '../src/componants/Formulaire.tsx';

describe('Product', () => {
  it('Should render product with name, price and stock', () => {
    const testedComponent = renderIntoDocument(
      <Product
        product={{}}
        withStock={false}
      />
    );
    const productTitle = findRenderedDOMComponentWithTag(testedComponent, choixClasse('Archer'));
    expect(productTitle.textContent).toBeNull();
  });
});
