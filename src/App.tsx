import { FC } from "react";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import { MyDocument } from "./MyDocument";

export const App: FC = () => {
  return (
    <>
      <h1>react-pdf/render</h1>

      <PDFViewer>
        <MyDocument />
      </PDFViewer>

      <br />

      <PDFDownloadLink document={<MyDocument />} fileName="適性検査結果.pdf">
        PDFのダウンロード
      </PDFDownloadLink>
    </>
  );
};
