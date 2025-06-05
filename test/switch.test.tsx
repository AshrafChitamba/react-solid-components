import React from 'react';
import { render, screen } from '@testing-library/react';
import { Switch, Match } from '../src';
import '@testing-library/jest-dom';

describe('<Switch /> and <Match />', () => {
  it('renders first Match where when=true', () => {
    render(
      <Switch fallback={<p>No match</p>}>
        <Match when={false}>Wrong</Match>
        <Match when={true}>Correct</Match>
        <Match when={true}>Also True</Match>
      </Switch>
    );
    expect(screen.getByText('Correct')).toBeInTheDocument();
    expect(screen.queryByText('Also True')).toBeNull();
  });

  it('renders fallback if no Match is true', () => {
    render(
      <Switch fallback={<p>No condition met</p>}>
        <Match when={false}>Nope</Match>
        <Match when={null}>Still no</Match>
      </Switch>
    );
    expect(screen.getByText('No condition met')).toBeInTheDocument();
  });

  it('throws error if children are not Match components', () => {
    // Suppress console.error temporarily
    const consoleError = console.error;
    console.error = () => {};

    expect(() =>
      render(
        <Switch>
          <div>Invalid Child</div>
        </Switch>
      )
    ).toThrow('Switch can only have Match direct children');

    console.error = consoleError; 
  });

  it('renders function child from Match correctly', () => {
    render(
      <Switch>
        <Match when={true}>{() => <span>Dynamic Content</span>}</Match>
      </Switch>
    );
    expect(screen.getByText('Dynamic Content')).toBeInTheDocument();
  });

  it('renders non-function child from Match correctly', () => {
    render(
      <Switch>
        <Match when={true}>Static Content</Match>
      </Switch>
    );
    expect(screen.getByText('Static Content')).toBeInTheDocument();
  });
});
