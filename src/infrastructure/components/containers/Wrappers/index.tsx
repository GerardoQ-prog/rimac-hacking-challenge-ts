import React from "react";
import { General, Grid } from "./style";

export const WrapperGeneral: React.FC = ({ children }) => {
  return <General>{children}</General>;
};

interface WrapperGridProps {
  percentage: number;
  children?: any;
}

export const WrapperGrid = ({ children, percentage }: WrapperGridProps) => {
  return <Grid percentage={percentage}>{children}</Grid>;
};
