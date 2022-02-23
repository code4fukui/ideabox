const endpoint = "https://fukui-api.ideabox.cloud";

export const apiGet = async (path) => {
  const url = endpoint + path;
  return await (await fetch(url)).json();
};
