import React from 'react';
import { MobXProviderContext } from 'mobx-react';

const useMobxStore = <T>() => React.useContext<T>(MobXProviderContext as React.Context<T>);

export default useMobxStore;
