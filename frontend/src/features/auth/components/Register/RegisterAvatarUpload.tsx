import { memo, useRef } from "react";
import { Camera, User } from "lucide-react";

export interface RegisterAvatarUploadProps {
  preview: string | null;
  onImageChange: (file: File | null) => void;
  disabled?: boolean;
}

const RegisterAvatarUpload = ({
  preview,
  onImageChange,
  disabled = false,
}: RegisterAvatarUploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const openFilePicker = (): void => {
    if (!disabled) {
      inputRef.current?.click();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0] ?? null;

    onImageChange(file);
  };

  return (
    <div className="flex flex-col items-center">
      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp"
        className="hidden"
        disabled={disabled}
        onChange={handleChange}
      />

      <div className="relative">
        <button
          type="button"
          onClick={openFilePicker}
          disabled={disabled}
          className="
            group
            relative
            flex
            h-32
            w-32
            items-center
            justify-center
            overflow-hidden
            rounded-full
            border-4
            border-slate-200
            bg-slate-100
            transition-all
            duration-300
            hover:border-violet-500
            hover:shadow-xl
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          {preview ? (
            <img
              src={preview}
              alt="Photo de profil"
              className="h-full w-full object-cover"
            />
          ) : (
            <User
              size={54}
              className="text-slate-400 transition-transform duration-300 group-hover:scale-110"
            />
          )}
        </button>

        <button
          type="button"
          onClick={openFilePicker}
          disabled={disabled}
          className="
            absolute
            bottom-1
            right-1
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            bg-linear-to-r
            from-fuchsia-500
            via-purple-600
            to-indigo-600
            text-white
            shadow-lg
            transition-all
            duration-300
            hover:scale-110
            disabled:cursor-not-allowed
          "
        >
          <Camera size={18} />
        </button>
      </div>

      <button
        type="button"
        onClick={openFilePicker}
        disabled={disabled}
        className="
          mt-5
          text-sm
          font-medium
          text-slate-500
          transition-colors
          duration-300
          hover:text-violet-600
          disabled:cursor-not-allowed
        "
      >
        Photo de profil (optionnel)
      </button>
    </div>
  );
};

export default memo(RegisterAvatarUpload);
