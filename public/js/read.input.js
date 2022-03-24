
const ReadFile = (id)=> {
  return new Promise((resolve, reject)=> {
    try{
      document.getElementById(id).addEventListener('change', function() {
        const Read = new FileReader();
        Read.onload = function() { resolve(Read.result) };
        Read.readAsText(this.files[0]);
      });
    } catch (e) {
      reject(e);
    };
    
  });
};