import { memo } from "react";

import ContactFields, {
  type CountryCodeOption,
} from "./ChampRegister/ContactFields";
import LocationFields, {
  type CityOption,
  type CountryOption,
} from "./ChampRegister/LocationFields";
import NameFields from "./ChampRegister/NameFields";
import PasswordFields from "./ChampRegister/PasswordFields";
import PersonalFields from "./ChampRegister/PersonalFields";

export interface RegisterFieldsProps {
  firstName: string;
  lastName: string;

  gender: string;
  birthDate: string;

  country: string;
  city: string;

  phoneCode: string;
  phoneNumber: string;
  email: string;

  password: string;
  confirmPassword: string;

  countries: CountryOption[];
  cities: CityOption[];
  countryCodes: CountryCodeOption[];

  disabled?: boolean;

  onFirstNameChange: (value: string) => void;
  onLastNameChange: (value: string) => void;

  onGenderChange: (value: string) => void;
  onBirthDateChange: (value: string) => void;

  onCountryChange: (value: string) => void;
  onCityChange: (value: string) => void;

  onPhoneCodeChange: (value: string) => void;
  onPhoneNumberChange: (value: string) => void;
  onEmailChange: (value: string) => void;

  onPasswordChange: (value: string) => void;
  onConfirmPasswordChange: (value: string) => void;
}

const RegisterFields = ({
  firstName,
  lastName,

  gender,
  birthDate,

  country,
  city,

  phoneCode,
  phoneNumber,
  email,

  password,
  confirmPassword,

  countries,
  cities,
  countryCodes,

  disabled = false,

  onFirstNameChange,
  onLastNameChange,

  onGenderChange,
  onBirthDateChange,

  onCountryChange,
  onCityChange,

  onPhoneCodeChange,
  onPhoneNumberChange,
  onEmailChange,

  onPasswordChange,
  onConfirmPasswordChange,
}: RegisterFieldsProps) => {
  return (
    <div className="space-y-8">
      <NameFields
        firstName={firstName}
        lastName={lastName}
        disabled={disabled}
        onFirstNameChange={onFirstNameChange}
        onLastNameChange={onLastNameChange}
      />

      <PersonalFields
        gender={gender}
        birthDate={birthDate}
        disabled={disabled}
        onGenderChange={onGenderChange}
        onBirthDateChange={onBirthDateChange}
      />

      <LocationFields
        country={country}
        city={city}
        countries={countries}
        cities={cities}
        disabled={disabled}
        onCountryChange={onCountryChange}
        onCityChange={onCityChange}
      />

      <ContactFields
        phoneCode={phoneCode}
        phoneNumber={phoneNumber}
        email={email}
        countryCodes={countryCodes}
        disabled={disabled}
        onPhoneCodeChange={onPhoneCodeChange}
        onPhoneNumberChange={onPhoneNumberChange}
        onEmailChange={onEmailChange}
      />

      <PasswordFields
        password={password}
        confirmPassword={confirmPassword}
        disabled={disabled}
        onPasswordChange={onPasswordChange}
        onConfirmPasswordChange={onConfirmPasswordChange}
      />
    </div>
  );
};

export default memo(RegisterFields);
