const SAMPLE_CODE = `openapi: 3.0.3
info:
  version: 1.0.0
  title: DEMO
  description: demo spec
  license:
    name: MIT

servers:
  - url: "http://dev.api.test.domain/"
    description: Development Environment
  - url: "https://api.test.domain/"
    description: Production Environment

components:
  schemas:
    Author:
      type: object
      required:
        - id
        - name
      properties:
        id:
          type: string
        name:
          type: string
          description: author name
    Book:
      type: object
      description: Book Model
      required:
        - title
        - author
        - ISBN
        - publishAt
        - updatedAt
      properties:
        title:
          type: string
        author:
          $ref: "#/components/schemas/Author"
        ISBN:
          type: string
        publishAt:
          type: string
          format: date
        updatedAt:
          type: string
          format: date
  responses:
    Books:
      description: Get Books
      content:
        application/json:
          schema:
            type: object
            required:
              - books
            properties:
              books:
                type: array
                items:
                  $ref: "#/components/schemas/Book"


paths:
  /get/books:
    get:
      operationId: getBooks
      responses:
        200:
          $ref: "#/components/responses/Books"
  /search/books:
    get:
      operationId: searchBooks
      parameters:
        - in: query
          name: filter
          explode: true
          style: deepObject
          schema:
            type: object
            required:
              - title
              - author
            properties:
              title:
                type: string
              author:
                type: string
            additionalProperties:
              type: string
      responses:
        200:
          description: Get Books
          content:
            application/json:
              schema:
                type: object
                properties:
                  books:
                    type: array
                    items:
                      $ref: "#/components/schemas/Book"
`;

export interface State {
  code: string;
}

export const DEFAULT_STATE: State = {
  code: SAMPLE_CODE,
};
