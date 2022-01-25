import React from "react";
import Input from "./components/Input";
import { Form } from "./core/form";

// 요구사항
// 1. 아이디와 비밀번호를 입력받을 input 구현 (input 컴포넌트 재사용 할 수 있게 만들기)
// 2. 아이디 validation : English, Number Only
// 3. 비밀번호 validation : 8자 이상 20자 이하
// 4. onFocus 처리
// 4. App 컴포넌트 안에서 input value 값들을 전송

export default function App() {
  const { id, password, submit } = Form();

  return (
    <form
      name="searchForm"
      onSubmit={(e) => e.preventDefault()}
      className="App"
    >
      <h1>Wellcome!</h1>
      <Input attr={id} />
      <Input attr={password} />
      <button onClick={() => submit()}>SEND</button>
    </form>
  );
}
