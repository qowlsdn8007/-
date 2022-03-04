const END_POINT = `https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev/`;

export const request = async (url) => {
  return await fetch(url)
    .then((res) => res.json())
    .catch((e) => console.log(e));
};

export const fetchRootDirectory = async () => {
  return await request(END_POINT);
};
