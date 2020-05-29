/**
 * @file 根 store
 */
import testStore from '../testStore';
import okrStore from '../okrStore';
// import indexStore from './indexStore';
// import newBuiltStore from './newBuiltStore';
// import detailStore from './detailStore';
// import calendarStore from './calendarStore';
import {createContext} from "react";
import {createHistory} from "@reach/router";
import createHashSource from "hash-source";

const RootStoreContext = createContext({
  testStore,
  okrStore,
    // detailStore,
    // newBuiltStore,
    // calendarStore,
    isWin: /windows/i.test(window.navigator.userAgent),
    history: createHistory(createHashSource() as any)
});
export default RootStoreContext;
