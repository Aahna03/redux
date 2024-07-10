'use client'
import React, { ReactNode } from 'react';
import  store from './store';
import { Provider as ReduxProvider } from 'react-redux';

interface Props {
  children: ReactNode;
}

export function Provider({ children }: Props) {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
}
