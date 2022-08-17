const baseAllOriginURL = 'https://api.allorigins.win/get?url=';
const baseURL = 'https://itunes.apple.com';

export const getItunesApi = (url: string) =>
  new Promise((resolve, reject) => {
    fetch(`${baseAllOriginURL}${encodeURIComponent(`${baseURL}${url}`)}`)
      .then((response) => {
        if (response.ok) return response.json();
        reject(new Error('Network response was not ok.'));
      })
      .then((data) => {
        console.log(data.status.http_code < 300 && data.status.http_code >= 200);
        if (data.status.http_code < 300 && data.status.http_code >= 200) resolve(JSON.parse(data.contents));
        else reject(new Error(data.contents));
      });
  });
