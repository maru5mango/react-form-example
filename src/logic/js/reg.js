export const isEmail = (value) => {
  const emailRule =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; //이메일 정규식
  return emailRule.test(value);
};

export const isLengthAvailable = (value) => {
  return value.length >= 8 && value.length <= 20;
};
