import { memo, useMemo, useState } from "react";
import { CheckCircle2, Eye, EyeOff, Lock, XCircle } from "lucide-react";

export interface PasswordFieldsProps {
  password: string;
  confirmPassword: string;
  disabled?: boolean;
  onPasswordChange: (value: string) => void;
  onConfirmPasswordChange: (value: string) => void;
}

const PasswordFields = ({
  password,
  confirmPassword,
  disabled = false,
  onPasswordChange,
  onConfirmPasswordChange,
}: PasswordFieldsProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const passwordStrength = useMemo(() => {
    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 2) {
      return {
        label: "Faible",
        color: "bg-red-500",
        width: "w-1/3",
      };
    }

    if (score === 3 || score === 4) {
      return {
        label: "Moyen",
        color: "bg-amber-500",
        width: "w-2/3",
      };
    }

    return {
      label: "Fort",
      color: "bg-emerald-500",
      width: "w-full",
    };
  }, [password]);

  const passwordsMatch =
    password.length > 0 &&
    confirmPassword.length > 0 &&
    password === confirmPassword;

  return (
    <div className="space-y-6">
      {/* Mot de passe */}

      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Mot de passe
          <span className="ml-1 text-rose-500">*</span>
        </label>

        <div className="relative">
          <Lock
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            id="password"
            type={showPassword ? "text" : "password"}
            autoComplete="new-password"
            value={password}
            disabled={disabled}
            placeholder="••••••••••"
            onChange={(event) => onPasswordChange(event.target.value)}
            className="
              h-14
              w-full
              rounded-2xl
              border
              border-slate-200
              bg-white
              pl-12
              pr-14
              outline-none
              transition-all
              duration-300
              focus:border-violet-500
              focus:ring-4
              focus:ring-violet-100
              disabled:bg-slate-100
            "
            required
          />

          <button
            type="button"
            onClick={() => setShowPassword((previous) => !previous)}
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-slate-400
              transition-colors
              hover:text-violet-600
            "
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {/* Force */}

        <div className="mt-4">
          <div className="h-2 overflow-hidden rounded-full bg-slate-200">
            <div
              className={`h-full rounded-full transition-all duration-300 ${passwordStrength.width} ${passwordStrength.color}`}
            />
          </div>

          <p className="mt-2 text-sm text-slate-500">
            Sécurité :
            <span className="ml-2 font-semibold">{passwordStrength.label}</span>
          </p>
        </div>
      </div>

      {/* Confirmation */}

      <div>
        <label
          htmlFor="confirmPassword"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Confirmer le mot de passe
          <span className="ml-1 text-rose-500">*</span>
        </label>

        <div className="relative">
          <Lock
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            id="confirmPassword"
            type={showConfirmation ? "text" : "password"}
            autoComplete="new-password"
            value={confirmPassword}
            disabled={disabled}
            placeholder="••••••••••"
            onChange={(event) => onConfirmPasswordChange(event.target.value)}
            className="
              h-14
              w-full
              rounded-2xl
              border
              border-slate-200
              bg-white
              pl-12
              pr-14
              outline-none
              transition-all
              duration-300
              focus:border-violet-500
              focus:ring-4
              focus:ring-violet-100
              disabled:bg-slate-100
            "
            required
          />

          <button
            type="button"
            onClick={() => setShowConfirmation((previous) => !previous)}
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-slate-400
              transition-colors
              hover:text-violet-600
            "
          >
            {showConfirmation ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {confirmPassword.length > 0 && (
          <div className="mt-3 flex items-center gap-2">
            {passwordsMatch ? (
              <>
                <CheckCircle2 size={18} className="text-emerald-500" />

                <span className="text-sm text-emerald-600">
                  Les mots de passe correspondent.
                </span>
              </>
            ) : (
              <>
                <XCircle size={18} className="text-red-500" />

                <span className="text-sm text-red-600">
                  Les mots de passe sont différents.
                </span>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(PasswordFields);
