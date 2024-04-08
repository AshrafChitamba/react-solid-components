# React Solid Components

These components will help you write modular code in dealing with maps, conditional rendering and if-else-if-else statements in your react applications. Happy coding 🎉 I would love to hear your feedback.

> This is an abstract of solid components of `For`, `Show` and `Switch`.

## Content

1. [Installation](#instal)
2. [Usage](#usage)
   1. [For component example](#for)
   2. [Show component example](#show)
   3. [Switch component example](#show)

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

<a id="show"></a>

## Show Component

<a id="switch"></a>

## Switch Component

## Demo

Checkout the StoryBook examples of the components [Examples](https://6612a8ded5a143f472ba34e6-kuueaosgda.chromatic.com).
