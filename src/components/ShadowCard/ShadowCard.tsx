import shadowCardStyles from './shadowCard.module.css';

interface IShadowCardProps {
  className?: string;
  children: React.ReactNode;
}

export const ShadowCard: React.FC<IShadowCardProps> = ({ className, children }: IShadowCardProps) => {
  return <div className={`${shadowCardStyles.container} ${className ?? ''}`}>{children}</div>;
};
