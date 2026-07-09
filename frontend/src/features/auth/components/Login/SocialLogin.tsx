import { memo } from "react";
import { SiGoogle, SiFacebook } from "@icons-pack/react-simple-icons";

export interface SocialLoginProps {
  loading?: boolean;
  onGoogleLogin?: () => void;
  onFacebookLogin?: () => void;
}

const SocialLogin = ({
  loading = false,
  onGoogleLogin,
  onFacebookLogin,
}: SocialLoginProps) => {
  return (
    <div className="space-y-6">
      {/* Divider */}

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200" />
        </div>

        <div className="relative flex justify-center">
          <span className="bg-white px-4 text-sm text-slate-500">
            ou continuer avec
          </span>
        </div>
      </div>

      {/* Buttons */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Google */}

        <button
          type="button"
          disabled={loading}
          onClick={onGoogleLogin}
          className="
            group
            flex
            h-14
            items-center
            justify-center
            gap-3
            rounded-2xl
            border
            border-slate-200
            bg-white
            font-medium
            text-slate-700
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-red-300
            hover:shadow-lg
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          <SiGoogle
            size={20}
            className="text-red-500 transition-transform duration-300 group-hover:scale-110"
          />

          <span>Google</span>
        </button>

        {/* Facebook */}

        <button
          type="button"
          disabled={loading}
          onClick={onFacebookLogin}
          className="
            group
            flex
            h-14
            items-center
            justify-center
            gap-3
            rounded-2xl
            border
            border-slate-200
            bg-white
            font-medium
            text-slate-700
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-blue-300
            hover:shadow-lg
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          <SiFacebook
            size={20}
            className="text-blue-600 transition-transform duration-300 group-hover:scale-110"
          />

          <span>Facebook</span>
        </button>
      </div>

      {/* Info */}

      <p className="text-center text-sm text-slate-500">
        En continuant, vous acceptez les{" "}
        <a
          href="/terms"
          className="font-semibold text-violet-600 hover:underline"
        >
          Conditions d'utilisation
        </a>{" "}
        et la{" "}
        <a
          href="/privacy"
          className="font-semibold text-violet-600 hover:underline"
        >
          Politique de confidentialité
        </a>
        .
      </p>
    </div>
  );
};

export default memo(SocialLogin);
