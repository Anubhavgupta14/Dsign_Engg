const fetchCurrentUser = async (token) => {
    try {
      const response = await fetch('/api/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token}),
      });
      let data = await response.json();
      if (response.ok) {
        const { user } = data;
        return user;
      } else {
        return {error: data.error}
      }
    } catch (error) {
        return {error: error.message}
    }
  };


  export {fetchCurrentUser}