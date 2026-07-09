import { memo } from "react";
import { Link } from "react-router-dom";

export interface RegisterOptionsProps {
  acceptTerms: boolean;
  subscribeNewsletter: boolean;
  disabled?: boolean;
  onAcceptTermsChange: (checked: boolean) => void;
  onSubscribeNewsletterChange: (checked: boolean) => void;
}

const RegisterOptions = ({
  acceptTerms,
  subscribeNewsletter,
  disabled = false,
  onAcceptTermsChange,
  onSubscribeNewsletterChange,
}: RegisterOptionsProps) => {
  return (
    <div className="space-y-5">
      {/* Conditions */}

      <label
        htmlFor="acceptTerms"
        className="flex cursor-pointer items-start gap-3"
      >
        <input
          id="acceptTerms"
          type="checkbox"
          checked={acceptTerms}
          disabled={disabled}
          onChange={(event) => onAcceptTermsChange(event.target.checked)}
          className="
            mt-1
            h-5
            w-5
            rounded
            border-slate-300
            text-violet-600
            focus:ring-2
            focus:ring-violet-300
          "
          required
        />

        <span className="text-sm leading-6 text-slate-600">
          J'accepte les{" "}
          <Link
            to="/terms"
            className="font-semibold text-violet-600 hover:underline"
          >
            Conditions d'utilisation
          </Link>{" "}
          ainsi que la{" "}
          <Link
            to="/privacy"
            className="font-semibold text-violet-600 hover:underline"
          >
            Politique de confidentialité
          </Link>
          .
        </span>
      </label>

      {/* Newsletter */}

      <label
        htmlFor="newsletter"
        className="flex cursor-pointer items-start gap-3"
      >
        <input
          id="newsletter"
          type="checkbox"
          checked={subscribeNewsletter}
          disabled={disabled}
          onChange={(event) =>
            onSubscribeNewsletterChange(event.target.checked)
          }
          className="
            mt-1
            h-5
            w-5
            rounded
            border-slate-300
            text-violet-600
            focus:ring-2
            focus:ring-violet-300
          "
        />

        <span className="text-sm leading-6 text-slate-600">
          Je souhaite recevoir les nouveautés, conseils, offres exclusives et
          informations d'AmorAfrik par e-mail.
        </span>
      </label>
    </div>
  );
};

export default memo(RegisterOptions);
