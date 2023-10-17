# PDF to OCR Service

Convert your PDF files into OCR JSON data with ease.

## Overview

This service provides an easy-to-use API that takes in a PDF file and returns the OCR information in a structured JSON format. Extracted data is organized by page and content type, ensuring efficient data processing for your applications.

## Endpoints

### POST /upload

Upload a PDF file and get the corresponding OCR data.

**Request Body:**

- Content type: `application/pdf`

**Response:**

- 200 OK: Successful OCR conversion, returns OCR data in JSON format.
- 400 Bad Request: Typically because of an invalid file format.
- 500 Internal Server Error: An error occurred during processing.

## Response Structure

OCR Data is organized by pages. Each page has its content which can be of type `text` or `image`. For `text` type, the corresponding OCR'ed text is provided.

```json
{
  "pages": [
    {
      "number": 1,
      "content": [
        {
          "type": "text",
          "position": {
            "x": 10,
            "y": 20,
            "width": 100,
            "height": 50
          },
          "text": "Sample OCR text here"
        }
        // ... other content items
      ]
    }
    // ... other pages
  ]
}
