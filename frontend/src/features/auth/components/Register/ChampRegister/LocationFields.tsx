import { memo } from "react";
import { ChevronDown, Globe2, MapPin } from "lucide-react";

export interface CountryOption {
  value: string;
  label: string;
}

export interface CityOption {
  value: string;
  label: string;
}

export interface LocationFieldsProps {
  country: string;
  city: string;
  countries: CountryOption[];
  cities: CityOption[];
  disabled?: boolean;
  onCountryChange: (value: string) => void;
  onCityChange: (value: string) => void;
}

const LocationFields = ({
  country,
  city,
  countries,
  cities,
  disabled = false,
  onCountryChange,
  onCityChange,
}: LocationFieldsProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {/* Pays */}

      <div>
        <label
          htmlFor="country"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Pays
          <span className="ml-1 text-rose-500">*</span>
        </label>

        <div className="relative">
          <Globe2
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <select
            id="country"
            value={country}
            disabled={disabled}
            onChange={(event) => onCountryChange(event.target.value)}
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
            <option value="">Sélectionnez votre pays</option>

            {countries.map((countryItem) => (
              <option key={countryItem.value} value={countryItem.value}>
                {countryItem.label}
              </option>
            ))}
          </select>

          <ChevronDown
            size={18}
            className="
              pointer-events-none
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-slate-400
            "
          />
        </div>
      </div>

      {/* Ville */}

      <div>
        <label
          htmlFor="city"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Ville
          <span className="ml-1 text-rose-500">*</span>
        </label>

        <div className="relative">
          <MapPin
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <select
            id="city"
            value={city}
            disabled={disabled}
            onChange={(event) => onCityChange(event.target.value)}
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
            <option value="">Sélectionnez votre ville</option>

            {cities.map((cityItem) => (
              <option key={cityItem.value} value={cityItem.value}>
                {cityItem.label}
              </option>
            ))}
          </select>

          <ChevronDown
            size={18}
            className="
              pointer-events-none
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-slate-400
            "
          />
        </div>
      </div>
    </div>
  );
};

export default memo(LocationFields);
