import { memo } from "react";
import { User } from "lucide-react";

export interface NameFieldsProps {
  firstName: string;
  lastName: string;
  disabled?: boolean;
  onFirstNameChange: (value: string) => void;
  onLastNameChange: (value: string) => void;
}

const NameFields = ({
  firstName,
  lastName,
  disabled = false,
  onFirstNameChange,
  onLastNameChange,
}: NameFieldsProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {/* Prénom */}

      <div>
        <label
          htmlFor="firstName"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Prénom <span className="text-rose-500">*</span>
        </label>

        <div className="relative">
          <User
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            id="firstName"
            type="text"
            autoComplete="given-name"
            placeholder="Amara"
            value={firstName}
            disabled={disabled}
            onChange={(event) => onFirstNameChange(event.target.value)}
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
              disabled:cursor-not-allowed
              disabled:bg-slate-100
            "
            required
          />
        </div>
      </div>

      {/* Nom */}

      <div>
        <label
          htmlFor="lastName"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Nom <span className="text-rose-500">*</span>
        </label>

        <div className="relative">
          <User
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            id="lastName"
            type="text"
            autoComplete="family-name"
            placeholder="Koné"
            value={lastName}
            disabled={disabled}
            onChange={(event) => onLastNameChange(event.target.value)}
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
              disabled:cursor-not-allowed
              disabled:bg-slate-100
            "
            required
          />
        </div>
      </div>
    </div>
  );
};

export default memo(NameFields);
