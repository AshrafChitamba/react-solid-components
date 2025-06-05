import React from 'react';
import { render, screen } from '@testing-library/react';
import { Show } from '../src';
import '@testing-library/jest-dom';

describe('<Show />', () => {
  it('renders children when `when` is true', () => {
    render(<Show when={true}>Visible</Show>);
    expect(screen.getByText('Visible')).toBeInTheDocument();
  });

  it('renders children when `when` is truthy', () => {
    render(<Show when={true}>Also visible</Show>);
    expect(screen.getByText('Also visible')).toBeInTheDocument();
  });

  it('renders result of function children when `when` is true', () => {
    render(<Show when={true}>{() => <p>Function child</p>}</Show>);
    expect(screen.getByText('Function child')).toBeInTheDocument();
  });

  it('renders fallback when `when` is false', () => {
    render(
      <Show when={false} fallback={<p>Fallback</p>}>
        {() => <p>Function child</p>}
      </Show>
    );
    expect(screen.getByText('Fallback')).toBeInTheDocument();
  });

  it('renders null when `when` is false and no fallback', () => {
    const { container } = render(<Show when={false}>Hidden</Show>);
    expect(container).toBeEmptyDOMElement();
  });
});
