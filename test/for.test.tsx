import React from 'react';
import { render, screen } from '@testing-library/react';
import { For } from '../src';
import '@testing-library/jest-dom';

describe('<For />', () => {
  it('renders all items in the array', () => {
    render(
      <For each={['one', 'two', 'three']}>
        {(item, index) => <span key={index}>{item}</span>}
      </For>
    );
    expect(screen.getByText('one')).toBeInTheDocument();
    expect(screen.getByText('two')).toBeInTheDocument();
    expect(screen.getByText('three')).toBeInTheDocument();
  });

  it('renders fallback when array is empty', () => {
    render(
      <For each={[]} fallback={<p>Empty!</p>}>
        {(item, index) => <span key={index}>{item}</span>}
      </For>
    );
    expect(screen.getByText('Empty!')).toBeInTheDocument();
  });

  it('renders null when array is empty and no fallback provided', () => {
    const { container } = render(
      <For each={[]}>{(item, index) => <span key={index}>{item}</span>}</For>
    );
    expect(container).toBeEmptyDOMElement();
  });
});
