export const prismicApiEndpoint = 'https://gpsvegano.cdn.prismic.io/api/v2';
export const prismicAccessToken = process.env.REACT_APP_PRISMICACCESSTOKEN;

export const linkResolver = (doc) => {
  if (doc.type === "post") {
    return "/store/" + doc.uid;
  }

  return "/";
}