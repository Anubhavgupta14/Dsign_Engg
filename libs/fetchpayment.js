const fetchCurrentUser = async (token) => {
    try {
        console.log("yaha token", token)
      const response = await fetch('/api/payment_details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({token}),
      });
      let data = await response.json();
      if (response.ok) {
        
        // console.log("yaha dekho", data)
        return data;
      } else {
        return {error: data.error}
      }
    } catch (error) {
        return {error: error.message}
    }
  };


  export {fetchCurrentUser}