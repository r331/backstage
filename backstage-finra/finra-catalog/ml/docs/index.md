# Model Runner Service

A service that runs models against provided plain text.

## POST /runModel

**Summary**:  
Run text through a specified model.

**Request Body**:

- `text` (string): Plain text to be processed by the model.
- `modelName` (string): Name of the model to run the text against. Allowed values: `model1`, `model2`, `model3`.

**Responses**:

- `200 OK`: Model execution was successful.
  - `text` (string): Original input text.
  - `modelName` (string): Name of the model that processed the text.
  - `output` (string): Model's output or result for the given text.

- `400 Bad Request`: Bad request, typically because of missing or invalid data.
- `500 Internal Server Error`: Internal server error or model execution error.

---

Note: Update the list of models (`model1`, `model2`, `model3`) as per your service's available models.
