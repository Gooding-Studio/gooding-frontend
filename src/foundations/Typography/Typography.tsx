import { Text } from "./Typography.styled";

interface TypographyProps {
  text: string;
  type: string;
  textover?: string;
  textoverwidth?: string;
  color?: string;
  display?: string;
}

function Typography({
  text,
  type,
  textover,
  textoverwidth,
  color,
  display = "block",
}: TypographyProps) {
  return (
    <Text
      type={type}
      textover={textover}
      textoverwidth={textoverwidth}
      color={color}
      display={display}
    >
      {text}
    </Text>
  );
}

export default Typography;
