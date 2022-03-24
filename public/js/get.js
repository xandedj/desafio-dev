
const get = (url = "")=> {
  return new Promise(async(resolve, reject)=> {
    try {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept-Charset', 'utf-8');
      
      const config = { mode: 'cors', headers, method: "GET" };

      const request = new Request(url, config);

      const result = await fetch(request);
      const response = await result.json();
      resolve(response)
    } catch (error) {
      reject(error);
    }
  })
}