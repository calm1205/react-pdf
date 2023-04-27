import { FC } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import { MyDocument } from "./MyDocument";

export const App: FC = () => {
  return (
    <PDFViewer>
      <MyDocument />
    </PDFViewer>
  );
};
