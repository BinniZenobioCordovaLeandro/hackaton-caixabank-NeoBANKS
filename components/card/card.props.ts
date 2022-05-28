export interface CardProps {
  title?: string;
  titleType?: "h1" | "h2" | "title" | "body" | "label-large" | "label";
  alignTitle?: "flex-start" | "center" | "flex-end" | "space-between";
  type?: "shadow" | "outline";
  description?: string;
  children?: React.ReactNode;
  onlyContent?: boolean;
  actions?: React.ReactNode;
}
