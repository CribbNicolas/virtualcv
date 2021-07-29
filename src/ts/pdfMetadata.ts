import { PdfModDate } from 'src/ts/models';

export const getModDate = async (pdfUrl) => {
    const pdfBlob = await fetch(pdfUrl).then(r => r.blob());
    const date = await pdfDetails(pdfBlob)

    function pdfDetails(pdfBlob) {
      return new Promise(done => {
        const reader = new FileReader();
        reader.onload = () => {
            const rawFile = reader.result as string;
            const regExp = /\/ModDate\s*\(D\W(?<year>\d{4})(?<month>\d{2})(?<day>\d{2})\d{6}\w\)/g
            const modDate = regExp.exec(rawFile)
          done(modDate?.groups);
        };
        reader.readAsBinaryString(pdfBlob);
      });
    }

    return date as PdfModDate
}