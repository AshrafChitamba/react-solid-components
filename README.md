# React Solid Components

These components will help you write modular code in dealing with maps, conditional rendering and if-else-if-else statements in your react applications. Happy coding 🎉 I would love to hear your feedback.

> This is an abstract of solid components of `For`, `Show` and `Switch`.

## Content

1. [Installation](#instal)
2. [Usage](#usage)
   1. [For component example](#for)
   2. [Show component example](#show)
   3. [Switch component example](#show)
3. [Demo](#demo)

<a id="instal"></a>

## Installation

```
 npm i react-solid-components
```

<a id="usage"></a>

## Usage

Now, for all the examples we are going to use the following components
`MyComponent` and `Fallback`.

```javascript
export const MyComponent = props => {
  // This component receives a prop of name
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
      <span
        style={{
          color: 'blueviolet',
          fontWeight: 'bold',
          fontSize: '1.1rem',
        }}
      >
        Name:
      </span>
      <span style={{ fontWeight: 'normal' }}>{props.name}</span>
    </div>
  );
};

export const Fallback = () => {
  return (
    <div>
      <h4
        style={{
          color: 'blueviolet',
          fontWeight: 'bold',
          fontSize: '1.1rem',
        }}
      >
        I am a fallback
      </h4>
    </div>
  );
};
```

<a id="for"></a>

## For Component

This component handles control flow of mapping through arrays to be rendered.

```javascript
import { For } from 'react-solid-components';

const ForExample = () => {
  // An array of names
  const names = ['Shahida', 'A-Rahman', 'Shareef', 'Ashraf', 'Marriam'];

  return (
    <div>
      <For each={names}>
        {(name, index) => <MyComponent key={index} name={name} />}
      </For>
    </div>
  );
};

export default ForExample;
```

<a id="show"></a>

## Show Component

This component handles control flow of conditional rendering of a one way if-else statement.

```javascript
import { Show } from 'react-solid-components';

const ShowExample = () => {
  // A name variable
  const name = 'Ashraf';

  return (
    <div>
      <Show when={name === 'Ashraf'} fallback={<Fallback />}>
        <MyComponent name={name} />
      </Show>
    </div>
  );
};

export default ShowExample;
```

<a id="switch"></a>

## Switch Component

This component handles control flow of conditional rendering of multi if-else-if-else statements and it goes together with `Match` component.

```javascript
import { Switch, Match } from 'react-solid-components';

const SwitchExample = () => {
  // A name variable
  const name = 'Ashraf';

  // in this example the fourth component will be matched
  return (
    <div>
      <Switch fallback={<Fallback />}>
        <Match when={props.name === 'Shahida'}>
          <div>First match component</div>
        </Match>

        <Match when={props.name === 'A-Rahman'}>
          <div>Second match component</div>
        </Match>

        <Match when={props.name === 'Shareef'}>
          <div>Third match component</div>
        </Match>

        <Match when={props.name === 'Ashraf'}>
          <div>Fourth match component</div>
        </Match>

        <Match when={props.name === 'Marriam'}>
          <div>Fifth match component</div>
        </Match>
      </Switch>
    </div>
  );
};

export default ShowExample;
```

<a id="demo"></a>

## Demo

Checkout the StoryBook examples of the components [Examples](https://6612a8ded5a143f472ba34e6-kuueaosgda.chromatic.com).
