import { isEmail, isLengthAvailable } from "../logic/js/reg";
import useInput from "../logic/hooks/useInput";

const formProps = {
  id: {
    init: "",
    validation: isEmail,
    _default: {
      title: "이메일",
      placeholder: "이메일",
      type: "email",
      autoComplete: "email",
    },
  },
  password: {
    init: "",
    validation: isLengthAvailable,
    _default: {
      title: "비밀번호",
      placeholder: "비밀번호",
      type: "password",
      autoComplete: "current-password",
    },
  },
};

export const Form = () => {
  const { id, password } = formProps;
  const { attr: idAttr, state: idState, reset: idReset } = useInput(id);
  const {
    attr: pwdAttr,
    state: pwdState,
    reset: pwdReset,
  } = useInput(password);
  const submit = () => {
    if (!idState) {
      idAttr.ref.current.focus();
      return false;
    }
    if (!pwdState) {
      pwdAttr.ref.current.focus();
      return false;
    }
    alert(
      `id: ${idAttr.value}, pwd: ${pwdAttr.value}로 값 전송이 완료되었습니다.`
    );
    idReset();
    pwdReset();
  };

  return {
    id: idAttr,
    password: pwdAttr,
    submit,
  };
};
