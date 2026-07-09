import { memo } from "react";
import { ChevronDown, Mail, Phone } from "lucide-react";

export interface CountryCodeOption {
  value: string;
  label: string;
}

export interface ContactFieldsProps {
  phoneCode: string;
  phoneNumber: string;
  email: string;
  countryCodes: CountryCodeOption[];
  disabled?: boolean;
  onPhoneCodeChange: (value: string) => void;
  onPhoneNumberChange: (value: string) => void;
  onEmailChange: (value: string) => void;
}

const ContactFields = ({
  phoneCode,
  phoneNumber,
  email,
  countryCodes,
  disabled = false,
  onPhoneCodeChange,
  onPhoneNumberChange,
  onEmailChange,
}: ContactFieldsProps) => {
  return (
    <div className="space-y-6">
      {/* Téléphone */}

      <div>
        <label
          htmlFor="phone"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Numéro de téléphone
          <span className="ml-1 text-rose-500">*</span>
        </label>

        <div className="flex gap-3">
          {/* Indicatif */}

          <div className="relative w-36">
            <select
              value={phoneCode}
              disabled={disabled}
              onChange={(event) => onPhoneCodeChange(event.target.value)}
              className="
                h-14
                w-full
                appearance-none
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-4
                pr-10
                text-slate-700
                outline-none
                transition-all
                duration-300
                focus:border-violet-500
                focus:ring-4
                focus:ring-violet-100
                disabled:bg-slate-100
              "
            >
              {countryCodes.map((country) => (
                <option key={country.value} value={country.value}>
                  {country.label}
                </option>
              ))}
            </select>

            <ChevronDown
              size={18}
              className="
                pointer-events-none
                absolute
                right-3
                top-1/2
                -translate-y-1/2
                text-slate-400
              "
            />
          </div>

          {/* Numéro */}

          <div className="relative flex-1">
            <Phone
              size={18}
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-slate-400
              "
            />

            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              placeholder="0701020304"
              value={phoneNumber}
              disabled={disabled}
              onChange={(event) => onPhoneNumberChange(event.target.value)}
              className="
                h-14
                w-full
                rounded-2xl
                border
                border-slate-200
                bg-white
                pl-12
                pr-4
                text-slate-700
                outline-none
                transition-all
                duration-300
                placeholder:text-slate-400
                focus:border-violet-500
                focus:ring-4
                focus:ring-violet-100
                disabled:bg-slate-100
              "
              required
            />
          </div>
        </div>
      </div>

      {/* Email */}

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Adresse e-mail
          <span className="ml-1 text-rose-500">*</span>
        </label>

        <div className="relative">
          <Mail
            size={18}
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-slate-400
            "
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
              pl-12
              pr-4
              text-slate-700
              outline-none
              transition-all
              duration-300
              placeholder:text-slate-400
              focus:border-violet-500
              focus:ring-4
              focus:ring-violet-100
              disabled:bg-slate-100
            "
            required
          />
        </div>
      </div>
    </div>
  );
};

export default memo(ContactFields);
