import { memo } from "react";
import { Link } from "react-router-dom";

export interface LoginActionsProps {
  rememberMe: boolean;
  onRememberMeChange: (checked: boolean) => void;
  disabled?: boolean;
}

const LoginActions = ({
  rememberMe,
  onRememberMeChange,
  disabled = false,
}: LoginActionsProps) => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      {/* Remember me */}

      <label
        htmlFor="remember-me"
        className="
          inline-flex
          cursor-pointer
          items-center
          gap-3
          select-none
        "
      >
        <input
          id="remember-me"
          type="checkbox"
          checked={rememberMe}
          disabled={disabled}
          onChange={(event) => onRememberMeChange(event.target.checked)}
          className="
            h-5
            w-5
            rounded
            border-slate-300
            text-violet-600
            focus:ring-2
            focus:ring-violet-300
          "
        />

        <span className="text-sm font-medium text-slate-600">
          Se souvenir de moi
        </span>
      </label>

      {/* Forgot password */}

      <Link
        to="/forgot-password"
        className="
          text-sm
          font-semibold
          text-violet-600
          transition-colors
          duration-300
          hover:text-violet-700
          hover:underline
        "
      >
        Mot de passe oublié ?
      </Link>
    </div>
  );
};

export default memo(LoginActions);
