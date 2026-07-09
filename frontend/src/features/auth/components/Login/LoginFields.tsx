import { memo, useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

export interface LoginFieldsProps {
  email: string;
  password: string;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  disabled?: boolean;
}

const LoginFields = ({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  disabled = false,
}: LoginFieldsProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-6">
      {/* Email */}

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Adresse e-mail
        </label>

        <div className="relative">
          <Mail
            size={20}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="exemple@email.com"
            value={email}
            disabled={disabled}
            onChange={(event) => onEmailChange(event.target.value)}
            className="
              h-14
              w-full
              rounded-2xl
              border
              border-slate-200
              bg-white
              pl-14
              pr-5
              text-slate-700
              outline-none
              transition-all
              duration-300
              placeholder:text-slate-400
              focus:border-violet-500
              focus:ring-4
              focus:ring-violet-100
              disabled:cursor-not-allowed
              disabled:bg-slate-100
            "
            required
          />
        </div>
      </div>

      {/* Password */}

      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Mot de passe
        </label>

        <div className="relative">
          <Lock
            size={20}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            id="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            placeholder="••••••••••••"
            value={password}
            disabled={disabled}
            onChange={(event) => onPasswordChange(event.target.value)}
            className="
              h-14
              w-full
              rounded-2xl
              border
              border-slate-200
              bg-white
              pl-14
              pr-14
              text-slate-700
              outline-none
              transition-all
              duration-300
              placeholder:text-slate-400
              focus:border-violet-500
              focus:ring-4
              focus:ring-violet-100
              disabled:cursor-not-allowed
              disabled:bg-slate-100
            "
            required
          />

          <button
            type="button"
            onClick={() => setShowPassword((previous) => !previous)}
            aria-label={
              showPassword
                ? "Masquer le mot de passe"
                : "Afficher le mot de passe"
            }
            className="
              absolute
              right-5
              top-1/2
              -translate-y-1/2
              text-slate-400
              transition-colors
              duration-300
              hover:text-violet-600
            "
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(LoginFields);
