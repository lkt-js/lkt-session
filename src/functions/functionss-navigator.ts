export const supportsLocalStorage = (): boolean => {
  let r = 1;
  if (typeof localStorage === 'object') {
    try {
      localStorage.setItem('localStorage', '1');
      localStorage.removeItem('localStorage');
    } catch (e) {
      r = -1;
    }
  } else {
    r = -1;
  }

  return r === 1;
};

export const supportsSessionStorage = (): boolean => {
  let r = 1;
  if (typeof sessionStorage === 'object') {
    try {
      sessionStorage.setItem('sessionStorage', '1');
      sessionStorage.removeItem('sessionStorage');
    } catch (e) {
      r = -1;
    }
  } else {
    r = -1;
  }

  return r === 1;
};
