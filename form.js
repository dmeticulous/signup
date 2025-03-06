function storeLoginDetails(username, password) {
    localStorage.setItem('username', username);
    localStorage.setItem('encryptedPassword', encryptPassword(password));
  }
  
  function getStoredLoginDetails() {
   const storedUsername = localStorage.getItem('username');
    const storedEncryptedPassword = localStorage.getItem('encryptedPassword');
    return { username: storedUsername, password: decryptPassword(storedEncryptedPassword) };
  }
  
  function onClick(e) {
    e.preventDefault();
    grecaptcha.enterprise.ready(async () => {
      const token = await grecaptcha.enterprise.execute('6Ld8ZesqAAAAAGf7Sh8qdy_M_VftByUHW1lB9HKc', {action: 'LOGIN'});
    });
  }
