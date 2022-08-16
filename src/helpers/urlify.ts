export const urlify = (text: string) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.replace(urlRegex, function (url: string) {
    return '<a href="' + url + '" target="_blank">' + url + '</a>';
  });
};
