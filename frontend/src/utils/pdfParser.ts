// import * as pdfjsLib from 'pdfjs-dist/build/pdf';

// // Set up the worker to run in the background
// pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

// export const extractTextFromPdf = async (file: File): Promise<string> => {
//   const loadingTask = pdfjsLib.getDocument(URL.createObjectURL(file));
//   const pdf = await loadingTask.promise;
//   let fullText = '';

//   for (let i = 1; i <= pdf.numPages; i++) {
//     const page = await pdf.getPage(i);
//     const textContent = await page.getTextContent();
//     const pageText = textContent.items.map(item => ('str' in item ? item.str : '')).join(' ');
//     fullText += pageText + '\n';
//   }

//   return fullText;
// };