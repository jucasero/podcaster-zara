import genericMessageStyles from './genericMessage.module.css';

export interface IMessageProps {
  title: string | number | undefined;
  subtitle?: string;
  description?: string;
}

export const GenericMessage: React.FC<IMessageProps> = ({ title, subtitle, description }: IMessageProps) => {
  const { container, marginTop } = genericMessageStyles;
  return (
    <div className={container}>
      <h2>{title}</h2>
      <h3 className={marginTop}>{subtitle}</h3>
      <p className={marginTop}>{description}</p>
    </div>
  );
};
