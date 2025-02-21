import { Pressable, Text } from "react-native";
import { cn } from "../utils/cn";
import React from "react";

type ButtonProps = {
  title: string;
  onPress?: () => void;
  theme?: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
};

export const Button = React.forwardRef<
  React.ComponentRef<typeof Pressable>,
  ButtonProps
>(({ title, onPress, theme = "primary", disabled }, ref) => {
  return (
    <Pressable
      ref={ref}
      onPress={onPress}
      className={cn(
        "flex-row items-center justify-center rounded-md px-6 py-4 mb-4",
        theme === "primary" && "bg-black",
        theme === "secondary" && "bg-white border border-black",
        theme === "tertiary" && "bg-transparent",
        disabled && "opacity-50",
      )}
      disabled={disabled}
    >
      <Text
        className={cn(
          "font-semibold text-lg uppercase tracking-wider",
          theme === "secondary" && "text-black",
          theme === "primary" && "text-white",
          theme === "tertiary" && "text-gray-800",
        )}
      >
        {title} {disabled}
      </Text>
    </Pressable>
  );
});

Button.displayName = "Button";
