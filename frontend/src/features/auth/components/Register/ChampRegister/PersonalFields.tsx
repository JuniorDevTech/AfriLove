import { memo } from "react";
import { CalendarDays, ChevronDown, VenusAndMars } from "lucide-react";

export interface PersonalFieldsProps {
  gender: string;
  birthDate: string;
  disabled?: boolean;
  onGenderChange: (value: string) => void;
  onBirthDateChange: (value: string) => void;
}

const PersonalFields = ({
  gender,
  birthDate,
  disabled = false,
  onGenderChange,
  onBirthDateChange,
}: PersonalFieldsProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {/* Sexe */}

      <div>
        <label
          htmlFor="gender"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Sexe <span className="text-rose-500">*</span>
        </label>

        <div className="relative">
          <VenusAndMars
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <select
            id="gender"
            value={gender}
            disabled={disabled}
            onChange={(event) => onGenderChange(event.target.value)}
            className="
              h-14
              w-full
              appearance-none
              rounded-2xl
              border
              border-slate-200
              bg-white
              pl-12
              pr-12
              text-slate-700
              outline-none
              transition-all
              duration-300
              focus:border-violet-500
              focus:ring-4
              focus:ring-violet-100
              disabled:cursor-not-allowed
              disabled:bg-slate-100
            "
            required
          >
            <option value="">Sélectionnez</option>
            <option value="male">Homme</option>
            <option value="female">Femme</option>
            <option value="other">Autre</option>
          </select>

          <ChevronDown
            size={18}
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
          />
        </div>
      </div>

      {/* Date de naissance */}

      <div>
        <label
          htmlFor="birthDate"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Date de naissance <span className="text-rose-500">*</span>
        </label>

        <div className="relative">
          <CalendarDays
            size={18}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            id="birthDate"
            type="date"
            value={birthDate}
            disabled={disabled}
            onChange={(event) => onBirthDateChange(event.target.value)}
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

export default memo(PersonalFields);
