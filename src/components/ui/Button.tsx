import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  variant?: "primary" | "danger" | "ghost";
  onClick?: () => void;
  type?: "button" | "submit";
};

export default function Button({
  children,
  variant = "primary",
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={clsx(
        "px-4 py-2 rounded-md text-sm font-medium transition",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        {
          "bg-black text-white hover:bg-gray-800 focus:ring-black":
            variant === "primary",
          "bg-red-600 text-white hover:bg-red-700 focus:ring-red-600":
            variant === "danger",
          "bg-transparent text-gray-600 hover:bg-gray-100": variant === "ghost",
        }
      )}
    >
      {children}
    </button>
  );
}
