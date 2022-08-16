import genericMessageStyles from './genericMessage.module.css';

export interface IMessagePrps {
  title: string | number | undefined;
  subtitle?: string;
  description?: string;
}

export const GenericMessage: React.FC<IMessagePrps> = ({ title, subtitle, description }: IMessagePrps) => {
  const { container, marginTop } = genericMessageStyles;
  return (
    <div className={container}>
      <h2>{title}</h2>
      <h3 className={marginTop}>{subtitle}</h3>
      <p className={marginTop}>{description}</p>
    </div>
  );
};
