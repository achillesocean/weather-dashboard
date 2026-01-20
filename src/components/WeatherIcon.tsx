type Props = {
  src: string;
};

export default function WeatherIcon({ src }: Props) {
  return <img className="size-8" src={src} alt="condition-icon" />;
}
