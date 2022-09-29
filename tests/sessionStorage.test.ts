import {
  getSessionStorage,
  removeSessionStorage,
  setSessionStorage,
} from '../src';
import { Settings } from '../src/settings/Settings';

Settings.SUPPORTS_SESSION_STORAGE = true;

test("set session and get it's value back", () => {
  setSessionStorage('test', 'lorem', 3);
  expect(getSessionStorage('test')).toEqual('lorem');
});

test('remove session', () => {
  setSessionStorage('test', 'lorem', 2);
  expect(getSessionStorage('test')).toEqual('lorem');
  jest.setTimeout(3000);
  removeSessionStorage('test');
  expect(getSessionStorage('test')).toEqual(undefined);
});
