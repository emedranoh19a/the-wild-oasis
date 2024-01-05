import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRow from "../../ui/FormRow";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";
function LoginForm() {
  const [email, setEmail] = useState("e-medrano@ws-sol.co.jp");
  const [password, setPassword] = useState("1234");
  const { login, isLogging } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login({ email, password });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow orientation="vertical" label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLogging}
        />
      </FormRow>
      <FormRow orientation="vertical" label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLogging}
        />
      </FormRow>
      <FormRow orientation="vertical">
        <Button size="large" disabled={isLogging}>
          {isLogging ? <SpinnerMini /> : "Log in"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default LoginForm;
