---
name: pdf-reader
description: Use when the user asks to read, extract, or analyze content from PDF files, or when a PDF cannot be natively read by the model. Handles text extraction from PDFs using PyMuPDF (fitz) or pdfminer.six.
---

# PDF Reader

This project has `PyMuPDF` (`fitz`) and `pdfminer.six` available in the Python environment.

## Extract all text from a PDF

```bash
python3 -c "
import fitz
doc = fitz.open('$FILE')
for i, page in enumerate(doc):
    print(f'--- Page {i+1} ---')
    print(page.get_text())
"
```

## Large PDFs

Pipe output to a temp file, then read with the `Read` tool:

```bash
python3 -c "
import fitz
doc = fitz.open('$FILE')
for i, page in enumerate(doc):
    print(f'--- Page {i+1} ---')
    print(page.get_text())
" > /tmp/opencode/pdf-extract.txt
```

## Fallback

If `fitz` fails, use `pdfminer`:

```bash
python3 -m pdfminer.high_level "$FILE"
```
