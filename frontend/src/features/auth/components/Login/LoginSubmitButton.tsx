import { memo } from "react";
import { Loader2, LogIn } from "lucide-react";

export interface LoginSubmitButtonProps {
  loading?: boolean;
  disabled?: boolean;
}

const LoginSubmitButton = ({
  loading = false,
  disabled = false,
}: LoginSubmitButtonProps) => {
  return (
    <button
      type="submit"
      disabled={loading || disabled}
      className="
        group
        relative
        flex
        h-14
        w-full
        items-center
        justify-center
        gap-3
        overflow-hidden
        rounded-2xl
        bg-linear-to-r
        from-fuchsia-500
        via-purple-600
        to-indigo-600
        px-6
        font-semibold
        text-white
        shadow-lg
        transition-all
        duration-300
        hover:scale-[1.02]
        hover:shadow-purple-400/40
        active:scale-[0.98]
        disabled:cursor-not-allowed
        disabled:opacity-70
        disabled:hover:scale-100
      "
    >
      {/* Background Animation */}

      <span
        className="
          absolute
          inset-0
          -translate-x-full
          bg-linear-to-r
          from-transparent
          via-white/20
          to-transparent
          transition-transform
          duration-700
          group-hover:translate-x-full
        "
      />

      {/* Content */}

      <span className="relative flex items-center gap-3">
        {loading ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Connexion...
          </>
        ) : (
          <>
            <LogIn size={20} />
            Se connecter
          </>
        )}
      </span>
    </button>
  );
};

export default memo(LoginSubmitButton);
