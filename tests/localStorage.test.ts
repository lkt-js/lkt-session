import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from '../src';
import {Settings} from "../src/settings/Settings";

Settings.SUPPORTS_LOCAL_STORAGE = true;

test("set localStorage and get it's value back", () => {
  setLocalStorage('test', 'lorem', 3);
  expect(getLocalStorage('test')).toEqual('lorem');
});

test('remove localStorage', () => {
  setLocalStorage('test', 'lorem', 2);
  expect(getLocalStorage('test')).toEqual('lorem');
  jest.setTimeout(3000);
  removeLocalStorage('test');
  expect(getLocalStorage('test')).toEqual(undefined);
});
