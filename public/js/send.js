
const send = (url = "", data = "")=> {
  return new Promise(async(resolve, reject)=> {
    try {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept-Charset', 'utf-8');
      
      const config = { mode: 'cors', headers, method: "POST", body: data };

      const request = new Request(url, config);

      const result = await fetch(request);
      const response = await result.json();
      resolve(response)
    } catch (error) {
      reject(error);
    }
  })
}