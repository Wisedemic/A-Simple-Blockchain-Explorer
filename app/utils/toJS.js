import React from 'react';
import { Iterable } from 'immutable';

export const toJS = WrappedComponent => wrappedComponentProps => {
  const [KEY, VALUE] = [0, 1];
  const propsJS = Object.entries(
    wrappedComponentProps
  ).reduce((newProps, wrappedComponentProp) => {

    // Reduce Immutables to JS
    newProps[wrappedComponentProp[KEY]] = Iterable.isIterable(
      wrappedComponentProp[VALUE]
    ) ? wrappedComponentProp[VALUE].toJS() : wrappedComponentProp[VALUE]
    return newProps;
  }, {});

  return (<WrappedComponent {...propsJS} />);
}

export default toJS;
