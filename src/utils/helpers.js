export const getJwtExpiry = (token) => {
  if (!token) return null;
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.exp * 1000;
  } catch (err) {
    console.error('Invalid token: ', err);
    return null;
  }
}
