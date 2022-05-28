export interface CardProps {
  title?: string;
  titleType?: "h1" | "h2" | "title" | "body" | "label-large" | "label";
  type?: "shadow" | "outline";
  description?: string;
  children?: React.ReactNode;
  onlyContent?: boolean;
  actions?: React.ReactNode;
}
