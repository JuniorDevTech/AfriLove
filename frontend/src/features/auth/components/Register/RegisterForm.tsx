import { memo, useMemo, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

import RegisterAvatarUpload from "./RegisterAvatarUpload";
import RegisterFields from "./RegisterFields";
import RegisterHeader from "./RegisterHeader";
import RegisterOptions from "./RegisterOptions";
import LoginSubmitButton from "../Login/LoginSubmitButton";

import type { CityOption, CountryOption } from "./ChampRegister/LocationFields";

import type { CountryCodeOption } from "./ChampRegister/ContactFields";

const countries: CountryOption[] = [
  { value: "ci", label: "Côte d'Ivoire" },
  { value: "sn", label: "Sénégal" },
  { value: "cm", label: "Cameroun" },
  { value: "bf", label: "Burkina Faso" },
  { value: "ml", label: "Mali" },
];

const cities: CityOption[] = [
  { value: "abidjan", label: "Abidjan" },
  { value: "bouake", label: "Bouaké" },
  { value: "yamoussoukro", label: "Yamoussoukro" },
];

const phoneCodes: CountryCodeOption[] = [
  {
    value: "+225",
    label: "🇨🇮 +225",
  },
  {
    value: "+221",
    label: "🇸🇳 +221",
  },
  {
    value: "+237",
    label: "🇨🇲 +237",
  },
];

const RegisterForm = () => {
  const [avatar, setAvatar] = useState<File | null>(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const [phoneCode, setPhoneCode] = useState("+225");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [acceptTerms, setAcceptTerms] = useState(false);

  const [newsletter, setNewsletter] = useState(true);

  const [loading, setLoading] = useState(false);

  const preview = useMemo(() => {
    if (!avatar) {
      return null;
    }

    return URL.createObjectURL(avatar);
  }, [avatar]);

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    setLoading(true);

    try {
      /**
       * Plus tard :
       *
       * dispatch(registerThunk(...))
       */

      await new Promise((resolve) => setTimeout(resolve, 1500));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex min-h-screen w-full items-center justify-center">
      <div className="mx-auto w-full max-w-4xl px-8 py-16 lg:px-12">
        <RegisterHeader />

        <form onSubmit={handleSubmit} className="mt-10 space-y-10">
          <RegisterAvatarUpload
            preview={preview}
            onImageChange={setAvatar}
            disabled={loading}
          />

          <RegisterFields
            firstName={firstName}
            lastName={lastName}
            gender={gender}
            birthDate={birthDate}
            country={country}
            city={city}
            phoneCode={phoneCode}
            phoneNumber={phoneNumber}
            email={email}
            password={password}
            confirmPassword={confirmPassword}
            countries={countries}
            cities={cities}
            countryCodes={phoneCodes}
            disabled={loading}
            onFirstNameChange={setFirstName}
            onLastNameChange={setLastName}
            onGenderChange={setGender}
            onBirthDateChange={setBirthDate}
            onCountryChange={setCountry}
            onCityChange={setCity}
            onPhoneCodeChange={setPhoneCode}
            onPhoneNumberChange={setPhoneNumber}
            onEmailChange={setEmail}
            onPasswordChange={setPassword}
            onConfirmPasswordChange={setConfirmPassword}
          />

          <RegisterOptions
            acceptTerms={acceptTerms}
            subscribeNewsletter={newsletter}
            disabled={loading}
            onAcceptTermsChange={setAcceptTerms}
            onSubscribeNewsletterChange={setNewsletter}
          />

          <LoginSubmitButton loading={loading} />
        </form>

        <p className="mt-10 text-center text-slate-600">
          Vous avez déjà un compte ?
          <Link
            to="/login"
            className="
              ml-2
              font-semibold
              text-violet-600
              hover:text-violet-700
            "
          >
            Se connecter
          </Link>
        </p>
      </div>
    </section>
  );
};

export default memo(RegisterForm);
