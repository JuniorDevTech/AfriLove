import { memo, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

import LoginHeader from "../Login/LoginHeader";
import LoginFields from "../Login/LoginFields";
import LoginActions from "../Login/LoginActions";
import LoginSubmitButton from "../Login/LoginSubmitButton";
import SocialLogin from "../Login/SocialLogin";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    setLoading(true);

    try {
      /**
       * Ici sera branché le Redux Thunk :
       *
       * await dispatch(loginThunk({
       *    email,
       *    password,
       *    rememberMe
       * }));
       */

      await new Promise((resolve) => setTimeout(resolve, 1200));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex min-h-screen w-full items-center justify-center">
      <div className="mx-auto w-full max-w-4xl px-8 py-16 lg:px-12">
        <LoginHeader />

        <form onSubmit={handleSubmit} className="mt-10 space-y-8">
          <LoginFields
            email={email}
            password={password}
            onEmailChange={setEmail}
            onPasswordChange={setPassword}
            disabled={loading}
          />

          <LoginActions
            rememberMe={rememberMe}
            onRememberMeChange={setRememberMe}
            disabled={loading}
          />

          <LoginSubmitButton loading={loading} />
        </form>

        <div className="mt-10">
          <SocialLogin loading={loading} />
        </div>

        <p className="mt-10 text-center text-base text-slate-600">
          Vous n'avez pas encore de compte ?
          <Link
            to="/register"
            className="ml-2 font-semibold text-violet-600 transition-colors duration-200 hover:text-violet-700"
          >
            Créer un compte
          </Link>
        </p>
      </div>
    </section>
  );
};

export default memo(LoginForm);
