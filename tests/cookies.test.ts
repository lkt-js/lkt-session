import {getCookie, removeCookie, setCookie} from '../src';

test("set cookie and get it's value back", () => {
  setCookie('test', 'lorem', 3);
  expect(getCookie('test')).toEqual('lorem');
});

test('remove cookie', () => {
  setCookie('test', 'lorem', 2);
  expect(getCookie('test')).toEqual('lorem');
  jest.setTimeout(3000);
  removeCookie('test');
  expect(getCookie('test')).toEqual(undefined);
});
