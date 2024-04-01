import * as React from 'react';

export type ChildNameProps = {
  name: string;
  index: number;
};

export const ChildName = (props: ChildNameProps) => {
  return (
    <h2
      style={{
        fontFamily: 'sans-serif',
        display: 'flex',
        alignItems: 'center',
        gap: 5,
      }}
    >
      <span style={{ color: 'blueviolet' }}>{props.index + 1}.</span>
      <span style={{ fontWeight: 'normal' }}>{props.name}</span>
    </h2>
  );
};

export type ChildDtProps = {
  name: string;
  age: number;
  gender: string;
};

export const ChildDetails = (child: ChildDtProps) => {
  return (
    <div
      style={{
        fontFamily: 'sans-serif',
        letterSpacing: '1px',
        padding: 20,
        display: 'grid',
        gap: 10,
        boxShadow: '0px 0px 2px #333',
        borderRadius: 5,
      }}
    >
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
        <span style={{ fontWeight: 'normal' }}>{child.name}</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        <span
          style={{
            color: 'blueviolet',
            fontWeight: 'bold',
            fontSize: '1.1rem',
          }}
        >
          Age:
        </span>
        <span style={{ fontWeight: 'normal' }}>{child.age}</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        <span
          style={{
            color: 'blueviolet',
            fontWeight: 'bold',
            fontSize: '1.1rem',
          }}
        >
          Gender:
        </span>
        <span style={{ fontWeight: 'normal' }}>{child.gender}</span>
      </div>
    </div>
  );
};
